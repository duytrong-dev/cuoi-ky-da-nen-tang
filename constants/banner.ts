type BannerType = {
    id: number;
    image: number;
}

export const banners: BannerType[] = [
    {
        id: 1,
        image: require("@/assets/images/banner-1.png"),
    },
    {
        id: 2,
        image: require("@/assets/images/banner-2.png"),
    },
    {
        id: 3,
        image: require("@/assets/images/banner-3.png"),
    },
];