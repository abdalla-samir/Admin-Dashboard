import PricingPlan from "./PricingPlan";

const pricePlan = [
    {
        id: crypto.randomUUID(),
        head: "Free/Personal",
        description: "For a Lifetime",
        planState: "Current Plan",
        features: [
            {
                id: crypto.randomUUID(),
                state: "not included",
                featureName: "Unlimited Projects",
            },
            {
                id: crypto.randomUUID(),
                state: "included",
                featureName: "Share with 5 team members",
            },
            {
                id: crypto.randomUUID(),
                state: "not included",
                featureName: "Sync across devices",
            },
            {
                id: crypto.randomUUID(),
                state: "included",
                featureName: "API Access",
            },
            {
                id: crypto.randomUUID(),
                state: "not included",
                featureName: "Complete Documentation",
            },
            {
                id: crypto.randomUUID(),
                state: "included",
                featureName: "Integration help",
            },
        ],
    },
    {
        id: crypto.randomUUID(),
        head: "$89/Professional",
        description: "/year",
        planState: "Try for free",
        features: [
            {
                id: crypto.randomUUID(),
                state: "not included",
                featureName: "Everything in free plan",
            },
            {
                id: crypto.randomUUID(),
                state: "included",
                featureName: "Unlimited projects",
            },
            {
                id: crypto.randomUUID(),
                state: "not included",
                featureName: "Share with 5 team members",
            },
            {
                id: crypto.randomUUID(),
                state: "included",
                featureName: "30 day version history",
            },
            {
                id: crypto.randomUUID(),
                state: "not included",
                featureName: "Complete Documentation",
            },
            {
                id: crypto.randomUUID(),
                state: "included",
                featureName: "Integration help",
            },
        ],
    },
    {
        id: crypto.randomUUID(),
        head: "Custom/Enterprise",
        description: "Reach out for a quote",
        planState: "Contact Us",
        features: [
            {
                id: crypto.randomUUID(),
                state: "not included",
                featureName: "Everything in Team plan",
            },
            {
                id: crypto.randomUUID(),
                state: "included",
                featureName: "Advanced security",
            },
            {
                id: crypto.randomUUID(),
                state: "not included",
                featureName: "Custom contract",
            },
            {
                id: crypto.randomUUID(),
                state: "included",
                featureName: "User provisioning (SCIM)",
            },
            {
                id: crypto.randomUUID(),
                state: "not included",
                featureName: "Complete Documentation",
            },
            {
                id: crypto.randomUUID(),
                state: "included",
                featureName: "SAML SSO",
            },
        ],
    },
];

export default function PricingPage() {
    const pricingPlans = pricePlan.map((plan) => {
        return (
            <PricingPlan
                key={plan.id}
                heading={plan.head}
                description={plan.description}
                planState={plan.planState}
                features={plan.features}
            />
        );
    });
    return (
        <div>
            <h1 className="text-heading-large">Pricing</h1>
            <p className="text-body-small text-text-light">
                Simple Pricing. No Hidden Fees. Advance Features for your
                business.
            </p>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                {pricingPlans}
            </div>
        </div>
    );
}
