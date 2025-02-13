"use client";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

export default function MenuList() {
    const t = useTranslations("menu");
    const [openCategory, setOpenCategory] = useState(null);
    const initialState = {
        products: [],
        loading: false,
    };
    const [products, setProducts] = useState(initialState);
    const [category, setCategory] = useState({
        data: [],
        loading: false,
    });

    const getProducts = (params) => {
        if (!category.data.length) {
            setCategory({
                loading: true,
                data: [],
            });
        }
        setProducts({
            loading: true,
            products: [],
        });
        fetch(`/api/menu?${params ? "category=" + params : ""}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts({
                    loading: false,
                    products: data.products,
                });
                if (!category.data.length) {
                    setCategory({
                        data: data.categories,
                        loading: false,
                    });
                }
            })
            .catch(() => {
                setProducts({
                    loading: false,
                    products: [],
                });
                if (!category.data.length) {
                    setCategory({
                        loading: false,
                        data: [],
                    });
                }
            });
    };

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    useEffect(() => {
        getProducts();
    }, []);

    // const categories = [
    //     { name: "Coffee", subcategories: ["Espresso", "Cappuccino", "Latte"] },
    //     { name: "Main Course", subcategories: ["Steak", "Pasta", "Burger"] },
    //     { name: "Food", subcategories: ["Pizza", "Sushi", "Salad"] },
    //     { name: "Dessert", subcategories: ["Cake", "Ice Cream"] },
    //     { name: "Drinks", subcategories: ["Tea", "Smoothie"] },
    // ];

    const truncateTo30Words = (str) => {
        const words = str.split(" ");
        if (words.length <= 30) {
            return str;
        }
        return words.slice(0, 30).join(" ") + "...";
    };

    return (
        <section className="py-24 bg-gray-50 min-h-screen">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 font-[&#39;Playfair_Display&#39;]">
                        {t("title")}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {t("description")}
                    </p>
                </div>
                <div className="mt-16">
                    {category.loading ? (
                        <div className="w-full flex text-black items-center text-center justify-center">
                            <Loader2 className="animate-spin" />
                        </div>
                    ) : (
                        <div className="flex flex-wrap justify-center gap-6 mb-12">
                            <div className="relative" key={"showAll"}>
                                <button
                                    onClick={() => getProducts("")}
                                    className="relative text-gray-600 text-center flex justify-center items-center hover:text-black px-6 py-2 text-lg font-medium group w-full"
                                >
                                    All Menu
                                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                                </button>
                            </div>
                            {category.data.map((category) => (
                                <div key={category.name} className="relative">
                                    {/* Main Category Button */}
                                    <button
                                        onClick={() =>
                                            toggleCategory(category.name)
                                        }
                                        className="relative text-gray-600 text-center flex justify-center items-center hover:text-black px-6 py-2 text-lg font-medium group w-full"
                                    >
                                        {category.name}
                                        {/* Underline Animation (Centered) */}
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gray-400 transition-all duration-700 ease-in-out group-hover:w-full"></span>
                                    </button>

                                    {/* Subcategories Dropdown (Centered) */}
                                    {openCategory === category.name && (
                                        <div className="absolute text-gray-600 text-center left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
                                            <ul className="py-2">
                                                {category.SubCategory.map(
                                                    (sub, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                            onClick={() => {
                                                                getProducts(
                                                                    sub.id
                                                                );
                                                            }}
                                                        >
                                                            {sub.name}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    {!products.loading && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.products.map((e) => (
                                <div
                                    key={e.id}
                                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="aspect-[1/1] overflow-hidden rounded-lg">
                                        <img
                                            src={e.imageUrl}
                                            className="h-full w-full object-cover"
                                            alt={e.name}
                                        />
                                    </div>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                                        {e.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-600">
                                        {truncateTo30Words(e.description)}
                                    </p>
                                    <p className="mt-2 text-sm text-black font-medium text-custom">
                                        {new Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                            maximumFractionDigits: 0,
                                        }).format(e.price)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
