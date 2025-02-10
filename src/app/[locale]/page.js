import About from "@/components/About";
import Feature from "@/components/Feature";
import Header from "@/components/Header";
import ReservationButton from "@/components/ReservationButton";
import Testimoni from "@/components/Testimoni";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Header />
            <About />
            <Feature />
            <Testimoni />
            <ReservationButton />
        </div>
    );
}
