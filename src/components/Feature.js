"use client";

import { useTranslations } from "next-intl";
import React from "react";

export default function Feature() {
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        {" "}
                        <img
                            src="https://creatie.ai/ai/api/search-image?query=A perfectly crafted latte art on a cappuccino in a white ceramic cup, showcasing intricate heart design. The coffee is placed on a wooden surface with minimal props and soft, natural lighting&width=400&height=300&orientation=landscape&flag=047ac9df-4b90-44e8-b261-d2ad7f372082"
                            className="w-full h-48 object-cover"
                            alt="Cappuccino"
                        />
                        <div className="p-6">
                            <h3 className="font-['Poppins'] text-black text-xl font-bold mb-2">
                                Artisan Cappuccino
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Rich espresso topped with velvety steamed milk
                                and delicate foam art
                            </p>
                            <p className="text-black font-semibold">$4.50</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        {" "}
                        <img
                            src="https://creatie.ai/ai/api/search-image?query=A cold brew coffee served in a tall glass with ice cubes, showing the rich dark color of the coffee. Clean presentation on a light surface with minimal styling&width=400&height=300&orientation=landscape&flag=b9396909-be15-48a1-9f8f-4390b1f30f8b"
                            className="w-full h-48 object-cover"
                            alt="Cold Brew"
                        />
                        <div className="p-6">
                            <h3 className="font-['Poppins'] text-black text-xl font-bold mb-2">
                                Signature Cold Brew
                            </h3>
                            <p className="text-gray-600 mb-4">
                                24-hour steeped coffee served over ice for a
                                smooth finish
                            </p>
                            <p className="text-black font-semibold">$5.00</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        {" "}
                        <img
                            src="https://creatie.ai/ai/api/search-image?query=A freshly baked croissant with a golden-brown, flaky exterior on a white plate. Natural lighting emphasizes the layers and texture&width=400&height=300&orientation=landscape&flag=30f09d21-0e22-4fda-addd-7904b48ffb6b"
                            className="w-full h-48 object-cover"
                            alt="Croissant"
                        />
                        <div className="p-6">
                            <h3 className="font-['Poppins'] text-black text-xl font-bold mb-2">
                                Butter Croissant
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Freshly baked, flaky layers of buttery
                                perfection
                            </p>
                            <p className="text-black font-semibold">$3.50</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        {" "}
                        <img
                            src="https://creatie.ai/ai/api/search-image?query=A slice of rich chocolate cake with layers of ganache, served on a white plate. The cake shows perfect layers and a glossy chocolate finish&width=400&height=300&orientation=landscape&flag=658298c7-54f7-475c-b434-e8e285e54a5d"
                            className="w-full h-48 object-cover"
                            alt="Chocolate Cake"
                        />
                        <div className="p-6">
                            <h3 className="font-['Poppins'] text-black text-xl font-bold mb-2">
                                Dark Chocolate Cake
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Rich layers of chocolate cake with smooth
                                ganache
                            </p>
                            <p className="text-black font-semibold">$6.50</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
