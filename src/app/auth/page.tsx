"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/browser";
import { KeyRound, Skull } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

function Auth() {
    const params = useSearchParams();
    const next = params.get("next") || "";

    const handleLoginWithOAuth = (provider: "github" | "google") => {
        const supabase = createClient();
        supabase.auth.signInWithOAuth({
            provider,
            options: {
                // this just redirects you to the page u were on when u tried to access a page but not logged in
                redirectTo: location.origin + "/auth/callback?next=" + next,
            },
        });
    };
    return (
        <div className="flex flex-row gap-8 items-center justify-between w-full h-[80vh]">
            <div className="flex justify-center items-center">
                <Skull size={420} />
            </div>
            <div className="w-96 h-96 rounded-md border p-5 space-y-8 shadow-2xl">
                <p className="text-sm text-gray-300">Register</p>

                <Button
                    className="w-full items-center flex flex-row gap-4"
                    variant={"outline"}
                    onClick={() => handleLoginWithOAuth("github")}
                >
                    <FaGithub />
                    <p>Github</p>
                </Button>
                <Button
                    className="w-full items-center flex flex-row gap-4"
                    variant={"outline"}
                    onClick={() => handleLoginWithOAuth("google")}
                >
                    <FaGoogle />
                    <p>Google</p>
                </Button>
            </div>
        </div>
    );
}

export default Auth;
