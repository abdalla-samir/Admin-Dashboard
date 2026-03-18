import Users from "/src/assets/icons/Users.svg?react";
import Clicks from "/src/assets/icons/Clicks.svg?react";
import Sales from "/src/assets/icons/Sales.svg?react";
import Items from "/src/assets/icons/items.svg?react";

export const kpiData = [
    {
        title: "Users",
        value: "35k",
        icon: <Users />,
        bgColor: "#6E39CB",
        opacity: "#6E39CB4D",
    },
    {
        title: "Clicks",
        value: "1m",
        icon: <Clicks />,
        bgColor: "#533FE4",
        opacity: "#533FE44D",
    },
    {
        title: "Sales",
        value: "$345",
        icon: <Sales />,
        bgColor: "#F93131",
        opacity: "#F931314D",
    },
    {
        title: "Items",
        value: "68",
        icon: <Items />,
        bgColor: "#2DCCFF",
        opacity: "#2DCCFF4D",
    },
];
