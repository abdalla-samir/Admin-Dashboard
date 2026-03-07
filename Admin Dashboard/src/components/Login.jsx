import { useState } from "react";
import Google from "../assets/icons/Google.svg";
import Facebook from "../assets/icons/Facebook.svg";

export default function Login() {
    const [inputs, setInputs] = useState({ email: "", password: "" });
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="bg-neutral p-4 grid lg:grid-cols-2 gap-4 h-screen">
            <div className="flex items-center p-4 ">
                <div className="w-full">
                    <h1 className="text-heading-large">Login</h1>
                    <p className="text-text-light text-body-small mb-4">
                        How do i get started lorem ipsum dolor at?
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label className="input-label mb-4 block">
                            Email
                            <input
                                type="email"
                                value={inputs.email}
                                onChange={(event) =>
                                    setInputs((previousState) => ({
                                        ...previousState,
                                        email: event.target.value,
                                    }))
                                }
                                required
                                placeholder="Enter your email"
                                className="input"
                            />
                        </label>
                        <label className="input-label">
                            Password
                            <input
                                type="password"
                                value={inputs.password}
                                onChange={(event) =>
                                    setInputs((previousState) => ({
                                        ...previousState,
                                        password: event.target.value,
                                    }))
                                }
                                required
                                placeholder=". . . . . . . . . . . . ."
                                className="input"
                            />
                        </label>
                        <a
                            href="#"
                            className="block w-fit ml-auto text-right text-primary my-5"
                        >
                            Forgot Password
                        </a>
                        <button
                            type="submit"
                            className="bg-primary transition hover:bg-primary-hover text-body-large text-white block w-full py-3 rounded-md cursor-pointer"
                        >
                            Sign in
                        </button>
                    </form>
                    <button className="w-full flex justify-center items-center gap-4 border border-border rounded-full p-4 my-4 cursor-pointer hover:bg-surface transition">
                        <img
                            src={Google}
                            width={18}
                            height={18}
                            alt="Google icon"
                        />
                        Sign in with Google
                    </button>
                    <button className="w-full flex justify-center items-center gap-4 border border-border rounded-full p-4 my-4 cursor-pointer hover:bg-surface transition">
                        <img
                            src={Facebook}
                            width={18}
                            height={18}
                            alt="Facebook icon"
                        />
                        Sign in with Facebook
                    </button>
                    <p className="text-center">
                        Dont’t have an account.
                        <a href="#" className="text-primary ml-2">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
            <div className="bg-primary rounded-lg p-10 max-lg:hidden">
                <p className="text-white text-display-large max-w-sm mt-7">
                    Very good works are waiting for you Sign up Now
                </p>
            </div>
        </div>
    );
}
