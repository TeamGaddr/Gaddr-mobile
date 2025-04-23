'use client';
import * as React from 'react';
import { useState } from 'react';
import Link from "next/link";
import Logo from "../components/Logo";
export default function ForgotPasswordPage() {
    const [email, setEmail] = useState<string>("");

    return (

        <div className="min-h-screen flex flex-col ">

            <hr className="border-gray-300" />

            <div className="flex flex-1 flex-col md:flex-row">

                <div className="flex-1 flex justify-center items-start p-4 md:p-0 md:-mr-32 z-10 md:pl-10 lg:pl-0 bg-[url('/images/signupWallpaper.svg')] bg-cover bg-no-repeat">
                    <div className="rounded-lg max-w-lg mx-auto mt-29.5 pt-6 md:pt-16 px-6 md:px-0 w-full">

                        {/* Logo */}
                        <Logo signUpSigninMessage="Reset your password" welcomeMessage='Welcome to' />

                        {/* Form */}
                        <div className="mb-4 ">
                            <label htmlFor="email" className="block text-gray-700 mb-2 font-openSans font-semibold text-sm leading-5">
                                We will send you a recovery link to this email address:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-11 px-4 py-2 border border-[#4A4744] rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-purple-300 italic bg-white"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-9 ">
                            <button
                                type="submit"
                                className="w-50 h-12 py-2 bg-[#BD71D4] text-white rounded-md hover:bg-[#a361b8] transition"
                            >
                                <p className="text-xl leading-3">Send</p>
                            </button>
                        </div>

                                                {/* Sign Up Link */}
                                                <div className="flex justify-center mt-7">
                            <Link
                                href="/login"
                                className="text-[#BD71D4] font-medium font-openSans italic font-sm hover:underline"
                            >
                                Back to Login
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    );

}