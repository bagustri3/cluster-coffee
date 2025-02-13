"use client";
import About from "@/components/About";
import Feature from "@/components/Feature";
import Header from "@/components/Header";
import ReservationButton from "@/components/ReservationButton";
import Testimoni from "@/components/Testimoni";
import { useEffect, useState } from "react";

export default function Home() {
    const initialState = {
        data: [],
        loading: false,
    };
    const [data, setData] = useState(initialState);
    useEffect(() => {
        setData({
            loading: true,
            data: [],
        });
        fetch("/api/home")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData({
                    loading: false,
                    data: {
                        ...data,
                    },
                });
            })
            .catch(() => {
                setData({
                    loading: false,
                    data: [],
                });
            });
    }, []);
    return (
        <div>
            <Header />
            <About />
            {!data.loading && (
                <>
                    <Feature products={data.data.featured} />
                    <Testimoni testimoni={data.data.testimoni} />
                </>
            )}
            <ReservationButton />
        </div>
    );
}
