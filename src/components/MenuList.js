"use client";
import React from "react";

export default function MenuList() {
    return (
        <section className="py-24 bg-gray-50 min-h-screen">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 font-[&#39;Playfair_Display&#39;]">
                        Our Craft Menu
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Handcrafted with love and expertise
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="col-span-full flex justify-center space-x-8 mb-12">
                        <button className="text-custom hover:text-custom/80 px-6 py-2 text-lg font-medium border-b-2 border-custom">
                            Coffee
                        </button>
                        <button className="text-gray-600 hover:text-custom px-6 py-2 text-lg font-medium">
                            Pastries
                        </button>
                        <button className="text-gray-600 hover:text-custom px-6 py-2 text-lg font-medium">
                            Tea &amp; Others
                        </button>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="aspect-[1/1] overflow-hidden rounded-lg">
                            <img
                                src="https://creatie.ai/ai/api/search-image?query=A perfectly crafted latte art on a white ceramic cup, showcasing intricate heart pattern design. The coffee is rich and creamy, photographed from above on a clean wooden surface with minimal styling.&width=400&height=400&orientation=squarish&flag=cf860f8c-22aa-4223-92e7-f7dfa9cda12f&flag=51487bf3-9284-4e12-a3a5-0f7acf918da9&flag=d27cb142-ea5a-4670-90ea-cf9ffe07f9f6"
                                className="h-full w-full object-cover"
                                alt="Signature Latte"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">
                            Signature Latte
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Double shot espresso with velvety steamed milk
                        </p>
                        <p className="mt-2 text-sm font-medium text-custom">
                            $4.50
                        </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="aspect-[1/1] overflow-hidden rounded-lg">
                            <img
                                src="https://creatie.ai/ai/api/search-image?query=A pour-over coffee being prepared with precision, showing the clear glass vessel and paper filter. The coffee streams down in a steady flow, creating beautiful patterns. Clean wooden surface background.&width=400&height=400&orientation=squarish&flag=07a03d04-fe05-41f1-9fff-061a7dd45768&flag=7648de10-5f23-4761-add4-09cafce46beb&flag=b6eeb4b4-cb71-4c91-96f6-09ca4d44892d"
                                className="h-full w-full object-cover"
                                alt="Pour Over"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">
                            Pour Over
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Single-origin beans, hand-poured to perfection
                        </p>
                        <p className="mt-2 text-sm font-medium text-custom">
                            $5.00
                        </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="aspect-[1/1] overflow-hidden rounded-lg">
                            <img
                                src="https://creatie.ai/ai/api/search-image?query=A cold brew coffee served in a tall glass with ice cubes, showing the rich, dark color of the coffee. Condensation on the glass suggests refreshing coolness. Clean wooden surface background.&width=400&height=400&orientation=squarish&flag=1ea36ad0-ba8a-4c2c-aaee-4e8d67733dd9&flag=129555cf-651f-4851-84d5-5c15040507b6&flag=dcc6bf4e-c80a-4303-9888-c481327a0332"
                                className="h-full w-full object-cover"
                                alt="Cold Brew"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">
                            Cold Brew
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            24-hour steeped, smooth and refreshing
                        </p>
                        <p className="mt-2 text-sm font-medium text-custom">
                            $4.75
                        </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="aspect-[1/1] overflow-hidden rounded-lg">
                            <img
                                src="https://creatie.ai/ai/api/search-image?query=A mocha served in an artistic ceramic cup, topped with whipped cream and cocoa powder. The drink shows perfect layers of chocolate and coffee. Clean wooden surface background.&width=400&height=400&orientation=squarish&flag=225af1ab-199c-4ad0-ba95-2b8a6ed0c21b&flag=58b74a59-3b22-402f-98e5-e1ffef30146e&flag=c974d2b6-3610-4155-ac36-2239ed05d000"
                                className="h-full w-full object-cover"
                                alt="Mocha"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">
                            Artisan Mocha
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            House-made chocolate with espresso
                        </p>
                        <p className="mt-2 text-sm font-medium text-custom">
                            $5.25
                        </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="aspect-[1/1] overflow-hidden rounded-lg">
                            <img
                                src="https://creatie.ai/ai/api/search-image?query=A freshly baked croissant with a golden brown flaky exterior on a rustic wooden board&width=400&height=400&flag=f11c5f76-af44-4c7e-9f13-91c9d7668c6e&flag=ab900492-6b7e-4b7e-8195-e115a61a340b"
                                className="h-full w-full object-cover"
                                alt="Butter Croissant"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">
                            Butter Croissant
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Flaky, buttery, freshly baked daily
                        </p>
                        <p className="mt-2 text-sm font-medium text-custom">
                            $3.75
                        </p>
                    </div>
                    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="aspect-[1/1] overflow-hidden rounded-lg">
                            <img
                                src="https://creatie.ai/ai/api/search-image?query=A slice of rich chocolate cake with ganache topping&width=400&height=400&flag=7de8908e-eda6-4944-b57e-f368fed7f167&flag=db7b3904-dd22-420f-8095-f195eccea02e"
                                className="h-full w-full object-cover"
                                alt="Chocolate Cake"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">
                            Chocolate Cake
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Rich, moist cake with dark chocolate ganache
                        </p>
                        <p className="mt-2 text-sm font-medium text-custom">
                            $6.50
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
