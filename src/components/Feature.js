"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function Feature({ products = [] }) {
    const t = useTranslations("feature");
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-['Poppins'] text-4xl font-bold mb-4 text-gray-900">
                        {t("title")}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.length &&
                        products.map((product) => (
                            <Link
                                href={`/menu/${product.slug}`}
                                key={product.slug}
                                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                <img
                                    src={product.imageUrl}
                                    className="w-full h-48 object-cover"
                                    alt={product.name}
                                />
                                <div className="p-6">
                                    <h3 className="font-['Poppins'] text-black text-xl font-bold mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {product.description}
                                    </p>
                                    <p className="text-black font-semibold">
                                        {new Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                            maximumFractionDigits: 0,
                                        }).format(product.price)}
                                    </p>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </section>
    );
}
