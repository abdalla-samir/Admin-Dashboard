import { useState } from "react";
import ProductInfo from "./ProductInfo";
import Media from "./Media";
import Social from "../components/Social";
import Pricing from "./Pricing";

export default function NewProduct() {
    const [steps, setSteps] = useState(1);
    const [productInfoInputs, setProductInfoInputs] = useState({
        name: "",
        weight: "",
        sizes: "",
        category: "",
        description: "",
    });
    const [pricingInputs, setPricingInputs] = useState({
        price: "",
        currency: "",
        sku: "",
        tags: "",
    });
    const [socialInputs, setSocialInputs] = useState({
        facebookAccount: "",
        instagramAccount: "",
        linkedinAccount: "",
        dribbleAccount: "",
        behanceAccount: "",
        ui8Account: "",
    });
    const [fileHandler, setFileHandler] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (steps === 1) {
            setSteps((prev) => prev + 1);
        } else if (steps === 2) {
            setSteps((prev) => prev + 1);
        } else if (steps === 3) {
            setSteps((prev) => prev + 1);
        } else {
            console.log({
                productInfoInputs,
                socialInputs,
                pricingInputs,
                fileHandler,
            });
        }
    };
    return (
        <>
            <div className="mt-5">
                <div className="flex items-center gap-4 max-lg:flex-col max-lg:items-start max-lg:gap-1 mx-8">
                    <div
                        className={`${steps === 1 ? "block" : "max-lg:hidden"}`}
                    >
                        <span
                            className={`${steps === 1 ? "bg-primary" : "bg-primary-200"} text-title-medium mr-2 w-8 h-8 inline-flex justify-center items-center text-white rounded-full`}
                        >
                            1
                        </span>
                        <span
                            className={`${steps === 1 ? "text-primary" : "text-primary-200"} text-heading-medium`}
                        >
                            Product Info
                        </span>
                    </div>
                    <div className="line"></div>
                    <div
                        className={`${steps === 2 ? "block" : "max-lg:hidden"}`}
                    >
                        <span
                            className={`${steps === 2 ? "bg-primary" : "bg-primary-200"} text-title-medium mr-2 w-8 h-8 inline-flex justify-center items-center text-white rounded-full`}
                        >
                            2
                        </span>
                        <span
                            className={`${steps === 2 ? "text-primary" : "text-primary-200"} text-heading-medium`}
                        >
                            Media
                        </span>
                    </div>
                    <div className="line"></div>
                    <div
                        className={`${steps === 3 ? "block" : "max-lg:hidden"}`}
                    >
                        <span
                            className={`${steps === 3 ? "bg-primary" : "bg-primary-200"} text-title-medium mr-2 w-8 h-8 inline-flex justify-center items-center text-white rounded-full`}
                        >
                            3
                        </span>
                        <span
                            className={`${steps === 3 ? "text-primary" : "text-primary-200"} text-heading-medium`}
                        >
                            Social
                        </span>
                    </div>
                    <div className="line"></div>
                    <div
                        className={`${steps === 4 ? "block" : "max-lg:hidden"}`}
                    >
                        <span
                            className={`${steps === 4 ? "bg-primary" : "bg-primary-200"} text-title-medium mr-2 w-8 h-8 inline-flex justify-center items-center text-white rounded-full`}
                        >
                            4
                        </span>
                        <span
                            className={`${steps === 4 ? "text-primary" : "text-primary-200"} text-heading-medium`}
                        >
                            Pricing
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center ">
                <div className="bg-neutral w-4/5 p-4 sm:p-8 rounded my-2 shadow">
                    <h1 className="text-title-large text-center">
                        {steps === 1
                            ? "Product Information"
                            : steps === 2
                              ? "Media"
                              : steps === 3
                                ? "Social"
                                : "Pricing"}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`p-4 ${(steps === 1 || steps === 4 || steps === 3) && "flex-1 grid lg:grid-cols-2 md:grid-cols-1 gap-5"}`}
                        >
                            {steps === 1 && (
                                <ProductInfo
                                    productInfoInputs={productInfoInputs}
                                    setProductInfoInputs={setProductInfoInputs}
                                />
                            )}
                            {steps === 2 && (
                                <Media
                                    fileHandler={fileHandler}
                                    setFileHandler={setFileHandler}
                                />
                            )}
                            {steps === 3 && (
                                <Social
                                    socialInputs={socialInputs}
                                    setSocialInputs={setSocialInputs}
                                />
                            )}
                            {steps === 4 && (
                                <Pricing
                                    pricingInputs={pricingInputs}
                                    setPricingInputs={setPricingInputs}
                                />
                            )}
                        </div>
                        <div className="flex justify-between items-center">
                            <button
                                type="button"
                                className="btn block w-fit "
                                onClick={() =>
                                    setSteps((prev) =>
                                        prev > 1 ? prev - 1 : prev,
                                    )
                                }
                            >
                                Back
                            </button>
                            <button className="btn block w-fit">
                                {steps === 4 ? "Create Product" : "Next"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
