import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Consulting Services",
    newTab: false,
    path: "/consulting-services",
  },
  {
    id: 2,
    title: "Tax and Compliance",
    newTab: false,
    path: "/tax-and-compliance",
  },
  {
    id: 3,
    title: "Budgeting",
    newTab: false,
    path: "/budgeting-cashflows",
  },
  {
    id: 4,
    title: "Workshop",
    newTab: false,
    path: "/workshop",
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
