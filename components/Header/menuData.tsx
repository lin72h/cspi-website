import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Consulting Services",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2,
    title: "Tax and Compliance",
    newTab: false,
    path: "/#features",
  },
  {
    id: 3,
    title: "Budgeting",
    newTab: false,
    path: "/#features",
  },
  {
    id: 4,
    title: "Workshop",
    newTab: false,
    path: "/#features",
  },
  {
    id: 5,
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
