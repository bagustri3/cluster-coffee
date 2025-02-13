"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Reservation() {
    const t = useTranslations("Reservation");
    const [data, setData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        question: "",
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(data);

        if (!data.name || !data.email || !data.phoneNumber || !data.question) {
            return;
        }

        const result = await fetch("/api/ask", {
            method: "POST",
            body: JSON.stringify(data),
        });

        if (result.ok) {
            Swal.fire({
                title: t("questionSent"),
                icon: "success",
                timer: 1000,
                timerProgressBar: true,
            });
        } else {
            Swal.fire({
                title: t("questionFailed"),
                icon: "error",
                timer: 1000,
                timerProgressBar: true,
            });
        }
    };

    return (
        <section className="py-24 bg-gray-50" id="reservation-page">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 font-[&#34;Playfair_Display&#34;]">
                        {t("title")}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {t("description")}
                    </p>
                </div>
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 font-['Poppins']">
                    <form
                        className="space-y-6"
                        name="ask-us"
                        method="POST"
                        data-netlify="true"
                    >
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("form.name")}
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 border rounded-lg block w-full text-black border-gray-300 focus:border-black-200"
                                    required
                                    value={data.name}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("form.email")}
                                </label>
                                <input
                                    type="email"
                                    className="mt-1 p-2 border rounded-lg text-black block w-full border-gray-300 focus:border-black"
                                    required
                                    value={data.email}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("form.phone")}
                                </label>
                                <div className="relative mt-1">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                        +62
                                    </span>
                                    <input
                                        type="tel"
                                        className="pl-12 pr-4 py-2 text-black border rounded-lg w-full border-gray-300 focus:border-gray-500"
                                        placeholder="81234567890"
                                        required
                                        value={data.phoneNumber}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                phoneNumber: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                {t("form.request")}
                            </label>
                            <textarea
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        question: e.target.value,
                                    })
                                }
                                value={data.question}
                                rows="4"
                                className="mt-1 text-black p-2 border rounded-lg block w-full border-gray-300 focus:border-black"
                            ></textarea>
                        </div>
                        <div className="mt-6">
                            <button
                                onClick={handleFormSubmit}
                                className="w-full bg-black text-white px-6 py-3 rounded-lg text-lg font-normal hover:bg-black/90"
                            >
                                {t("form.submit")}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <i className="fas fa-clock text-3xl text-custom"></i>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">
                                Opening Hours
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Mon-Fri: 7am - 7pm
                                <br />
                                Sat-Sun: 8am - 6pm
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <i className="fas fa-map-marker-alt text-3xl text-custom"></i>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">
                                Location
                            </h3>
                            <p className="mt-2 text-gray-600">
                                123 Coffee Street
                                <br />
                                New York, NY 10001
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <i className="fas fa-map-marker-alt text-3xl text-custom"></i>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">
                                Location
                            </h3>
                            <p className="mt-2 text-gray-600">
                                123 Coffee Street
                                <br />
                                New York, NY 10001
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
