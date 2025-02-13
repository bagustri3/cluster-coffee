"use client";

import { Link } from "@/i18n/routing";
import {
    Facebook,
    FacebookIcon,
    Instagram,
    InstagramIcon,
    Settings,
    X,
    YoutubeIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function Footer() {
    const t = useTranslations("footer");
    const initialState = {
        setting: {},
        loading: false,
    };
    const [data, setData] = useState(initialState);
    useEffect(() => {
        fetch("/api/home")
            .then((res) => res.json())
            .then((data) => {
                console.log(data.setting);
                setData({
                    loading: false,
                    setting: data.setting,
                });
            })
            .catch(() => {
                setData({
                    loading: false,
                    data: null,
                });
            });
    }, []);
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
                        <p className="text-gray-400 mb-2">
                            {data.setting?.phoneNumber}
                        </p>
                        <p className="text-gray-400">{data.setting?.email}</p>
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
                            {data.setting?.instagramUrl && (
                                <a
                                    target="_blank"
                                    href={data.setting?.instagramUrl}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <Instagram />
                                </a>
                            )}
                            {data.setting?.facebookUrl && (
                                <a
                                    target="_blank"
                                    href={data.setting?.facebookUrl}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <Facebook />
                                </a>
                            )}
                            {data.setting?.youtubeUrl && (
                                <a
                                    target="_blank"
                                    href={data.setting?.youtubeUrl}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <YoutubeIcon />
                                </a>
                            )}
                            {data.setting?.twitterUrl && (
                                <a
                                    target="_blank"
                                    href={data.setting?.twitterUrl}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <X />
                                </a>
                            )}
                            {data.setting?.whatsappUrl && (
                                <a
                                    target="_blank"
                                    href={data.setting?.whatsappUrl}
                                    className="text-gray-400 hover:text-white"
                                ></a>
                            )}
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
