import { useState } from "react";

export default function Login() {
    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="bg-neutral p-4 grid lg:grid-cols-2 gap-4 h-screen">
            <div className=" flex items-center p-4">
                <div className="w-full">
                    <h1 className="text-heading-large">Sign Up</h1>
                    <p className="text-text-light text-body-small mb-4">
                        Start your 30-day free trial.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={inputs.fullName}
                            onChange={(event) =>
                                setInputs((previousState) => ({
                                    ...previousState,
                                    fullName: event.target.value,
                                }))
                            }
                            required
                            placeholder="Full Name"
                            className="input"
                        />
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
                            placeholder="Email Address"
                            className="input"
                        />
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
                            placeholder="Password"
                            className="input"
                        />
                        <p className="my-5 text-text-light text-body-small">
                            You are agreeing to the{" "}
                            <a href="#" className="text-primary">
                                Terms of Services
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-primary">
                                Privacy Policy
                            </a>
                        </p>
                        <button
                            type="submit"
                            className="bg-primary transition hover:bg-primary-hover text-body-large text-white block w-full py-3 my-5 rounded-md cursor-pointer"
                        >
                            Get started
                        </button>
                    </form>
                    <p className="text-center">
                        Already a member?
                        <a href="#" className="text-primary ml-2">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
            <div className="bg-primary rounded-lg p-10 max-lg:hidden">
                <p className="text-white text-display-large max-w-sm mt-10">
                    Very good works are waiting for you Sign up Now
                </p>
            </div>
        </div>
    );
}
