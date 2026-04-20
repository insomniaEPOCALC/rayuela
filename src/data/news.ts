export type News = {
  datetime: string;
  imgPath?: string;
  title: string;
  details?: string;
  link?: string;
};

export const news: News[] = [
  {
    datetime: "2026-04-20T21:00:00",
    title: "5月のライブ情報を更新しました",
    details: "5月のライブ情報を更新しました。今後も随時更新していきますので、ぜひチェックしてください。←github copilotによる自動生成文",
    link: "https://rayuela.jp/schedule",
  },
  {
    datetime: "2026-04-20T21:00:00",
    title: "公式サイトを作成しました",
    imgPath: "/rayuela-test.jpg",
    details: "公式サイトを作成しました。今後はライブ情報やニュースなどをこちらでお知らせしていきます。←github copilotによる自動生成文",
  },
];
