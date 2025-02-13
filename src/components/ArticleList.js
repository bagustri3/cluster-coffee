"use client";
import { Link } from "@/i18n/routing";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Article() {
    const t = useTranslations("blogs");
    const [blogs, setBlogs] = useState({
        data: [],
        loading: false,
    });
    const getCollabs = () => {
        setBlogs({
            loading: true,
            data: blogs.data,
        });
        fetch("/api/blogs")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBlogs({
                    loading: false,
                    data: data.blogs,
                });
            })
            .catch(() => {
                setBlogs({
                    loading: false,
                    data: [],
                });

                Swal.fire({
                    icon: "error",
                    timer: 1000,
                    timerProgressBar: true,
                });
            });
    };

    useEffect(() => {
        getCollabs();
    }, []);

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
                {blogs.loading ? (
                    <div className="flex flex-row items-center justify-center text-center text-black">
                        <Loader2 className="animate-spin mr-2 w-12 h-12" />
                        <h1 className="text-xl">Loading</h1>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {blogs.data.map((c) => (
                            <Link
                                href={c.Link}
                                target="_blank"
                                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                {" "}
                                <img
                                    src={c.imageUrl}
                                    className="w-full h-48 object-cover"
                                    alt="Cappuccino"
                                />
                                <div className="p-6 flex flex-col items-center text-center">
                                    <h3 className="font-['Poppins'] text-black text-xl font-bold mb-2">
                                        {c.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {c.description}
                                    </p>
                                    <p className="text-black font-semibold">
                                        {c.field}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
