"use client";

import { Link } from "@/i18n/routing";
import { InstagramIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function Footer() {
    const t = useTranslations("footer");
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <div className="flex items-center mb-2">
                            {" "}
                            <div className="flex flex-col text-right">
                                <h1 className="text-white">CLUSTER</h1>
                                <h1 className="text-white">COFFEE</h1>
                            </div>
                            <img
                                src="/logo-big-white.png"
                                alt="Logo"
                                className="h-11"
                            />
                        </div>
                        <p className="text-gray-400">{t("description")}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            {t("contact")}
                        </h3>
                        <p className="text-gray-400 mb-2">
                            Ratna Niaga No.30, Kota Baru Parahyangan
                        </p>
                        <p className="text-gray-400 mb-2">
                            Padalarang, Kabupaten Bandung Barat
                        </p>
                        <p className="text-gray-400 mb-2">+62 858-5005-0074</p>
                        <p className="text-gray-400">info@clustercoffee.com</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            {t("hours.title")}
                        </h3>
                        <p className="text-gray-400 mb-2">
                            {t("hours.weekdays")}
                        </p>
                        <p className="text-gray-400">{t("hours.weekends")}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            {t("follow")}
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                target="_blank"
                                href="https://instagram.com/cluster.coffee"
                                className="text-gray-400 hover:text-white"
                            >
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Cluster Coffee. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
