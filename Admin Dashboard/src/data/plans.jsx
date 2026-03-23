export const plans = [
    {
        id: crypto.randomUUID(),
        name: "Free / Personal",
        description: "For personal use",
        price: 0,
        billing: "lifetime",
        buttonText: "Current Plan",
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
        name: "Professional",
        description: "For growing teams",
        price: 89,
        billing: "yearly",
        buttonText: "Try for free",
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
        name: "Custom / Enterprise",
        description: "For large organizations",
        price: null,
        billing: "custom",
        buttonText: "Contact Us",
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
