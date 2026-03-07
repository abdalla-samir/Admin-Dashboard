import { useState } from "react";
import ProductInfo from "./ProductInfo";
import Media from "./Media";

export default function NewProduct() {
    const [progress, setProgress] = useState({
        productInfo: true,
        media: false,
        social: false,
        pricing: false,
    });
    console.log(progress);
    return (
        <>
            <div className="mt-5">
                <div className="flex items-center gap-4 max-lg:flex-col max-lg:items-start max-lg:gap-1 mx-8">
                    <div
                        className={`${progress.productInfo ? "block" : "max-lg:hidden"}`}
                    >
                        <span
                            className={`${progress.productInfo ? "bg-primary" : "bg-primary-200"} text-title-medium mr-2 w-8 h-8 inline-flex justify-center items-center text-white rounded-full`}
                        >
                            1
                        </span>
                        <span
                            className={`${progress.productInfo ? "text-primary" : "text-primary-200"} text-heading-medium`}
                        >
                            Product Info
                        </span>
                    </div>
                    <div className="line"></div>
                    <div
                        className={`${progress.media ? "block" : "max-lg:hidden"}`}
                    >
                        <span
                            className={`${progress.media ? "bg-primary" : "bg-primary-200"} text-title-medium mr-2 w-8 h-8 inline-flex justify-center items-center text-white rounded-full`}
                        >
                            2
                        </span>
                        <span
                            className={`${progress.media ? "text-primary" : "text-primary-200"} text-heading-medium`}
                        >
                            Media
                        </span>
                    </div>
                    <div className="line"></div>
                    <div
                        className={`${progress.social ? "block" : "max-lg:hidden"}`}
                    >
                        <span
                            className={`${progress.social ? "bg-primary" : "bg-primary-200"} text-title-medium mr-2 w-8 h-8 inline-flex justify-center items-center text-white rounded-full`}
                        >
                            3
                        </span>
                        <span
                            className={`${progress.social ? "text-primary" : "text-primary-200"} text-heading-medium`}
                        >
                            Social
                        </span>
                    </div>
                    <div className="line"></div>
                    <div
                        className={`${progress.pricing ? "block" : "max-lg:hidden"}`}
                    >
                        <span
                            className={`${progress.pricing ? "bg-primary" : "bg-primary-200"} text-title-medium mr-2 w-8 h-8 inline-flex justify-center items-center text-white rounded-full`}
                        >
                            4
                        </span>
                        <span
                            className={`${progress.pricing ? "text-primary" : "text-primary-200"} text-heading-medium`}
                        >
                            Pricing
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center ">
                {progress.productInfo && (
                    <ProductInfo setProgress={setProgress} />
                )}
                {progress.media && <Media setProgress={setProgress} />}
            </div>
        </>
    );
}
