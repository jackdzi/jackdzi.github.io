import { Menu } from "../../types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Team",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Join Us",
    path: "/join",
    newTab: false,
  },
  {
    id: 3,
    title: "Partners",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Contribute",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Clicky Thing",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Yeahh",
        path: "/about",
        newTab: false,
      },
    ],
  },
];
export default menuData;
