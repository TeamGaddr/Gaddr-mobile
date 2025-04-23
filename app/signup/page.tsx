'use client';
import * as React from 'react';
import Link from "next/link";
import Logo from "../components/Logo";
import InfoForm from "../components/InfoForm";
import GoogleLogin from "../components/GoogleLogin";

export default function SignupPage() {
    return (
        <div className="min-h-screen flex flex-col ">

            <hr className="border-gray-300" />

            <div className="flex flex-1 flex-col md:flex-row">

                <div className="flex-1 flex justify-center items-start p-4 md:p-0 md:-mr-32 z-10 md:pl-10 lg:pl-0 bg-[url('/images/signupWallpaper.svg')] bg-cover bg-no-repeat">
                    <div className="rounded-lg max-w-lg mx-auto mt-29.5 pt-6 md:pt-16 px-6 md:px-0 w-full">

                        {/* Logo */}
                        <Logo signUpSigninMessage='Sign up to create an account' welcomeMessage='Welcome to' />

                        {/* Form */}
                        <InfoForm />

                        {/* Submit Button */}
                        <div className="flex justify-center mt-9 ">
                            <button
                                type="submit"
                                className="w-50 h-12 py-2 bg-[#BD71D4] text-white rounded-md hover:bg-[#a361b8] transition"
                            >
                                <p className="text-xl leading-3">Sign up</p>
                            </button>
                        </div>

                        {/* Terms & conditions */}
                        <div className=' my-9'>
                            <div className="flex items-start">
                                <input type="checkbox" className='font-xs leading-3 mx-7' />
                                <div className='text-xs text-[#33302E]-400 leading-3'>
                                    I accept all the <span className='text-[#9C2BBF] font-semibold'>Terms & Conditions</span>
                                </div>
                            </div>

                            <div className="flex items-start mt-4 ">
                                <input type="checkbox" className='font-xs leading-3 mx-7' />
                                <div className='text-xs text-[#33302E]-400 leading-3.5'>
                                    I’d like to receive occasional emails about product updates, new features, and special promotions.
                                </div>
                            </div>
                        </div>

                        {/* Google Login Button */}
                        <GoogleLogin />

                        {/* Already have an account */}
                        <div className="flex justify-center mb-4">
                            <p className="text-center mt-4 font-openSans font-medium text-sm leading-4 text-[#575757]">
                                Already have an account?
                            </p>
                        </div>

                        {/* Sign Up Link */}
                        <div className="flex justify-center mt-7">
                            <Link
                                href="/login"
                                className="text-[#BD71D4] font-medium font-openSans italic font-sm hover:underline"
                            >
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}