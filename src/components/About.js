"use client";

import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";

export default function About() {
    const t = useTranslations("about");
    useEffect(() => {
        if (window.location.hash) {
            const element = document.getElementById(
                window.location.hash.slice(1)
            );
            if (element) element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <section className="py-24 bg-white" id="about">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px]">
                        <img
                            src="about.jpg"
                            className="w-full h-full object-cover rounded-lg"
                            alt="Coffee Preparation"
                        />
                    </div>
                    <div>
                        <h2 className="font-['Poppins'] text-4xl font-bold mb-6 text-gray-900">
                            {t("title")}
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {t("description")}
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {t("craftsmanship")}
                        </p>
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <p className="text-3xl font-bold text-black mb-2">
                                    {new Date().getFullYear() -
                                        new Date("1-1-2019").getFullYear()}
                                    +
                                </p>
                                <p className="text-gray-600">
                                    {t("stats.yearsOfExcellence")}
                                </p>
                            </div>

                            {/* <div>
                                <p className="text-3xl font-bold text-black mb-2">
                                    50k+
                                </p>
                                <p className="text-gray-600">
                                    {t("stats.happyCustomers")}
                                </p>
                            </div> */}
                            
                            <div>
                                <p className="text-3xl font-bold text-black mb-2">
                                    15+
                                </p>
                                <p className="text-gray-600">
                                    {t("stats.coffeeOrigins")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
