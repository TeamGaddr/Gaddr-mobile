'use client';
import * as React from 'react';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "../components/Logo";
import showPasswordIcon from "@/app/assets/showPasswordIcon.svg";
import Image from "next/image";
import GoogleLogin from "../components/GoogleLogin";

/**
 * The SignUpForm component renders a sign up form with fields for email, password,
 * checkbox for accepting terms and conditions, and an optional checkbox for
 * receiving updates. The form also includes a button to sign up with Google.
 * The component handles form submission and validation.
 *
 * @returns The SignUpForm component.
 */

interface FormData {
    username: string;
    email: string;
    password: string;
    acceptTerms: boolean;
    receiveUpdates: boolean;
}

export default function SignupPage() {
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        password: "",
        acceptTerms: false,
        receiveUpdates: false,
    });

    const [passwordError, setPasswordError] = useState<string>("");
    const [generalError, setGeneralError] = useState<string>("");
    const [signUpError, setsignUpError] = useState<string>("");
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const router = useRouter();

    /**
     * Handles input change events by updating the formData state with the new
     * value of the input element. If the input element is the password field,
     * it also validates the password and sets the passwordError state
     * accordingly.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        if (name === "password") {
            validatePassword(value);
        }
    };

    /**
     * Validates the provided password against a set of criteria.
     * Sets an error message if the password does not meet the requirements.
     * Criteria: Password must be at least 8 characters long, include at least
     * one uppercase letter, one lowercase letter, one number, and one special character.
     *
     * @param {string} password - The password to validate.
     */
    const validatePassword = (password: string) => {
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
     * Handles the sign up form submission by preventing the default form submission
     * behavior, validating the password, and attempting to submit the form data
     * to a mock API (or actual API call). If the password is invalid, it logs a
     * message to the console and returns early. If the API call is successful, it
     * resets any previous error and resets the form data. If the API call fails,
     * it sets a general error message.
     *
     * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
     */
    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (passwordError) {
            console.log("Fix password issues before submitting.");
            return;
        }

        if (!formData.acceptTerms) {
            setGeneralError("You must accept the terms and conditions.");
            return;
        }

        try {
            // Make the API call to your actual endpoint
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: formData.username,
                        email: formData.email,
                        password: formData.password,
                    }),
                }
            );

            if (!response.ok) {
                // Handle error if the response is not OK (status code is not 2xx)
                setsignUpError("Failed to sign up. Please try again.");
                throw new Error("Failed to sign up. Please try again.");
            }

            // send verification code to the email
            const codeResponse = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/send-verification-code`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: formData.email }),
                }
            );

            if (!codeResponse.ok) {
                throw new Error("Verification code sending failed");
            }

            // save email and redirect to verification page
            localStorage.setItem("userEmail", formData.email);

            const data = await response.json();
            localStorage.setItem("userEmail", `${formData.email}`);
            console.log("Sign up successful:", data);
            router.push("/verification");

            // Reset form data and any previous errors upon successful sign-up
            setGeneralError("");
            setFormData({
                username: "",
                email: "",
                password: "",
                acceptTerms: false,
                receiveUpdates: false,
            });

        } catch (error) {
            setGeneralError(
                "An error occurred while submitting the form. Please try again later."
            );
            console.error("Error during sign up:", error);
        }
    };

    /**
     * Redirects the user to the Google Sign-In page. This function is called
     * when the user clicks the "Sign up with Google" button.
     */
    const handleGoogleSignUp = (): void => {
        console.log("Redirecting to Google Sign-In...");
    };

    /**
     * Toggles the visibility of the password input field. When the user clicks the
     * "Show password" button, this function is called to toggle the state of the
     * `passwordVisible` state variable.
     */
    const togglePasswordVisibility = (): void => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="min-h-screen flex flex-col ">

            <hr className="border-gray-300" />

            <div className="flex flex-1 flex-col md:flex-row">

                <div className="flex-1 flex justify-center items-start p-4 md:p-0 md:-mr-32 z-10 md:pl-10 lg:pl-0 bg-[url('/images/signupWallpaper.svg')] bg-cover bg-no-repeat">
                    <div className="rounded-lg max-w-lg mx-auto mt-28 pt-6 md:pt-16 px-6 md:px-0 w-full">

                        {/* Logo */}
                        <Logo signUpSigninMessage='Sign up to create an account' welcomeMessage='Welcome to' />

                        {/* Form */}
                        <form onSubmit={handleSignUp}>
                            {/* Email Input */}
                            <div className="mb-4 ">
                                <label htmlFor="email" className="block text-gray-700 mb-2 font-openSans font-semibold text-sm leading-4">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email..."
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full h-11 px-4 py-2 border border-[#4A4744] rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-purple-300 italic bg-white"
                                    required
                                    aria-invalid={passwordError ? "true" : "false"} // Use "true" or "false" as per the validation state
                                    aria-describedby="email-error" // If you have a specific error message for the input
                                />
                                {formData.email && !/\S+@\S+\.\S+/.test(formData.email) && (
                                    <p
                                        id="email-error"
                                        className="text-red-500 text-sm mt-1"
                                        role="alert"
                                    >
                                        Please enter a valid email address.
                                    </p>
                                )}
                            </div>

                            {/* Password Input */}
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 mb-2 font-openSans font-semibold text-sm leading-4">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password..."
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="w-full h-11 px-4 py-2 border border-[#4A4744] rounded-md 
                        focus:outline-none focus:ring-2 focus:ring-purple-300 italic bg-white"
                                        required
                                    />
                                    <div
                                        className="absolute right-3 top-2.5 cursor-pointer z-10 w-3 h-2.5 mt-2"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <Image
                                            src={showPasswordIcon}
                                            alt="Toggle password visibility"
                                        />
                                    </div>
                                </div>
                                {passwordError && (
                                    <p
                                        id="password-error"
                                        className="text-red-500 text-sm mt-1"
                                        role="alert"
                                    >
                                        {passwordError}
                                    </p>
                                )}
                            </div>

                            {/* Error Message */}
                            {signUpError && (
                                <p
                                    id="password-error"
                                    className="text-red-500 text-sm mt-1"
                                    role="alert"
                                >
                                    {signUpError}
                                </p>
                            )}

                            {/* Submit Button */}
                            <div className="flex justify-center mt-9">
                                <button
                                    type="submit"
                                    className="px-6 py-4 bg-[#BD71D4] text-white rounded-md hover:bg-[#a361b8] transition"
                                >
                                    <p className="text-xl leading-3 hover:cursor-pointer">Sign up</p>
                                </button>
                            </div>


                            {/* Terms & conditions */}
                            <div className=' my-9'>
                                <div className="flex items-start">
                                    <input type="checkbox"
                                        name="acceptTerms"
                                        checked={formData.acceptTerms}
                                        onChange={handleInputChange}
                                        className='font-xs leading-3 mx-7'
                                        required />
                                    <div className='text-xs text-[#33302E]-400 leading-3'>
                                        I accept all the <span className='text-[#9C2BBF] font-semibold'>Terms & Conditions</span>
                                    </div>
                                </div>

                                <div className="flex items-start mt-4 ">
                                    <input type="checkbox"
                                        name="receiveUpdates"
                                        checked={formData.receiveUpdates}
                                        onChange={handleInputChange}
                                        className='font-xs leading-3 mx-7' />
                                    <div className='text-xs text-[#33302E]-400 leading-3.5'>
                                        I’d like to receive occasional emails about product updates, new features, and special promotions
                                    </div>
                                </div>
                            </div>
                        </form>

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
            </div >
        </div >
    );
}