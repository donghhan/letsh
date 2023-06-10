import { BsChevronRight, BsCurrencyDollar, BsGlobe2 } from "react-icons/bs";
import { TbCurrencyBaht } from "react-icons/tb";

export const menuItems = [
  {
    key: "explore",
    text: "explore",
    to: "/explore",
  },
  {
    key: "topPlaces",
    text: "top places",
    to: "/top-places",
  },
  {
    key: "blog",
    text: "blog",
    to: "/blog",
  },
  {
    key: "help",
    text: "help",
    to: "/help",
  },
];

export const languageMenuItmes = [
  {
    key: "en",
    text: "en",
  },
  {
    key: "th",
    text: "th",
  },
];

export const utilMenuItmes = {
  language: [
    {
      key: "en",
      text: "en",
    },
    {
      key: "th",
      text: "th",
    },
  ],
  currency: [
    {
      key: "usd",
      text: "usd",
      icon: BsCurrencyDollar,
    },
    {
      key: "thb",
      text: "thb",
      icon: TbCurrencyBaht,
    },
  ],
};
