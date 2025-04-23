import React from "react";
import Image from "next/image";
import signupLogo from '@/app/assets/signupLogo.svg';

type Props = {
    signUpSigninMessage?: string;
    welcomeMessage?: string;
}

/**
 * LoginForm is a client-side component that renders a form for users to log in.
 *
 * The component accepts no props and renders a form with input fields for email and password, a Google login button,
 * and a submit button. When the form is submitted, the component will call the `handleSubmit` function, which currently
 * just logs the email and password to the console. The component will also display an error message if either the email
 * or password fields are empty.
 *
 * @returns The LoginForm component.
 */
export default function Logo({signUpSigninMessage,welcomeMessage}: Props) {

    return (

        <div className="text-center mb-10">
            <p className="font-bold text-xl text-center mb-1 leading-7 text-[#4A4744]">{welcomeMessage}</p>
            <div className="flex justify-center ">
                <Image
                    src={signupLogo}
                    alt="Signup logo"
                    className="w-60 h-15"
                    priority
                />
            </div>
            <p className="font-openSans font-normal text-xs leading-4 text-center text-[rgba(0, 0, 0, 1)] my-4 ">{signUpSigninMessage}</p>
        </div>
    );
}
