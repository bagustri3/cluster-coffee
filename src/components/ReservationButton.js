"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

export default function ReservationButton() {
    const t = useTranslations("reservationButton");
    return (
        <section className="py-24 bg-black">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-white">
                    <h2 className="font-['Poppins'] text-4xl font-bold mb-4">
                        {t("title")}
                    </h2>
                    <p className="max-w-2xl mx-auto font-normal mb-8">
                        {t("description")}
                    </p>
                    <Link
                        href={"/reservation"}
                        className="rounded-xl bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100"
                    >
                        {t("button")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
