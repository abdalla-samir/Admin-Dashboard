import { useState } from "react";
import Heading from "../../Heading";
import { securityData } from "../../../data/securityData";

export default function Security() {
    const [inputs, setInputs] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const devices = securityData.devices.map((device) => {
        const date = new Date(device.lastActive);
        const options = {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        };
        const formatted = date.toLocaleString("en-us", options);
        const finalDateFormated = formatted.replace(", ", " at ");
        return (
            <li key={device.id} className="flex flex-col">
                <span className="text-text text-title-small">
                    {device.name}
                </span>
                <span className="text-text-light text-body-small">
                    {device.location}, {finalDateFormated}
                </span>
            </li>
        );
    });
    return (
        <div className="flex-1 gap-4 flex flex-col">
            <h1 className="text-heading-medium">Security Setting</h1>
            <div className="flex-1 grid xl:grid-cols-[3fr_1fr] gap-6">
                <div className="bg-white p-6 flex flex-col gap-3 rounded">
                    <Heading
                        heading="Password"
                        description="The Last Pass password generator creates random 
                        passwords based on parameters set by you."
                        size={{ head: "large", description: "small" }}
                    />
                    <form className="flex flex-col gap-3">
                        <label className="input-label text-body-medium">
                            Current password
                            <input
                                name="currentPassword"
                                value={inputs.currentPassword}
                                onChange={handleChange}
                                type="text"
                                required
                                placeholder="Current Password"
                                className="input"
                            />
                        </label>
                        <label className="input-label text-body-medium">
                            New password
                            <input
                                name="newPassword"
                                value={inputs.newPassword}
                                onChange={handleChange}
                                type="text"
                                required
                                placeholder="New Password"
                                className="input"
                            />
                        </label>
                        <label className="input-label text-body-medium">
                            Confirm password
                            <input
                                name="confirmPassword"
                                value={inputs.confirmPassword}
                                onChange={handleChange}
                                type="text"
                                required
                                placeholder="Confirm Password"
                                className="input"
                            />
                        </label>
                    </form>
                    <div className="bg-surface-muted p-6 flex flex-col gap-2 rounded">
                        <h3 className="text-title-small">Rules for password</h3>
                        <p className="text-body-medium text-text-light">
                            To create a new password, you have to meet all of
                            the following requirements.
                        </p>
                        <ul className="list-disc ml-4 text-body-small">
                            <li>
                                <span className="text-text-light">
                                    Minimum{" "}
                                    {securityData.passwordRules.minLength}{" "}
                                    character
                                </span>
                            </li>
                            {securityData.passwordRules
                                .specialCharacterRequired && (
                                <li>
                                    <span className="text-text-light">
                                        At least one special character
                                    </span>
                                </li>
                            )}
                            {securityData.passwordRules.numberRequired && (
                                <li>
                                    <span className="text-text-light">
                                        At least one number
                                    </span>
                                </li>
                            )}
                            {securityData.passwordRules.cannotBePrevious && (
                                <li>
                                    <span className="text-text-light">
                                        Can”t be the same as a previous
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="bg-white p-6 rounded flex flex-col">
                    <div className="border-b border-border pb-6">
                        <Heading
                            heading="Devices"
                            description="The Last Pass password generator creates random 
passwords based on parameters set by you."
                            size={{ head: "large", description: "small" }}
                            margin="4"
                        />
                        <button className="btn text-body-small">
                            Sign out from all devices
                        </button>
                    </div>
                    <div className="h-96 overflow-scroll">
                        <ul className="flex flex-col gap-4 my-4">{devices}</ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
