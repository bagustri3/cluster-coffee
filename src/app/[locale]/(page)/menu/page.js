import MenuList from "@/components/MenuList";
import {} from "next-intl";
import React from "react";

export const metadata = {
    title: "Menu",
    description: "Menu CLUSTER COFFEE - Coffee Shop",
    openGraph: {
        title: "Menu",
        description: "Menu CLUSTER COFFEE - Coffee Shop",
        type: "website",
        locale: "id",
        url: "https://clustercoffee.space/id/menu",
        siteName: "Cluster Coffee",
        images: [
            {
                url: "/menu.jpg",
                width: 800,
                height: 600,
                alt: "Cluster Coffee Menu",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Menu",
        description: "Menu CLUSTER COFFEE - Coffee Shop",
        images: [
            {
                url: "https://clustercoffee.space/menu.jpg",
                width: 800,
                height: 600,
                alt: "Cluster Coffee Menu",
            },
        ],
    },
};
function page() {
    return (
        <div>
            <MenuList />
        </div>
    );
}

export default page;
