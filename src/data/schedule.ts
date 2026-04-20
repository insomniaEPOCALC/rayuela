export type Schedule = {
  datetime: string;
  title: string;
  ticket?: string;
  flyerPath?: string;
  details?: string;
  link?: string;
};

export const schedules: Schedule[] = [
  {
    datetime: "2026-05-24T18:30:00",
    title: "その他もろもろの側から そのいち @三鷹おんがくのじかん",
    ticket: "ADV ¥3,000 / DOOR ¥3,500",
    flyerPath: "../flyers/sonomoro.png",
    details: "石蹴り遊びの主催する、不定期イベント第一弾です。 \r\r 出演：石蹴り遊び / 澁谷浩次 / 零進法 accoustic set / 狩生健志 / 石原碧",
  },
  {
    datetime: "2026-05-14T19:00:00",
    title: "Love Love Love @東高円寺UFO CLUB",
    ticket: "ADV ¥2,500 / DOOR ¥3,000",
    flyerPath: "../flyers/lovelovelove.jpg",
    details: "呼ばれたので出ます。20:30以降出演する予定です。 \r\r 出演：石蹴り遊び / ゴサローズ / SANTONIC そのほか計5組",
  },
];
