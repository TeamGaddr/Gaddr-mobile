'use client';
import * as React from 'react';
import Link from "next/link";
import Logo from "../components/Logo";
import InfoForm from "../components/InfoForm";
import GoogleLogin from "../components/GoogleLogin";


/**
 * LoginForm is a client-side page that renders a form for users to log in.
 *
 * The component accepts no props and renders a form with input fields for email and password, a Google login button,
 * and a submit button. When the form is submitted, the component will call the `handleSubmit` function, which currently
 * just logs the email and password to the console. The component will also display an error message if either the email
 * or password fields are empty.
 *
 * @returns The LoginForm component.
 */
export default function LoginForm() {

  return (
    <div className="min-h-screen flex flex-col ">

      <hr className="border-gray-300" />

      <div className="flex flex-1 flex-col md:flex-row">

        <div className="flex-1 flex justify-center items-start p-4 md:p-0 md:-mr-32 z-10 md:pl-10 lg:pl-0 bg-[url('/images/signupWallpaper.svg')] bg-cover bg-no-repeat">

          <div className="rounded-lg max-w-lg mx-auto mt-29.5 pt-6 md:pt-16 px-6 md:px-0 w-full">
            {/* Logo */}
            <Logo signUpSigninMessage="Log in to get back on track." welcomeMessage='Welcome back to'/>

            {/* Form */}
            <InfoForm />

            {/* Google Login Button */}
            <GoogleLogin />

            {/* Don't have an account */}
            <div className="flex justify-center mb-4">
              <p className="text-center mt-4 font-openSans font-medium text-sm leading-4 text-[#575757]">
                Don’t have an account?
              </p>
            </div>

            {/* Sign Up Link */}
            <div className="flex justify-center mt-7">
              <Link
                href="/signup"
                className="text-[#BD71D4] font-medium font-openSans italic font-sm hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}