"use client";

import MenuDetail from "@/components/MenuDetail";
import { LoaderIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

function page({ params }) {
    const { slug } = params;
    const [product, setProduct] = useState({
        data: {},
        loading: false,
    });
    const getDetailedMenu = async (sluug) => {
        try {
            const res = await fetch(`http://localhost:3000/api/menu/${sluug}`, {
                method: "GET",
            });
            const data = await res.json();
            return data;
        } catch (error) {
        }
    };

    useEffect(() => {
        setProduct({
            data: {},
            loading: true,
        });
        getDetailedMenu(slug)
            .then((data) => {
                setProduct({
                    loading: false,
                    data: data.product,
                });
            })
            .catch((error) => {
                setProduct({
                    loading: false,
                    data: {},
                });
            });
    }, [slug]);

    return (
        <div>
            {product.loading ? (
                <div className="h-screen w-screen text-black flex flex-col justify-center items-center gap-4">
                    <h1>Loading</h1>
                    <LoaderIcon className="animate-spin" />
                </div>
            ) : (
                <MenuDetail data={product.data} />
            )}
        </div>
    );
}

export default page;
