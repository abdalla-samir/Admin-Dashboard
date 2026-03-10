import { useState } from "react";
import ProductInfo from "./ProductInfo";
import Social from "./Social";
import Pricing from "./Pricing";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

export default function ManageProduct() {
    const [products, setProducts] = useProduct();
    const { id } = useParams();
    const isEdit = !!id;
    const productObject = isEdit
        ? products.find((p) => p.id === parseInt(id)) || {}
        : {};

    const [steps, setSteps] = useState(1);
    const [showMessage, setShowMessage] = useState(false);
    const [showAlert, setShowAlert] = useState({ alert: false, message: "" });
    const initialProductInfo = {
        name: "",
        weight: "",
        sizes: "",
        category: "",
        quantity: "",
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
    const [productInfoInputs, setProductInfoInputs] = useState(
        isEdit
            ? {
                  name: productObject.name,
                  weight: productObject.weight,
                  sizes: productObject.sizes,
                  category: productObject.category,
                  quantity: productObject.quantity,
                  description: productObject.description,
              }
            : initialProductInfo,
    );
    const [pricingInputs, setPricingInputs] = useState(
        isEdit
            ? {
                  price: productObject.price,
                  currency: productObject.currency,
                  sku: productObject.sku,
                  tags: productObject.tags,
              }
            : initialPricingInputs,
    );
    const [socialInputs, setSocialInputs] = useState(
        isEdit
            ? {
                  facebookAccount: productObject.facebookAccount,
                  instagramAccount: productObject.instagramAccount,
                  linkedinAccount: productObject.linkedinAccount,
                  dribbleAccount: productObject.dribbleAccount,
                  behanceAccount: productObject.behanceAccount,
                  ui8Account: productObject.ui8Account,
              }
            : initialSocialInputs,
    );
    const handleSubmit = (event) => {
        event.preventDefault();
        if (steps === 1) {
            if (!productInfoInputs.sizes) {
                setShowAlert({ alert: true, message: "Please Enter The Size" });
                setTimeout(() => {
                    setShowAlert({ alert: false, message: "" });
                }, 1500);
                return;
            } else if (!productInfoInputs.category) {
                setShowAlert({
                    alert: true,
                    message: "Please Enter The Category",
                });
                setTimeout(() => {
                    setShowAlert({ alert: false, message: "" });
                }, 1500);
                return;
            }
        }
        if (steps < 3) setSteps((prev) => prev + 1);
    };
    const handleProduct = (event) => {
        event.preventDefault();
        if (isEdit) {
            const index = products.findIndex((element) => {
                return element.id === parseInt(id);
            });
            if (index !== -1) {
                setProducts(
                    products.map((p) =>
                        p.id === parseInt(id)
                            ? {
                                  ...p,
                                  ...productInfoInputs,
                                  ...pricingInputs,
                                  ...socialInputs,
                              }
                            : p,
                    ),
                );
            }
        } else {
            const newProduct = {
                id: products.length + 1,
                ...productInfoInputs,
                ...pricingInputs,
                ...socialInputs,
            };
            setProducts([...products, newProduct]);
            setProductInfoInputs(initialProductInfo);
            setPricingInputs(initialPricingInputs);
            setSocialInputs(initialSocialInputs);
        }
        setSteps(1);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
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
                        Social
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
                        Pricing
                    </span>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center ">
                <div className="bg-neutral md:w-4/5 w-11/12 p-4 sm:p-8 rounded my-2 shadow">
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
                                <Social
                                    socialInputs={socialInputs}
                                    setSocialInputs={setSocialInputs}
                                />
                            )}
                            {steps === 3 && (
                                <Pricing
                                    pricingInputs={pricingInputs}
                                    setPricingInputs={setPricingInputs}
                                />
                            )}
                        </div>
                        <div className="flex justify-between items-center max-sm:flex-col gap-4">
                            <button
                                type="button"
                                className={`btn block w-fit `}
                                disabled={steps === 1}
                                onClick={() => {
                                    console.log("Clicked");
                                    setSteps((prev) =>
                                        prev > 1 ? prev - 1 : prev,
                                    );
                                }}
                            >
                                Back
                            </button>
                            {steps === 3 && (
                                <button
                                    type="button"
                                    className="btn block w-fit"
                                    onClick={handleProduct}
                                >
                                    {isEdit ? "Edit" : "Create Product"}
                                </button>
                            )}
                            {steps < 3 && (
                                <button className="btn block w-fit">
                                    Next
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            {showMessage && (
                <div className="bg-neutral border w-90 p-5 border-primary fixed right-5 bottom-5 rounded">
                    {isEdit
                        ? "Product Edited Successfully"
                        : "Product Created Successfully"}
                </div>
            )}
            {showAlert.alert && (
                <div className="bg-neutral border w-90 p-5 border-primary fixed right-5 bottom-5 rounded">
                    {showAlert.message}
                </div>
            )}
        </>
    );
}
