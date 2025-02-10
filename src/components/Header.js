"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

export default function Header() {
    const t = useTranslations("headers");
    return (
        <header className="relative h-[90vh] overflow-hidden">
            <img
                src="header.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Coffee Shop Interior"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="text-white max-w-2xl">
                    <div className="flex items-center mb-2">
                        {" "}
                        <div className="flex flex-col text-right">
                            <h1 className="text-white text-6xl">CLUSTER</h1>
                            <h1 className="text-white text-6xl">COFFEE</h1>
                        </div>
                        <img
                            src="/logo-big-white.png"
                            alt="Logo"
                            className="h-[8rem] flex items-center"
                        />
                    </div>
                    <p className="text-xl mb-8 font-normal font-['Poppins']">
                        {t("description")}
                    </p>
                    <Link
                        href={"/menu"}
                        className="rounded-2xl bg-black text-white px-8 py-3 text-lg font-medium hover:bg-custom/90"
                    >
                        {t("button")}
                    </Link>
                </div>
            </div>
        </header>
    );
}
