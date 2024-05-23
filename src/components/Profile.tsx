"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import useUser from "@/hook/useUser";
import { createClient } from "@/lib/supabase/browser";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { protectedRoutes } from "@/lib/constant";

function Profile() {
    const router = useRouter()
    const pathname = usePathname()


    const { isFetching, data } = useUser();

    const queryClient = useQueryClient()

    const handleLogout = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        queryClient.clear();
        router.refresh()

        if (protectedRoutes.includes(pathname)) {










































            
            router.replace("/auth?next=" + pathname)
        }
    }

    if (isFetching) {
        return <></>;
    }

    return (
        <div>
            {!data?.id ? (
                <Link href={"/auth"}>
                    <Button variant={"outline"}>Sign In</Button>
                </Link>
            ) : (
                <div className="flex items-center flex-row gap-4">
                    <img
                        className="rounded-full w-8 h-8"
                        alt={`profile-img-${data.display_name}`}
                        src={data?.image_url || ""}
                    />
                    <h1>{data.display_name}</h1>
                    <LogOut onClick={handleLogout}/>
                </div>
            )}
        </div>
    );
}

export default Profile;
