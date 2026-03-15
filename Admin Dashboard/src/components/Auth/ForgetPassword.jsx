import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgetPassword() {
    const [input, setInput] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="h-screen flex justify-center items-center bg-surface p-3">
            <div className="bg-neutral w-3xl shadow rounded-md text-body-medium ">
                <div className="py-30 px-15 sm:px-25">
                    <h1 className="text-text text-heading-large text-center">
                        Forgot Password?
                    </h1>
                    <p className="text-text-light text-center mt-1 mb-3">
                        No worries, we’ll send you reset instruction.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label className="input-label">
                            Email
                            <input
                                value={input}
                                onChange={(event) =>
                                    setInput(event.target.value)
                                }
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="input"
                            />
                        </label>
                        <button
                            type="submit"
                            className="bg-primary transition hover:bg-primary-hover text-body-large text-white block w-full py-3 rounded-md my-5 cursor-pointer"
                        >
                            Reset Password
                        </button>
                    </form>
                    <Link
                        to="/auth/login"
                        className="text-primary transition hover:text-primary-hover block w-fit mx-auto text-center"
                    >
                        Back to login
                    </Link>
                </div>
            </div>
        </div>
    );
}
