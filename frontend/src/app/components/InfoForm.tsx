import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import showPasswordIcon from "@/app/assets/showPasswordIcon.svg";


export default function InfoForm() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    /**
     * Handles the form submission by preventing the default form submission
     * behavior, performing simple validation on the email and password fields,
     * and attempting to log the user in with the provided credentials.
     * If the email or password fields are empty, it logs an error message.
     * If the credentials are valid, it proceeds with the login logic (e.g., sends
     * the credentials to an API).
     *
     * @param {React.FormEvent} e - The form submission event.
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!email || !password) {
            setError("Please fill in both email and password fields.");
            return;
        }

        try {
            // Send the login request
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );

            if (!response.ok) {
                throw new Error("Invalid email or password. Please try again.");
            }

            const data = await response.json();

            // Extract the token from the Authorization header
            const token = response.headers.get("Authorization")?.split(" ")[1]; // This will get the Bearer token part

            if (token) {
                // Save the token in localStorage
                localStorage.setItem("token", token);
            }

            console.log("Login successful:", data);

            // Clear previous errors
            setError(null);

            // Redirect or update the UI upon successful login
            router.push("/");
        } catch (error) {
            // Handle any errors that occur during the API call
            console.error("Login error:", error);

            // Extract the error message
            let errorMessage =
                "An error occurred while logging in. Please try again.";

            if (error instanceof Error) {
                if (
                    "response" in error &&
                    error.response &&
                    typeof error.response === "object"
                ) {
                    errorMessage =
                        (error.response as any)?.data?.message || error.message;
                } else {
                    errorMessage = error.message; // Fallback to the generic error message
                }
            }

            setError(errorMessage);
        }
    };

    /**
     * Handles the "Show password" button click. When clicked, this function toggles
     * the state of the `showPassword` state variable, which controls whether the
     * password input field is displayed as a password or as plain text.
     */
    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <form onSubmit={handleSubmit}>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 px-4 py-2 border border-[#4A4744] rounded-md 
                  focus:outline-none focus:ring-2 focus:ring-purple-300 italic bg-white"
                    required
                />
            </div>

            {/* Password Input */}
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 mb-2 font-openSans font-semibold text-sm leading-4">
                    Password
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-11 px-4 py-2 border border-[#4A4744] rounded-md 
                    focus:outline-none focus:ring-2 focus:ring-purple-300 italic bg-white"
                        required
                    />
                    <div
                        className="absolute right-3 top-2.5 cursor-pointer z-10 w-3 h-2.5 mt-2"
                        onClick={handleShowPassword}
                    >
                        <Image
                            src={showPasswordIcon}
                            alt="Toggle password visibility"
                        />
                    </div>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <p className="text-red-500 text-sm -mt-3 pb-2">{error}</p>
            )}

                        {/* Forgot Password Link */}
                        <div className="flex mb-9 justify-end -mt-3 p-2">
                <Link
                    href="/forgotPassword"
                    className="text-[#BD71D4] font-semibold font-openSans italic inline-block hover:underline text-xs leading-3"
                >
                    Forgot your password?
                </Link>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mb-7">
                <button
                    type="submit"
                    className="px-6 py-4 bg-[#BD71D4] text-white rounded-md hover:bg-[#a361b8] transition"
                >
                    <p className="text-xl leading-3 hover:cursor-pointer">Log in</p>
                </button>
            </div>

        </form>
    );
}
