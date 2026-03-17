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
    name: "関\"EPOCALC\"貴彦",
    desc: "2000年生まれ。宮城県出身。ウクレレ・ボーカル担当。大体の曲を作っている。2019年からEPOCALC名義で音楽ブロガーとして活動、メディアWater Walkを運営中。うさぎが好き。",
    href: "#",
    img: "/rayuela-test.jpg",
  },
  {
    name: "芦和香奈",
    desc: "1998年生まれ。宮城県出身、西東京市在住。ピアニカ/小物楽器担当。最近は京都の豆腐のおいしさに感動した。",
    href: "#",
    img: "/rayuela-test.jpg",
  },
  {
    name: "神宮司",
    desc: "2001年生まれ。栃木県出身。ベース担当。 2023年冬頃から様々なバンドで活動しつつ、ソロでの活動も細々と行う。ライブ中は表情を変えず淡々と演奏していることが多いが、本人はかなり楽しんでいる。大酒飲み。",
    href: "#",
    img: "/rayuela-test.jpg",
  },
  {
    name: "亀田",
    desc: "1998年生まれ。千葉県出身。ドラム等担当。水中走行や広場でも活動。2000年代のインターネット文化が好き。麻雀が強かったことがある。",
    href: "#",
    img: "/rayuela-test.jpg",
  },
];
