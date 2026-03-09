import DownloadIcon from "../assets/icons/download.svg?react";

export default function Media({ fileHandler, setFileHandler }) {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        if (!["image/png", "image/jpeg", "image/svg+xml"].includes(file.type)) {
            alert("Only PNG, JPG, or SVG allowed");
            return;
        }
        setFileHandler(URL.createObjectURL(file));
    };

    return (
        <>
            {!fileHandler && (
                <label
                    className={`border-2 border-dashed border-primary  w-full h-50 my-4 flex justify-center items-center cursor-pointer ${fileHandler ? "hidden" : ""}`}
                >
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <DownloadIcon width={50} />
                        <p className="text-center text-title-small">
                            Drop your image here or
                            <span className="text-primary"> Browse </span>{" "}
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
            )}
            {fileHandler && (
                <div className="flex flex-col items-center">
                    <img
                        src={fileHandler}
                        alt="preview"
                        className="w-46 h-46 shadow rounded"
                    />
                    <button
                        className="btn mt-5"
                        onClick={() => setFileHandler("")}
                    >
                        Remove Image
                    </button>
                </div>
            )}
        </>
    );
}
