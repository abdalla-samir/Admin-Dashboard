import Heading from "../../Heading";
import Profile_One from "/src/assets/icons/Profile_One.svg?react";
import Profile_Two from "/src/assets/icons/Profile_Two.svg?react";
import Profile_Three from "/src/assets/icons/Profile_Three.svg?react";
import Profile_Four from "/src/assets/icons/Profile_Four.svg?react";
import Profile_Five from "/src/assets/icons/Profile_Five.svg?react";
import Profile_Six from "/src/assets/icons/Profile_Six.svg?react";
import Arrow from "/src/assets/icons/arrow.svg?react";
import Visa from "/src/assets/icons/Visa.svg?react";
import PDF from "/src/assets/icons/pdf.svg?react";
import { Link } from "react-router-dom";
import { plans } from "../../../data/plans";
import { paymentMethods } from "../../../data/paymentMehods";
import { billingData } from "../../../data/billingData";

export default function Billing() {
    const handlePayment = () => {
        console.log("Handing the payment");
    };
    const billing = billingData.map((data) => {
        return (
            <tr className="text-body-medium">
                <td className="table-data-cell text-text flex items-center gap-3">
                    <PDF />
                    <span>{data.invoice}</span>
                    <span className="">{data.status}</span>
                </td>
                <td className="table-data-cell">{data.date}</td>
                <td className="table-data-cell">$ {data.amount.toFixed(2)}</td>
                <td className="table-data-cell">{data.plan} Plan</td>
                <td className="table-data-cell">{data.users}</td>
                <td className="flex justify-end mr-4">
                    <button className="btn bg-text text-body-small">
                        Download all
                    </button>
                </td>
            </tr>
        );
    });
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
                            <div className="flex max-md:flex-col justify-between items-center">
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
                            <div className="flex justify-center my-2">
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
                        <div className="shadow p-4 flex max-md:flex-col max-md:text-center items-center gap-4">
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
                <div className="flex-1 bg-white">
                    <div className="">
                        <div className="flex max-md:flex-col max-md:text-center justify-between items-center p-4">
                            <Heading
                                heading="Billing history"
                                description="Download your previous plan receipts and usage details."
                            />
                            <button className="btn text-body-small">
                                Download all
                            </button>
                        </div>
                        <div className="overflow-scroll h-96 ">
                            <table className="w-full rounded min-w-4xl">
                                <thead className="border-y border-border">
                                    <th className="table-head-cell">Billing</th>
                                    <th className="table-head-cell">
                                        Billing Date
                                    </th>
                                    <th className="table-head-cell">Amount</th>
                                    <th className="table-head-cell">Plan</th>
                                    <th className="table-head-cell">Users</th>
                                </thead>
                                <tbody className="">{billing}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
