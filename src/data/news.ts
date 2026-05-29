export type News = {
  datetime: string;
  imgPath?: string;
  title: string;
  details?: string;
  link?: string;
};

export const news: News[] = [
  {
    datetime: "2026-05-24T18:30:00",
    title: "自主企画「その他もろもろの側から」の情報を公開しました",
    details: "石蹴り遊びの主催する、不定期イベント第一弾の情報を出しました。とても豪華な出演者が揃っています。配信もあるので、ぜひご覧ください ！",
    link: "https://ongakunojikan.com/2026/05/24.html",
  },
  {
    datetime: "2026-04-20T21:00:00",
    title: "5月のライブ情報を更新しました",
    details: "5月のライブ情報を更新しました。今後も随時更新していきますので、ぜひチェックしてください。\r ↑github copilotによる自動生成文",
    link: "https://rayuela.jp/schedule",
  },
  {
    datetime: "2026-04-20T21:00:00",
    title: "公式サイトを作成しました",
    imgPath: "/rayuela-test.jpg",
    details: "公式サイトを作成しました。今後はライブ情報やニュースなどをこちらでお知らせしていきます。\r ↑github copilotによる自動生成文",
  },
];
