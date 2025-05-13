'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "../components/Logo";
import OTPInput from "../components/OTPInput";
export default function Varification() {
    const [email, setEmail] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [resendTimer, setResendTimer] = useState(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [popupMessage, setPopupMessage] = useState<string>("");
    const router = useRouter();

    // useEffect to retrieve the email from localStorage when the component mounts
    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        // Set the email from localStorage if it exists
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    // useEffect to set the resend timer
    useEffect(() => {
        if (resendTimer === 0) return;

        const interval = setInterval(() => {
            setResendTimer(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [resendTimer]);

    // Handle email verify (e.g., to send the recovery link)
    const verifyEmailCode = async (email: string, code: string): Promise<boolean> => {

        // Show loading state
        setLoading(true);
        setError(""); // Reset error message

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/verify-code`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, code }),
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log("Verification succeeded");
                setError(""); // clear
                setShowPopup(true);
                setPopupMessage("Verification succeeded");
                return true;

            } else {
                const errorData = await response.json();
                console.error("Verification failed:", errorData);
                console.log("Submitting verification code:", { email, code });
                setError(
                    errorData || "Something went wrong, please try again."
                );
                return false;
            }
        } catch (error) {
            // Handle any network or unexpected errors
            setError("An error occurred. Please try again.");
            console.error("Network or server error:", error);
            return false;
        }
    };

    // Handle form submission
    const handleVerifySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (code.length !== 6) {
            setError("Please enter a 6-digit code");
            return;
        }

        const isValid = await verifyEmailCode(email, code);
        if (!isValid) {
            setError("Verification code is incorrect or expired.");
            return;
        }
    };

    // Handle resend code
    const handleResend = async () => {
        if (resendTimer > 0) return; // counting down

        // resend the code


        setResendTimer(60); // counting down from 60 
    };

    return (

        <div className="min-h-screen flex flex-col ">

            <hr className="border-gray-300" />

            <div className="flex flex-1 flex-col md:flex-row">

                <div className="flex-1 flex justify-center items-start p-4 md:p-0 md:-mr-32 z-10 md:pl-10 lg:pl-0 bg-[url('/images/signupWallpaper.svg')] bg-cover bg-no-repeat">
                    <div className="rounded-lg max-w-lg mx-auto mt-29.5 pt-6 md:pt-16 px-6 md:px-0 w-full">

                        {/* Logo */}
                        <Logo welcomeMessage='Welcome to' />

                        {/* Verification Code */}
                        <div className="flex justify-center items-center mt-4 mb-3">
                            <span className='text-xl leading-8 font-bold text-[#6C5CE7]'>Verification Code</span>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleVerifySubmit}>
                            <div className="mb-4 ">
                                <label htmlFor="email" className="text-[#4A5568] mb-2 font-openSans font-light text-sm leading-5 text-center block">
                                    <p>Please enter the verification code sent to</p>
                                    <p className="font-bold">{email}</p>
                                </label>
                                <OTPInput onChange={(value) => setCode(value)} />
                            </div>

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
                                    className="w-50 h-12 py-2 bg-[#BD71D4] text-white rounded-md hover:bg-[#a361b8] transition"
                                >
                                    <p className="text-xl leading-3 hover:cursor-pointer">Verify</p>
                                </button>
                            </div>
                        </form>

                        {/* resend */}
                        <div className="flex justify-center mt-7 py-2">
                            <div className="flex justify-between items-center w-[300px]">
                                <span className="text-[#4A5568] font-openSans font-light text-sm leading-5">
                                    Didn't receive the code?
                                </span>
                                <button
                                    onClick={handleResend}
                                    disabled={resendTimer > 0}
                                    className={`text-sm font-semibold leading-5 transition ${resendTimer > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-[#C536FF] hover:underline'
                                        }`}
                                >
                                    {resendTimer > 0 ? `Resend (${resendTimer}s)` : 'Resend'}
                                </button>
                            </div>
                        </div>

                        {/* Popup Message */}
                        {showPopup && (
                            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                                    <h2 className="text-lg font-semibold mb-4">{popupMessage}</h2>
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
                    </div>
                </div>
            </div>
        </div >
    );

}