"use client";

import { Link, useRouter, routing } from "@/i18n/routing";
import React, { useEffect, useState } from "react";
import LocaleSwitcherSelect from "./SwitchLocale";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const locale = useLocale();
    const t = useTranslations("");
    const router = useRouter();
    useEffect(() => {});
    return (
        <div>
            <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
                <div className="max-w-8xl flex justify-between mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex items-center">
                        {" "}
                        <div className="flex flex-col text-right">
                            <h1 className="text-black">CLUSTER</h1>
                            <h1 className="text-black">COFFEE</h1>
                        </div>
                        <img src="/logo-big.png" alt="Logo" className="h-11" />
                    </Link>
                    <div className="hidden md:flex justify-between content-end h-16">
                        <div className="justify-center flex md:flex items-center md:space-x-8 space-x-2">
                            <Link
                                href="/#about"
                                className="text-gray-600 hover:text-custom/80 font-medium"
                            >
                                About
                            </Link>
                            <Link
                                href="/menu"
                                className="text-gray-600 hover:text-custom/80 font-medium"
                            >
                                Menu
                            </Link>
                            <Link
                                href="/collaboration"
                                className="hidden md:flex text-gray-600 hover:text-custom/80 font-medium"
                            >
                                Collaboration
                            </Link>
                            <Link
                                href="/blogs"
                                className="text-gray-600 hover:text-custom/80 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                Article
                            </Link>
                            <LocaleSwitcherSelect
                                defaultValue={locale}
                                label={"Language"}
                            >
                                <option value={"id"} key={"id"}>
                                    ID
                                </option>
                                <option value={"en"} key={"en"}>
                                    EN
                                </option>
                            </LocaleSwitcherSelect>
                            <Link
                                href={"/contact-us"}
                                className="hidden md:flex rounded-xl bg-black text-white px-2 md:px-6 py-2 font-medium hover:bg-black/80"
                            >
                                Ask Us
                            </Link>
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-black"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Mobile Dropdown */}
                    {isOpen && (
                        <div className="absolute top-12 left-0 w-full bg-white shadow-lg border-t md:hidden">
                            <div className="flex flex-col items-center space-y-4 py-4">
                                <Link
                                    href="/#about"
                                    className="text-gray-600 hover:text-custom/80 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    href="/menu"
                                    className="text-gray-600 hover:text-custom/80 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Menu
                                </Link>
                                <Link
                                    href="/collaboration"
                                    className="text-gray-600 hover:text-custom/80 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Collaboration
                                </Link>
                                <Link
                                    href="/blogs"
                                    className="text-gray-600 hover:text-custom/80 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Article
                                </Link>
                                <LocaleSwitcherSelect
                                    defaultValue={locale}
                                    label="Language"
                                >
                                    <option value="id">ID</option>
                                    <option value="en">EN</option>
                                </LocaleSwitcherSelect>
                                <Link
                                    href="/contact-us"
                                    className="rounded-xl bg-black text-white px-6 py-2 font-medium hover:bg-black/80"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Ask Us
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}
