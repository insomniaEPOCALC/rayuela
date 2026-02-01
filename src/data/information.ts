const storeUrl = "https://example.com/store";
const contactUrl = "https://docs.google.com/document/d/XXXXXXXXXXXX/edit";
//  TODO: 設定次第正しいリンクに変更する

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Schedule", href: "/schedule" },
  { label: "News", href: "/news" },
//  { label: "Store", href: storeUrl, external: true },
//  { label: "Contact", href: contactUrl, external: true },
];

export const links = [
  { label: "X", href: "https://x.com/rayuela____" },
  { label: "Instagram", href: "https://instagram.com/rayuela_band" },
//  { label: "YouTube", href: "https://youtube.com/@your_account" },
//  { label: "Bandcamp", href: "https://your.bandcamp.com" },
];

export const members = [
  {
    name: "Member A",
    desc: "これはテストですこれはテストですこれはテストですこれはテストですこれはテストです。",
    href: "#",
    img: "/rayuela-test.jpg",
  },
  {
    name: "Member B",
    desc: "これはテストですこれはテストですこれはテストですこれはテストですこれはテストです。",
    href: "#",
    img: "/rayuela-test.jpg",
  },
  {
    name: "Member C",
    desc: "これはテストですこれはテストですこれはテストですこれはテストですこれはテストです。",
    href: "#",
    img: "/rayuela-test.jpg",
  },
  {
    name: "Member D",
    desc: "これはテストですこれはテストですこれはテストですこれはテストですこれはテストです。",
    href: "#",
    img: "/rayuela-test.jpg",
  },
];
