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
  { label: "News", href: "/news" },
  { label: "Schedule", href: "/schedule" },
  //  { label: "Store", href: storeUrl, external: true },
  //  { label: "Contact", href: contactUrl, external: true },
];

export const links = [
  { label: "X", href: "https://x.com/rayuela____", img: "/sns/x.png" },
  {
    label: "Instagram",
    href: "https://instagram.com/rayuela_band",
    img: "/sns/instagram.png",
  },
  { label: "SoundCloud", href: "https://soundcloud.com/r_a_y_u_e_l_a", img: "/sns/soundcloud.png" },
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
