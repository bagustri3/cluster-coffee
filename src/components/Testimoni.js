"use client";

import { Link } from "@/i18n/routing";
import { StarIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function Testimoni({ testimoni = [] }) {
    const t = useTranslations("testimoni");
    return (
        <section className="py-24 bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-['Poppins'] text-4xl font-bold mb-4 text-gray-900">
                        {t("title")}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimoni.length &&
                        testimoni.map((te) => (
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <p className="text-gray-600 text-sm mb-6">
                                    {te.Text}
                                </p>
                                <Link
                                    href={"https://instagram.com/arcade_design"}
                                    target="_blank"
                                    className="flex items-center"
                                >
                                    <img
                                        src="https://i.imgur.com/b9ukdhr.jpeg"
                                        className="w-12 h-12 rounded-full mr-4"
                                        alt="Eddy Shen Sutedja"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Eddy Shen Sutedja
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            Principal Architect
                                        </p>
                                    </div>
                                </Link>
                                <div className="flex flex-col gap-2 mt-4">
                                    <div className="flex flex-row gap-4 items-center">
                                        <h1 className="text-black">
                                            {t("environment")}:
                                        </h1>
                                        <div className="flex flex-row">
                                            {new Array(te.environment)
                                                .fill(0)
                                                .map((_, index) => (
                                                    <StarIcon
                                                        key={index}
                                                        fill="black"
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center">
                                        <h1 className="text-black">
                                            {t("food")}:
                                        </h1>
                                        <div className="flex flex-row">
                                            {new Array(te.food)
                                                .fill(0)
                                                .map((_, index) => (
                                                    <StarIcon
                                                        key={index}
                                                        fill="black"
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center">
                                        <h1 className="text-black">
                                            {t("drink")}:
                                        </h1>
                                        <div className="flex flex-row">
                                            {new Array(te.drink)
                                                .fill(0)
                                                .map((_, index) => (
                                                    <StarIcon
                                                        key={index}
                                                        fill="black"
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
