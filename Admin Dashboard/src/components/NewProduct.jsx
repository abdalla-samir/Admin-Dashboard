import { useState } from "react";
import ProductInfo from "./ProductInfo";
import Media from "./Media";
import Social from "../components/Social";
import Pricing from "./Pricing";

export default function NewProduct() {
    const [steps, setSteps] = useState(1);
    const [showPopUp, setShowPopUp] = useState(false);
    const initialProductInfo = {
        name: "",
        weight: "",
        sizes: "",
        category: "",
        description: "",
    };
    const initialPricingInputs = {
        price: "",
        currency: "",
        sku: "",
        tags: "",
    };
    const initialSocialInputs = {
        facebookAccount: "",
        instagramAccount: "",
        linkedinAccount: "",
        dribbleAccount: "",
        behanceAccount: "",
        ui8Account: "",
    };
    const [productInfoInputs, setProductInfoInputs] =
        useState(initialProductInfo);
    const [pricingInputs, setPricingInputs] = useState(initialPricingInputs);
    const [socialInputs, setSocialInputs] = useState(initialSocialInputs);
    const [fileHandler, setFileHandler] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (steps < 4) setSteps((prev) => prev + 1);
    };
    const createProduct = (event) => {
        event.preventDefault();
        setShowPopUp(true);
        setTimeout(() => {
            setShowPopUp(false);
        }, 3000);
        setProductInfoInputs(initialProductInfo);
        setPricingInputs(initialPricingInputs);
        setSocialInputs(initialSocialInputs);
        setFileHandler("");
        setSteps(1);
        //logic of backend goes here
    };
    return (
        <>
            <div className="flex items-center gap-4 max-lg:flex-col max-lg:items-center max-lg:gap-1 mx-8">
                <div className={`${steps === 1 ? "block" : "max-lg:hidden"}`}>
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
                <div className={`${steps === 2 ? "block" : "max-lg:hidden"}`}>
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
                <div className={`${steps === 3 ? "block" : "max-lg:hidden"}`}>
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
                <div className={`${steps === 4 ? "block" : "max-lg:hidden"}`}>
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
                            className={`my-4 ${steps !== 2 && "flex-1 grid lg:grid-cols-2 md:grid-cols-1 gap-5"}`}
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
                        <div className="flex justify-between items-center max-sm:flex-col gap-4">
                            <button
                                type="button"
                                className="btn block w-fit "
                                disabled={steps === 1}
                                onClick={() =>
                                    setSteps((prev) =>
                                        prev > 1 ? prev - 1 : prev,
                                    )
                                }
                            >
                                Back
                            </button>
                            {steps === 4 && (
                                <button
                                    type="button"
                                    className="btn block w-fit"
                                    onClick={createProduct}
                                >
                                    Create Product
                                </button>
                            )}
                            {steps < 4 && (
                                <button className="btn block w-fit">
                                    Next
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            {showPopUp && (
                <div className="bg-neutral border w-90 p-5 border-primary fixed right-5 bottom-5">
                    Product Created Successfully
                </div>
            )}
        </>
    );
}
