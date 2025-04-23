import React from "react";
import Image from "next/image";
import googleIcon from "@/app/assets/googleIcon.svg";

export default function GoogleLogin() {
    /**
 * Handles the "Log in with Google" button click. This function should be
 * implemented to use a service like Firebase, OAuth, etc. to log the user in
 * with their Google account.
 */
    const handleLoginWithGoogle = () => {
        // Implement Google login here (using a service like Firebase, OAuth, etc.)
        console.log("Logging in with Google...");
    };

    return (
        <div>
            <div className="flex items-center my-4">
                <hr className="flex-grow border-black-300" />
                <span className="px-2 font-openSans font-semibold text-black-700 italic text-xs leading-4">Or sign in with</span>
                <hr className="flex-grow border-black-300" />
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleLoginWithGoogle}
                    className="w-13 h-11 my-3 flex items-center justify-center space-x-2 border border-[#4A4744] py-2 rounded-md transition cursor-not-allowed"
                    title="Google login is temporarily unavailable"
                >
                    <Image
                        src={googleIcon}
                        alt="Google Sign-In logo"
                        className="w-7 h-7"
                    />
                </button>
            </div>
        </div>
    )
}