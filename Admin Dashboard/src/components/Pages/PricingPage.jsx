import PricingPlan from "./PricingPlan";
import { plans } from "../../data/plans";
import Heading from "../Heading";

export default function PricingPage() {
    const pricingPlans = plans.map((plan) => {
        return (
            <PricingPlan
                key={plan.id}
                name={plan.name}
                description={plan.description}
                buttonText={plan.buttonText}
                features={plan.features}
            />
        );
    });
    return (
        <div className="h-full flex-1 flex flex-col">
            <Heading
                heading="Pricing"
                description="Simple Pricing. No Hidden Fees. Advance Features for your
                business."
                size={{ head: "large", description: "small" }}
                margin="4"
            />

            <div className="overflow grid md:grid-cols-2 xl:grid-cols-3 items-start gap-4">
                {pricingPlans}
            </div>
        </div>
    );
}
