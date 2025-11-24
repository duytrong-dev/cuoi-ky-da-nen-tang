import MasonryList from "@react-native-seoul/masonry-list";
import React from "react";
import FeaturedItem, { FeaturedProductItem } from "./featured-item";

const PRODUCTS: FeaturedProductItem[] = [
    {
        id: '1',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
        title: "Ram Laptop DDR5 8gb Samsung/skhynix/crucial",
        price: 609520,
        rating: 5.0,
        sold: 4,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "2 - 3 ngày",
        isPreferred: true,
        hasVoucherXtra: true,
    },
    {
        id: '2',
        image: "https://down-vn.img.susercontent.com/file/vn-11134211-7ras8-mbrnqd7r8r56ff.webp",
        title: "Bộ nhớ trong (RAM) DDR5 Bus 4800/5600 16GB 32GB",
        price: 1495120,
        rating: 5.0,
        sold: 18,
        location: "Quảng Ninh",
        deliveryTime: "2 - 4 ngày",
        hasVoucherXtra: true,
    },
    {
        id: '3',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz7j1caiwpep17.webp",
        title: "[Sẵn hàng] Kit bàn phím cơ Lucky65 v3 - Nhôm CNC cao cấp",
        price: 1300500,
        rating: 5.0,
        sold: 280,
        location: "Hà Nội",
        deliveryTime: "1 - 3 ngày",
        isPreferred: true,
        hasVoucherXtra: true,
        isTrending: true,
    },
    {
        id: '4',
        image: "https://down-vn.img.susercontent.com/file/vn-11134211-7ras8-mbrnqd7r34vebe.webp",
        title: "[Bảo Hành 3 Năm] RAM LAPTOP DDR5 Samsung 8GB 16GB Bus 4800 5600",
        price: 1799000,
        rating: 4.9,
        sold: 451,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "2 - 3 ngày",
        isPreferred: true,
        hasVoucherXtra: true,
    },
    {
        id: '5',
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rdvl-lz7j1caiwpep17@resize_w450_nl.webp",
        title: "Quần Âu Dài Nam LC, Form Slim, cạp chun ấn, vải ấu",
        price: 322960,
        rating: 4.8,
        sold: 128,
        location: "Hà Nội",
        deliveryTime: "3 - 5 ngày",
    },
    {
        id: '6',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz7j1caiwpep17.webp",
        title: "Ram Laptop Ddr5 16gb Bus 5600, 4800MHz Chính hãng Samsung SK Hynix Crucial",
        price: 2112000,
        rating: 5.0,
        sold: 36,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "2 - 3 ngày",
        hasVoucherXtra: true,
    },
    {
        id: '7',
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rdw4-lz7j1caiwpep17@resize_w450_nl.webp",
        title: "Máy tính All In One G33 I7-8650U Ram 16GB SSD 256GB Màn 24 inch",
        price: 7310000,
        rating: 4.9,
        sold: 89,
        location: "Hà Nội",
        deliveryTime: "2 - 4 ngày",
        isMall: true,
        isTrending: true,
    },
    {
        id: '8',
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz09eax7ab0te9@resize_w450_nl.webp",
        title: "iPhone 14 Pro Max 128GB 256GB 512GB Chính hãng VN/A",
        price: 25990000,
        rating: 5.0,
        sold: 234,
        location: "TP. Hồ Chí Minh",
        deliveryTime: "1 - 2 ngày",
        isMall: true,
        isPreferred: true,
    },
];

export default function FeaturedGrid() {
    return (
        <MasonryList
            data={PRODUCTS}
            keyExtractor={(item) => (item as FeaturedProductItem).id}
            numColumns={2}
            renderItem={({ item }) => <FeaturedItem item={item as FeaturedProductItem} />}
            showsVerticalScrollIndicator={false}
            className="p-1"
        />
    );
}
