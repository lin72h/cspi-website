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
    title: "Pages",
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
      },
      {
        id: 31.5,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35.2,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
];

export default menuData;
