type SubscriptionData = {
    title: string;
    description: string;
    benefits: string[];
    price: string | number;
}

export const subcriptionData: SubscriptionData[] = [
    {
        title: "Personal",
        description: "For personal projects and small teams",
        benefits: [
            "14-day free trial, cancel anytime",
            "Instant online store",
            "Robust customization of store",
            "Message your customers with facebook messenger",
        ],
        price: 499,
    },
    {
        title: "Growth",
        description: "For growing businesses, with more features",
        benefits: [
            "14-day free trial, cancel anytime",
            "Instant online store",
            "Robust customization of store",
            "Message your customers with facebook messenger",
        ],
        price: 999,
        
    },
];
