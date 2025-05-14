'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import showPasswordIcon from "@/app/assets/showPasswordIcon.svg";
import Logo from "../components/Logo";

export default function ResetPassword() {
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
    const [passwordError, setPasswordError] = useState<string>("");
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] =
        useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [generalError, setGeneralError] = useState<string | null>(null);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const router = useRouter();


    // Extract the token from the URL query string
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const tokenFromUrl = queryParams.get("token");
        if (tokenFromUrl) {
            setToken(tokenFromUrl);
        }
    }, []);


    // Handle form submission (e.g., to send the recovery link)
    /**
   * Validates the provided password against a set of criteria.
   * Sets an error message if the password does not meet the requirements.
   * Criteria: Password must be at least 8 characters long, include at least
   * one uppercase letter, one lowercase letter, one number, and one special character.
   *
   * @param {string} password - The password to validate.
   */
    const validatePassword = (password: string): void => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\W_]{8,}$/;

        if (!passwordRegex.test(password)) {
            setPasswordError(
                "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number."
            );
        } else {
            setPasswordError("");
        }
    };

    /**
     * Handles the submission of the set new password form by preventing the default form
     * submission behavior, validating that the new password and confirmation match, and
     * checking that the password meets the required criteria. If the passwords do not match
     * or the password is invalid, it sets the appropriate error state. If the passwords match
     * and are valid, it proceeds with the password update logic and alerts the user of a successful
     * update. The form fields and error states are reset after a successful submission, and the
     * user is redirected to the login page.
     *
     * @param {React.FormEvent} e - The form submission event.
     */
    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordMatch(false);
            return;
        }

        validatePassword(password);

        if (passwordError) {
            return;
        }

        if (!token) {
            setGeneralError("Token is missing. Please try again.");

            return;
        }

        // Make API request to update the password
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/reset-password`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token: token,
                        new_password: password,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Password reset failed.");
            }

            // Show the confirmation popup instead of the alert
            setShowPopup(true);

            // Reset the form and error states after successful submit
            setPassword("");
            setConfirmPassword("");
            setPasswordError("");
            setPasswordMatch(true);

            // Redirect user to the login page after a short delay (popup visibility)
            setTimeout(() => {
                router.push("/login");
            }, 3000);
        } catch (error) {
            setGeneralError("An error occurred. Please try again.");
        }
    };

    /**
     * Toggles the visibility of the password input field by updating the
     * `passwordVisible` state. This function is typically called when the user
     * interacts with a button to show or hide the password.
     */
    const togglePasswordVisibility = (): void => {
        setPasswordVisible(!passwordVisible);
    };

    /**
     * Toggles the visibility of the confirm password input field by updating the
     * `confirmPasswordVisible` state. This function is typically called when the
     * user interacts with a button to show or hide the confirm password.
     */
    const toggleConfirmPasswordVisibility = (): void => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
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
                                <label htmlFor="password" className="block text-gray-700 mb-2 font-openSans font-semibold text-sm leading-5">
                                    Please enter your password:
                                </label>

                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter new password..."
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        validatePassword(e.target.value);
                                      }}
                                    className="w-full h-11 px-4 py-2 border border-[#4A4744] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 italic bg-white"
                                    required
                                />
                            </div>

                            {/* Confirm Password Input */}
                            <div className="mb-4 relative">
                                <label
                                    htmlFor="confirmPassword"
                                    className="text-gray-700  flex mb-1"
                                >
                                    Confirm your new password:
                                </label>

                                <input
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm your password..."
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full h-11 px-4 py-2 border border-[#4A4744] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 italic bg-white"
                                    required
                                />
                                {!passwordMatch && (
                                    <p className="text-red-500 text-sm mt-2">
                                        Passwords do not match!
                                    </p>
                                )}
                            </div>


                            {/* Error Message */}
                            {passwordError && (
                                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                            )}

                            {/* Submit Button */}
                            <div className="flex justify-center mt-9 ">
                                <button
                                    type="submit"
                                    className="px-6 py-4 bg-[#BD71D4] text-white rounded-md hover:bg-[#a361b8] transition"
                                >
                                    <p className="text-xl leading-3 hover:cursor-pointer">Reset</p>
                                </button>
                            </div>
                        </form>

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