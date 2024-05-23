/**
 * Represents a membership card component.
 *
 * @component
 * @param {string} className - The class name for the component.
 * @param {string} title - The type of membership.
 * @param {string[]} benefits - The list of benefits included in the membership.
 * @param {string} price - The price of the membership.
 * @param {string} priceDescription - The description of the price.
 * @param {str${backgroundColor} - The optional custom background color needs to be a hex.
 * @param {s${textColor}- The optional custom text color needs to be a hex
 * @param {string} [headerTextColor] - The optional custom header color needs to be a hex.
 * @returns {JSX.Element} The rendered membership card component.
 */
"use client";

import { CheckCircle } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

interface MembershipCardProps {
    className?: string;
    title: string;
    backgroundColor?: string; // Optional prop for custom background${textColor} string; // Optional prop for custom text color
    textColor?: string; // Optional prop for custom text color
    headerTextColor?: string; // Optional prop for custom text color
    headerBackgroundColor?: string; // Optional prop for custom text color
    benefits: string[];
    price: string;
    priceDescription?: string;
}

const MembershipCard = ({
    className,
    title,
    price,
    priceDescription,
    benefits = [""],
    backgroundColor = "bg-white", // Optional prop for custom background${textColor} "black", // Optional prop for custom text color
    textColor = "text-black", // Optional prop for custom text color
    headerTextColor = "text-black",
    headerBackgroundColor = "bg-orange-500", // Optional prop for custom text color
}: MembershipCardProps) => {
    return (
        <Card
            className={`${className} ${backgroundColor} ${textColor} shadow-lg rounded-lg overflow-hidden flex flex-col justify-between flex-shrink-0 [&>*]:m-0 [&>*]:p-0 p-7`}
        >
            <CardContent className={`${backgroundColor} ${textColor} [&>*]:m-0 [&>*]:p-0`}>
                <CardHeader className={`${backgroundColor} `}>
                    <CardTitle
                        className={`${textColor} ${headerTextColor} text-xl font-bold mb-4`}
                    >
                        {title}
                    </CardTitle>
                </CardHeader>

                <CardDescription
                    className={`flex flex-col ${backgroundColor} ${textColor}`}
                >
                    <div className={`flex flex-row gap-2  mb-4`}>
                        <p className={`font-bold text-4xl ${textColor}`}>
                            {price}
                        </p>
                        <div className="flex items-center flex-col">
                            <p>per month</p>
                            <p>{priceDescription}</p>
                        </div>
                    </div>

                    <div className="flex !flex-col gap-2 mb-4">
                        <Button
                            className={`${headerTextColor} ${headerBackgroundColor} hover:${headerBackgroundColor} hover:${headerTextColor} ${textColor}`}
                        >
                            Join Now
                        </Button>
                        <Button
                            className={`${headerTextColor} ${headerBackgroundColor} hover:${headerBackgroundColor}-darker hover:${headerTextColor} ${textColor}`}
                        >
                            Chat representative
                        </Button>
                    </div>
                </CardDescription>

                <div className="w-full h-0.5 bg-gray-500 px-0 my-4" />

                <CardFooter
                    className={`flex flex-col items-start ${backgroundColor} `}
                >
                    <div className="flex flex-row gap-2 my-4">
                        <div>
                            <h2 className={`text-md  ${textColor} font-bold `}>
                                Perks
                            </h2>
                            <ul className="list-none mb-4">
                                {benefits.map((perk, index) => (
                                    <li
                                        key={index}
                                        className={`text-sm flex flex-row gap-2 my-2 items-center ${textColor}`}
                                    >
                                        <CheckCircle size={16} />
                                        {perk}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardFooter>
            </CardContent>
        </Card>
    );
};

// <div className="flex justify-center w-full">
//     <div className="w-80 flex-shrink-0">
//     </div>
// </div>
export default MembershipCard;
