'use client';
import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Logo from "../components/Logo";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [popupEmail, setPopupEmail] = useState<string>("");
    const [popupMessage, setPopupMessage] = useState<string>("");
    const router = useRouter();

    // Handle form submission (e.g., to send the recovery link)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Show loading state
        setLoading(true);
        setError(""); // Reset error message

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/forgot-password`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }), // Send the email in the request body
                }
            );

            if (!response.ok) {
                // Handle error if the response is not OK (status code is not 2xx)
                const errorData = await response.json();
                setError(
                    errorData.message || "Something went wrong, please try again."
                );
            } else {
                // Success: Show an alert or message
                setPopupEmail(email); // Save the email for the popup
                setShowPopup(true);
                setEmail(""); // Clear the input field
                setPopupMessage("A recovery link has been sent to your email address. Please check your inbox.");

                //save the email in localStorage and redirect to verification page
                localStorage.setItem("userEmail", email);
            }
        } catch (error) {
            // Handle any network or unexpected errors
            setError("An error occurred. Please try again.");
        } finally {
            // Hide loading state after request is done
            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen flex flex-col ">

            <hr className="border-gray-300" />

            <div className="flex flex-1 flex-col md:flex-row">

                <div className="flex-1 flex justify-center items-start p-4 md:p-0 md:-mr-32 z-10 md:pl-10 lg:pl-0 bg-[url('/images/signupWallpaper.svg')] bg-cover bg-no-repeat">
                    <div className="rounded-lg max-w-lg mx-auto mt-28 pt-6 md:pt-16 px-6 md:px-0 w-full">

                        {/* Logo */}
                        <Logo signUpSigninMessage="Reset your password" welcomeMessage='Welcome to' />

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
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
                                    className="w-full h-11 px-4 py-2 border border-[#4A4744] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 italic bg-white"
                                    required
                                />
                            </div>

                            {email && !/\S+@\S+\.\S+/.test(email) && (
                                <p
                                    id="email-error"
                                    className="text-red-500 text-sm mt-1"
                                    role="alert"
                                >
                                    Please enter a valid email address.
                                </p>
                            )}

                            {/* Error Message */}
                            {error && (
                                <div className="text-red-500 text-center mb-4 -mt-2 text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="flex justify-center mt-9 ">
                                <button
                                    type="submit"
                                    className="px-6 py-4 bg-[#BD71D4] text-white rounded-md hover:bg-[#a361b8] transition"
                                >
                                    <p className="text-xl leading-3 hover:cursor-pointer">{loading ? "Sending..." : "Send"}</p>
                                </button>
                            </div>
                        </form>

                        {/* Popup Message */}
                        {showPopup && (
                            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                                    <h2 className="text-lg font-semibold mb-4">Success!</h2>
                                    <p>{popupMessage}</p>
                                    <button
                                        onClick={() => {
                                            setShowPopup(false)
                                            router.push("/login");
                                        }}
                                        className="mt-4 bg-[#BD71D4] text-white rounded-md px-4 py-2 hover:bg-[#a361b8] transition"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}


                        {/* Back to Login */}
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