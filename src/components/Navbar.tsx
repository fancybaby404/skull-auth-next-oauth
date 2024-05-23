import React from "react";
import Profile from "./Profile";
import Link from "next/link";
import { Skull } from "lucide-react";

function Navbar() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-row gap-4">
                <Link href={"/"}>
                    <Skull />
                </Link>

                <div className="flex flex-row gap-2">
                    <Link href={"/dashboard"}>dashboard</Link>
                    <Link href={"/profile"}>profile</Link>
                </div>
            </div>

            <Profile />
        </div>
    );
}

export default Navbar;
