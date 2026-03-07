import { useState } from "react";
import DownloadIcon from "../assets/icons/download.svg?react";

export default function Media({ setProgress }) {
    const [fileHandler, setFileHandler] = useState("");
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        if (!["image/png", "image/jpeg", "image/svg+xml"].includes(file.type)) {
            alert("Only PNG, JPG, or SVG allowed");
            return;
        }
        setFileHandler(URL.createObjectURL(file));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleProgress = () => {
        setProgress((prev) => ({ ...prev, media: false, social: true }));
    };
    return (
        <>
            <div className="bg-neutral w-4/5 p-4 sm:p-8 rounded my-2 shadow">
                <h1 className="text-title-large text-center">Media</h1>
                <form onSubmit={handleSubmit}>
                    <div className="p-4">
                        <label className="border-2 border-dashed border-primary  w-full h-50 mt-4 flex justify-center items-center">
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <DownloadIcon width={50} />
                                <p className="text-center text-title-small">
                                    Drop your image here or
                                    <span className="text-primary">
                                        {" "}
                                        Browse{" "}
                                    </span>{" "}
                                    <br />
                                    <span className="text-text-light text-body-medium">
                                        Support: JPG, JPEG, PNG
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
                    <button
                        className="btn block w-fit ml-auto"
                        onClick={handleProgress}
                    >
                        Next
                    </button>
                </form>
            </div>
        </>
    );
}
