export type News = {
  datetime: string;
  imgPath?: string;
  title: string;
  details?: string;
  link?: string;
};

export const news: News[] = [
  {
    datetime: "2026-02-14T19:00:00+09:00",
    title: "テスト（仮）",
    imgPath: "/rayuela-test.jpg",
    details: "これはテストですこれはテストですこれはテストですこれはテストですこれはテストです。",
    link: "https://example.com",
  },
  {
    datetime: "2026-03-01T18:30:00+09:00",
    title: "テスト2",
    details: "詳細は後日発表します。",
  },
];
