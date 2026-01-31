export type Schedule = {
  datetime: string;
  title: string;
  ticket: string;
  flyerPath?: string;
  details?: string;
  link?: string;
};

export const schedules: Schedule[] = [
  {
    datetime: "2026-02-14T19:00:00+09:00",
    title: "テスト（仮）",
    ticket: "¥2,500 + 1D",
    flyerPath: "/rayuela-test.jpg",
    details: "出演：石蹴り遊び / ...\n会場：...\n開場/開演：...",
    link: "https://example.com/event",
  },
  {
    datetime: "2026-03-01T18:30:00+09:00",
    title: "テスト2",
    ticket: "ADV ¥2,000 / DOOR ¥2,500",
  },
];
