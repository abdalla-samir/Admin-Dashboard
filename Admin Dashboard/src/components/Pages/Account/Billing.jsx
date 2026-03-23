import Heading from "../../Heading";
import Profile_One from "/src/assets/icons/Profile_One.svg?react";
import Profile_Two from "/src/assets/icons/Profile_Two.svg?react";
import Profile_Three from "/src/assets/icons/Profile_Three.svg?react";
import Profile_Four from "/src/assets/icons/Profile_Four.svg?react";
import Profile_Five from "/src/assets/icons/Profile_Five.svg?react";
import Profile_Six from "/src/assets/icons/Profile_Six.svg?react";
import Arrow from "/src/assets/icons/arrow.svg?react";
import Visa from "/src/assets/icons/Visa.svg?react";
import { Link } from "react-router-dom";
import { plans } from "../../../data/plans";
import { paymentMethods } from "../../../data/paymentMehods";
export default function Billing() {
    const handlePayment = () => {
        console.log("Handing the payment");
    };
    return (
        <div className="flex-1 flex flex-col text-text">
            <Heading
                heading="Plans and billing"
                description="Manage your plan and billing details"
            />
            <div className="flex-1 flex flex-col gap-6">
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className=" bg-white p-4 rounded relative flex flex-col">
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <div>
                                    <Heading
                                        heading={`${plans[0].name} plan`}
                                        description="Our most popular plan for small teams."
                                    />
                                </div>
                                <div>
                                    <span className="text-2xl ">
                                        ${plans[0].price}
                                    </span>
                                    <span className="text-text-light ml-1">
                                        per month
                                    </span>
                                </div>
                            </div>
                            <div className="flex my-2">
                                <Profile_One className="not-first:-ml-2" />
                                <Profile_Two className="not-first:-ml-2" />
                                <Profile_Three className="not-first:-ml-2" />
                                <Profile_Four className="not-first:-ml-2" />
                                <Profile_Five className="not-first:-ml-2" />
                                <Profile_Six className="not-first:-ml-2" />
                            </div>
                        </div>
                        <Link
                            to="/pricing-page"
                            className="flex items-center gap-2 ml-auto w-fit cursor-pointer text-body-medium text-primary"
                        >
                            Upgrade Now
                            <Arrow width={12} />
                        </Link>
                    </div>
                    <div className=" bg-white flex-1 p-4 rounded">
                        <Heading
                            heading="Payment method"
                            description="Change how you pay for your plan."
                        />
                        <div className="shadow p-4 flex items-center gap-4">
                            <Visa />
                            <div className="flex-1">
                                <p className="text-title-small text-text">
                                    Visa ending in {paymentMethods[0].last4}
                                </p>
                                <p className="text-text-light text-body-small">
                                    Expiry {paymentMethods[0].expiryMonth}/
                                    {paymentMethods[0].expiryYear}
                                </p>
                            </div>
                            <button
                                className="btn text-body-small"
                                onClick={handlePayment}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-white">aspdom</div>
            </div>
        </div>
    );
}
