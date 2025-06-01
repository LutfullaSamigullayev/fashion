import {
  CollectionItemsType,
  FooterItemsType,
  FooterMenuType,
  InstagramItemsType,
  MenuItemsType,
  NowWearItemsType,
} from "@/types";

export const menuItems: MenuItemsType[] = [
  {
    id: 1,
    link: "#women",
    title: "Women",
  },
  {
    id: 2,
    link: "#men",
    title: "Men",
  },
  {
    id: 3,
    link: "#child",
    title: "Children",
  },
  {
    id: 4,
    link: "#about",
    title: "About",
  },
];

export const collectionTopItems: CollectionItemsType[] = [
  {
    id: 1,
    imgUrl: "/collection/top_1.jpg",
    title: "New Arrivals",
  },
  {
    id: 2,
    imgUrl: "/collection/top_2.jpg",
    title: "The Casual Edit",
  },
  {
    id: 3,
    imgUrl: "/collection/top_3.jpg",
    title: "Best-Sellers",
  },
];

export const collectionBottomItems: CollectionItemsType[] = [
  {
    id: 1,
    imgUrl: "/collection/bottom_1.jpg",
    title: "The Smart Chik",
  },
  {
    id: 2,
    imgUrl: "/collection/bottom_2.jpg",
    title: "Ready To Go",
  },
];

export const nowWearItems: NowWearItemsType[] = [
  {
    id: 1,
    imgUrl: "/wear/wear_1.jpg",
    title: "The Casual Edit Casua",
    price: 298,
  },
  {
    id: 2,
    imgUrl: "/wear/wear_2.jpg",
    title: "The Casual Edit Casua",
    price: 298,
  },
  {
    id: 3,
    imgUrl: "/wear/wear_3.jpg",
    title: "The Casual Edit Casua",
    price: 298,
  },
  {
    id: 4,
    imgUrl: "/wear/wear_4.jpg",
    title: "The Casual Edit Casua",
    price: 298,
  },
  {
    id: 5,
    imgUrl: "/wear/wear_5.jpg",
    title: "The Casual Edit Casua",
    price: 298,
  },
];

export const instagramItems: InstagramItemsType[] = [
  {
    id: 1,
    bgUrl: "/instagram/instagram_1.jpg",
  },
  {
    id: 2,
    bgUrl: "/instagram/instagram_2.jpg",
  },
  {
    id: 3,
    bgUrl: "/instagram/instagram_3.jpg",
  },
  {
    id: 4,
    bgUrl: "/instagram/instagram_4.jpg",
  },
  {
    id: 5,
    bgUrl: "/instagram/instagram_5.jpg",
  },
];

export const footerItems: FooterMenuType[] = [
  {
    id: 1,
    title: "CONTACT US",
    data: [
      {
        id: 1,
        title: "+1(844)326-6000",
        link: "#",
      },
      {
        id: 2,
        title: "Email Us",
        link: "#",
      },
      {
        id: 3,
        title: "Mon-Fri 9am-3pm PT",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "CUSTOMERS",
    data: [
      {
        id: 1,
        title: "Start a Return",
        link: "#",
      },
      {
        id: 2,
        title: "Return Policy",
        link: "#",
      },
      {
        id: 3,
        title: "FAQ",
        link: "#",
      },
      {
        id: 4,
        title: "Catalogs and Maliers",
        link: "#",
      },
      {
        id: 5,
        title: "About Group Gifting",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    title: "COMPANY",
    data: [
      {
        id: 1,
        title: "About Us",
        link: "#",
      },
      {
        id: 2,
        title: "Sustaniability",
        link: "#",
      },
      {
        id: 3,
        title: "Discover Revive",
        link: "#",
      },
      {
        id: 4,
        title: "Careers",
        link: "#",
      },
      {
        id: 5,
        title: "Privacy Policy",
        link: "#",
      },
      {
        id: 6,
        title: "Terms",
        link: "#",
      },
    ],
  },
];
