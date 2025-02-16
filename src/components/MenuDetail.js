"use client";

import { Loader, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function MenuDetail({ data = {} }) {
    const [loading, setLoading] = useState(true);
    const [menuData, setMenuData] = useState(data);
    useEffect(() => {
        if (data && Object.keys(data).length !== 0) {
            setMenuData(data);
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [data]);

    if (loading) {
        return (
            <div className="py-24 text-center justify-center items-center h-full w-full">
                <p className="text-lg text-gray-600">Loading menu details...</p>
                <Loader className="animate-spin" />
            </div>
        );
    }

    if (!menuData || Object.keys(menuData).length === 0) {
        return (
            <div className="py-24 text-center items-center justify-center w-full h-full">
                <p className="text-lg text-gray-600">
                    Menu details not available.
                </p>
            </div>
        );
    }

    return (
        <section className="py-24 bg-gray-50 min-h-screen">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Our Craft Menu
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Handcrafted with love and expertise
                    </p>
                </div>
                <div className="mt-16">
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img
                                    className="h-96 w-full object-contain rounded-lg md:w-96"
                                    src={data.imageUrl}
                                    alt="Signature Latte"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900 font-[&#39;Playfair_Display&#39;]">
                                            {data.name}
                                        </h2>
                                        <p className="mt-2 text-gray-600 text-lg">
                                            {data.description}
                                        </p>
                                    </div>
                                    <span className="text-2xl font-bold text-black">
                                        {new Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                            minimumFractionDigits: 0,
                                        }).format(data.price)}
                                    </span>
                                </div>
                                {data.ingredients && (
                                    <div className="mt-6">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Ingredients
                                        </h3>
                                        <p className="mt-2 text-gray-600 text-lg">
                                            {data.ingredients}
                                        </p>
                                    </div>
                                )}
                                {data.ProductOptions.length && (
                                    <div>
                                        {data?.ProductOptions.map((po) => (
                                            <div className="mt-6">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {po.Options.name}
                                                </h3>
                                                <div className="mt-2 flex space-x-4">
                                                    {po.Options.AdditionalOption.map(
                                                        (e) => (
                                                            <button className="px-4 flex flex-col md:flex-row gap-2 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 hover:text-black">
                                                                <h2>
                                                                    {e.name}
                                                                </h2>
                                                                <h2>
                                                                    {new Intl.NumberFormat(
                                                                        "id-ID",
                                                                        {
                                                                            style: "currency",
                                                                            currency:
                                                                                "IDR",
                                                                            minimumFractionDigits: 0,
                                                                        }
                                                                    ).format(
                                                                        e.price
                                                                    )}
                                                                </h2>
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
