// let mut conn = pool.get().expect("Failed to get DB connection.");
// line above blocking code
// let conn_asyc = web::block(move || {
//         pool.clone().get().expect("Failed to get DB connection.")
//         your variable =  anything
//         your_query(&mut conn, anything)
//     })
//     .await;
// let mut conn = conn_asyc.expect("Failed to establish connection");
// replaces the above code with the following
// let mut conn = run_async_query!(pool);
/**
 * This macro is used to get a database connection asynchronously.
 * It takes a connection pool and a query as arguments.
 * It returns the result of the query.
 * Example:
 * ```
 * let user = run_async_query!(pool, |conn: &mut diesel::PgConnection| {
 *     let id: i32 = get_user_id_by_email(&user_sub.0, conn).expect("Failed to get user id");
 *     project_service::create_project(conn, &project.title, &project.description, &id)
 * });
 * ```
 */
#[macro_export]
macro_rules! run_async_query {
    ($pool:expr,$query:expr) => {{
        use crate::database::error::DatabaseError;
        use actix_web::error::ErrorInternalServerError;
        web::block(move || {
            let mut conn = $pool.get().map_err(DatabaseError::from)?;
            $query(&mut conn)
        })
        .await
        .map_err(ErrorInternalServerError)?
        // .map_err(ErrorInternalServerError).expect("internal server error")
    }};
}

#[macro_export]
macro_rules! run_async_typesense_query {
    // 用于异步闭包执行，推荐传 async move || {...}
    ($email:expr, $query:expr, $token:expr) => {{
        use crate::search::error::ReqError;
        use actix_web::error::ErrorInternalServerError;

        let email_owned = $email.to_string();
        let token_owned = $token.to_string();

        ($query)(email_owned, token_owned)
            .await
            .map_err(ErrorInternalServerError)?
    }};

    // 用于调用非 async 代码块，跑 web::block
    ($search_state:expr, $query:expr, $url:expr, $user:expr) => {{
        use crate::search::error::ReqError;
        use actix_web::error::ErrorInternalServerError;

        actix_web::web::block(move || {
            ($query)($search_state, $url, $user).map_err(ReqError::from)
        })
        .await
        .map_err(ErrorInternalServerError)?
    }};
}