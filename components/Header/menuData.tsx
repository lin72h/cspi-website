import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Docs",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Services",
        newTab: false,
        path: "/pricing",
      },
      {
        id: 32,
        title: "Testimonials",
        newTab: false,
        path: "/testimonials",
      },
      {
        id: 33,
        title: "FAQ",
        newTab: false,
        path: "/faq",
      },
      {
        id: 35.1,
        title: "Contact Us",
        newTab: false,
        path: "/support",
      }
    ],
  },
];

export default menuData;
