import { useState } from "react";
import Google from "/src/assets/icons/google_label.svg?react";
import DownloadIcon from "/src/assets/icons/download.svg?react";
import Heading from "../../Heading";

export default function Setting() {
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        phoneNumber: "",
        city: "",
        countryName: "",
        zipCode: "",
        bio: "",
        timeZone: "",
    });
    const [fileHandler, setFileHandler] = useState("");
    const handleCancelForm = () => {
        setInputs({
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            phoneNumber: "",
            city: "",
            countryName: "",
            zipCode: "",
            bio: "",
            timeZone: "",
        });
    };
    const handleSaveForm = (event) => {
        event.preventDefault();
        console.log(inputs);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        if (!["image/png", "image/jpeg", "image/svg+xml"].includes(file.type)) {
            alert("Only PNG, JPG, or SVG allowed");
            return;
        }
        setFileHandler(URL.createObjectURL(file));
    };
    const handleFileDelete = () => {
        if (fileHandler) {
            URL.revokeObjectURL(fileHandler);
            setFileHandler("");
        }
    };
    return (
        <div className="flex-1 flex flex-col">
            <Heading
                heading="Setting Details"
                description="Update your photo and personal details here."
            />
            <div className="flex-1 grid lg:grid-cols-[2fr_1fr] md:grid-cols-1 gap-5">
                <div className="bg-white shadow rounded flex flex-col ">
                    <h1 className="border-b border-border p-4 text-body-large">
                        Personal information
                    </h1>
                    <form onSubmit={handleSaveForm}>
                        <div className="p-4 flex-1 grid lg:grid-cols-2 md:grid-cols-1 gap-5">
                            <label className="input-label text-body-medium">
                                Full Name
                                <input
                                    name="firstName"
                                    value={inputs.firstName}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder="Enter first name"
                                    className="input"
                                />
                            </label>
                            <label className="input-label text-body-medium">
                                Last Name
                                <input
                                    name="lastName"
                                    value={inputs.lastName}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder="Enter last name"
                                    className="input"
                                />
                            </label>
                            <label className="input-label text-body-medium">
                                Email Address
                                <input
                                    name="email"
                                    value={inputs.email}
                                    onChange={handleChange}
                                    type="email"
                                    required
                                    placeholder="Enter email address"
                                    className="input"
                                />
                            </label>
                            <label className="input-label text-body-medium">
                                Username
                                <input
                                    name="userName"
                                    value={inputs.userName}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder="Enter user name"
                                    className="input "
                                />
                            </label>
                            <label className="input-label text-body-medium">
                                Phone No
                                <input
                                    name="phoneNumber"
                                    value={inputs.phoneNumber}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder="Enter Phone no"
                                    className="input "
                                />
                            </label>
                            <label className="input-label text-body-medium">
                                City
                                <input
                                    name="city"
                                    value={inputs.city}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder="Enter your city"
                                    className="input "
                                />
                            </label>
                            <label className="input-label text-body-medium">
                                Country Name
                                <input
                                    name="countryName"
                                    value={inputs.countryName}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder="Enter country name"
                                    className="input "
                                />
                            </label>
                            <label className="input-label text-body-medium">
                                Zip code
                                <input
                                    name="zipCode"
                                    value={inputs.zipCode}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder="Enter zip code"
                                    className="input "
                                />
                            </label>
                            <label className="input-label text-body-medium lg:col-span-2">
                                Bio{" "}
                                <span className="text-text-light text-body-small">
                                    (Write a short introduction)
                                </span>
                                <textarea
                                    name="bio"
                                    value={inputs.bio}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your bio"
                                    className="input  resize-none h-20"
                                />
                            </label>
                            <label className="input-label text-body-medium ">
                                Timezone
                                <select
                                    name="timeZone"
                                    className="input"
                                    value={inputs.timeZone}
                                    onChange={handleChange}
                                >
                                    <option value="">Time Zone</option>
                                    <option value="UTC-05:00">
                                        (UTC -05:00) Eastern Time (US & Canada)
                                    </option>
                                    <option value="UTC+00:00">
                                        (UTC +00:00) London
                                    </option>
                                    <option value="UTC+01:00">
                                        (UTC +01:00) Berlin
                                    </option>
                                    <option value="UTC+02:00">
                                        (UTC +02:00) Cairo
                                    </option>
                                    <option value="UTC+03:00">
                                        (UTC +03:00) Riyadh
                                    </option>
                                    <option value="UTC+05:30">
                                        (UTC +05:30) India Standard Time
                                    </option>
                                    <option value="UTC+08:00">
                                        (UTC +08:00) Beijing
                                    </option>
                                    <option value="UTC+09:00">
                                        (UTC +09:00) Tokyo
                                    </option>
                                </select>
                            </label>
                        </div>
                        <div className="w-fit ml-auto  px-4 pb-4">
                            <button
                                className="px-6 py-1 bg-white border border-border text-black rounded cursor-pointer"
                                onClick={handleCancelForm}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn ml-4">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
                <div>
                    <div className="bg-white rounded shadow mb-5">
                        <h1 className="border-b border-border p-4 text-body-large">
                            Your Photo
                        </h1>
                        <div className="p-4">
                            <div className="flex items-center gap-2">
                                {fileHandler && (
                                    <img
                                        src={fileHandler}
                                        className="w-15 h-15 "
                                    />
                                )}

                                <div className="flex flex-col text-body-small">
                                    <span className="text-body-medium">
                                        Edit your photo
                                    </span>
                                    <span>
                                        <button
                                            className="text-text-light cursor-pointer"
                                            onClick={handleFileDelete}
                                        >
                                            Delete
                                        </button>{" "}
                                        <button className="text-primary cursor-pointer">
                                            Update
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <label className="border-2 border-dashed border-primary  w-full h-50 mt-4 flex justify-center items-center">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <DownloadIcon width={50} />
                                    <p className="text-center text-body-medium">
                                        <span className="text-primary">
                                            Click to upload
                                        </span>{" "}
                                        or drag and drop <br /> SVG, PNG, JPG or
                                        GIF <br />{" "}
                                        <span className="text-text-light">
                                            (max, 800x400px)
                                        </span>
                                    </p>
                                </div>
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="bg-white rounded shadow p-4">
                        <div className="flex justify-between items-center mb-2">
                            <Google />
                            <span className="py-1 px-2 rounded bg-primary-200 text-primary text-body-medium">
                                Connected
                            </span>
                        </div>
                        <p className="text-text-light text-body-small w-50">
                            Use Google to sign in to your account.{" "}
                            <a href="#" className="text-primary">
                                Click here to learn more.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
