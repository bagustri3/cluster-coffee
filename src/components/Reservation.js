import { useTranslations } from "next-intl";
import React from "react";

export default function Reservation() {
    const t = useTranslations("Reservation");
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
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("form.name")}
                                </label>
                                <input
                                    type="text"
                                    className=" mt-1 block w-full text-black border-gray-300 focus:border-black-200 "
                                    required=""
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("form.email")}
                                </label>
                                <input
                                    type="email"
                                    className=" mt-1 text-black block w-full border-gray-300 focus:border-black "
                                    required=""
                                />
                            </div>
                            <div>
                                <label className="block text-sm  font-medium text-gray-700">
                                    {t("form.date")}
                                </label>
                                <input
                                    type="date"
                                    className=" mt-1 text-black block w-full border-gray-300 focus:border-black "
                                    required=""
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("form.time")}
                                </label>
                                <select
                                    className=" mt-1 text-black block w-full border-gray-300 focus:border-black "
                                    required=""
                                >
                                    <option>9:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                    <option>3:00 PM</option>
                                    <option>4:00 PM</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("form.guests")}
                                </label>
                                <select
                                    className=" mt-1 block text-black w-full border-gray-700 focus:border-gray "
                                    required=""
                                >
                                    <option>1 Person</option>
                                    <option>2 People</option>
                                    <option>3 People</option>
                                    <option>4 People</option>
                                    <option>5+ People</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    {t("form.phone")}
                                </label>
                                <input
                                    type="tel"
                                    className=" mt-1 block w-full border-gray-300 focus:border-gray "
                                    required=""
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                {t("form.request")}
                            </label>
                            <textarea
                                rows="4"
                                className=" mt-1 block w-full border-gray-300 focus:border-black "
                            ></textarea>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-black/90"
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
