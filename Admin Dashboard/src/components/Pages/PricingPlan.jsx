import EmptyCheckbox from "/src/assets/icons/empty_checkbox.svg?react";
import CheckedCheckbox from "/src/assets/icons/checked_checkbox.svg?react";

export default function PricingPlan({
    name,
    description,
    buttonText,
    features,
}) {
    console.log(features);
    console.log(buttonText);
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
            <h1 className="text-heading-large">{name}</h1>
            <p className="text-body-small text-text-light">{description}</p>
            <button
                className={`border  w-full p-2 my-4 rounded ${buttonText === "Current Plan" ? "border-border text-text-light cursor-not-allowed" : "bg-primary hover:bg-primary-hover text-white cursor-pointer"}`}
            >
                {buttonText}
            </button>
            <ul className="flex flex-col gap-4">{featureLists}</ul>
        </div>
    );
}
