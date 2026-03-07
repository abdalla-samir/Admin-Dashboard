import EmptyCheckbox from "../assets/icons/empty_checkbox.svg?react";
import CheckedCheckbox from "../assets/icons/checked_checkbox.svg?react";

export default function PricingPlan({
    heading,
    description,
    planState,
    features,
}) {
    const featureLists = features.map((feature) => {
        return (
            <li className="flex items-center gap-5" key={feature.id}>
                {feature.state === "not included" ? (
                    <EmptyCheckbox className="text-success" />
                ) : (
                    <CheckedCheckbox className="text-success" />
                )}
                <span>{feature.featureName}</span>
            </li>
        );
    });
    return (
        <div className="bg-neutral p-6">
            <h1 className="text-heading-large">{heading}</h1>
            <p className="text-body-small text-text-light">{description}</p>
            <button
                className={`border  w-full p-2 my-4 rounded ${planState === "Current Plan" ? "border-border text-text-light cursor-not-allowed" : "bg-primary hover:bg-primary-hover text-white cursor-pointer"}`}
            >
                {planState}
            </button>
            <ul className="flex flex-col gap-4">{featureLists}</ul>
        </div>
    );
}
