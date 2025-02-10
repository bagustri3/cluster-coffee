"use client";

import { Link, useRouter, routing } from "@/i18n/routing";
import React, { useEffect } from "react";
import LocaleSwitcherSelect from "./SwitchLocale";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
    const locale = useLocale();
    const t = useTranslations("");
    const router = useRouter();
    useEffect(() => {
        console.log(routing);
    });
    return (
        <div>
            <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between content-end h-16">
                        <Link href="/" className="flex items-center">
                            {" "}
                            <div className="flex flex-col text-right">
                                <h1 className="text-black">CLUSTER</h1>
                                <h1 className="text-black">COFFEE</h1>
                            </div>
                            <img
                                src="/logo-big.png"
                                alt="Logo"
                                className="h-11"
                            />
                        </Link>
                        <div className="justify-center flex md:flex items-center md:space-x-8 space-x-2">
                            <Link
                                href="/#about"
                                className="text-gray-600 hover:text-custom/80 font-medium"
                            >
                                About
                            </Link>
                            <Link
                                href="/menu"
                                className="text-gray-600 hover:text-custom/80 font-medium"
                            >
                                Menu
                            </Link>
                            <LocaleSwitcherSelect
                                defaultValue={locale}
                                label={"Language"}
                            >
                                <option value={"id"} key={"id"}>
                                    ID
                                </option>
                                <option value={"en"} key={"en"}>
                                    EN
                                </option>
                            </LocaleSwitcherSelect>
                            <Link
                                href={"/reservation"}
                                className="hidden md:flex rounded-xl bg-black text-white px-2 md:px-6 py-2 font-medium hover:bg-black/80"
                            >
                                Reserve a Table
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
