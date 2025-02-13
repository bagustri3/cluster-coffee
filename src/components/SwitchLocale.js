"use client";

import clsx from "clsx";
import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
    label,
}) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(event) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace({ pathname, params }, { locale: nextLocale });
        });
    }

    const getUserIpv4 = () => {
        fetch("https://ipv4.iplocation.net")
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("userIp", data.ip);
                getLocale(data.ip);
            });
    };

    const getLocale = (ipv4) => {
        const ip = localStorage.getItem("userIp");
        if (ip) {
            return;
        }
        fetch(`http://ip-api.com/json/${ipv4}`)
            .then((res) => res.json())
            .then((data) => {
                startTransition(() => {
                    router.replace(
                        { pathname, params },
                        { locale: data.countryCode.toLowerCase() }
                    );
                });
            });
    };

    useEffect(() => {
        getUserIpv4();
    }, []);

    return (
        <label
            className={clsx(
                "relative text-black",
                isPending && "transition-opacity [&:disabled]:opacity-30"
            )}
        >
            <p className="sr-only">{label}</p>
            <select
                className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </select>
            <span className="pointer-events-none absolute right-2 top-[8px]">
                ⌄
            </span>
        </label>
    );
}
