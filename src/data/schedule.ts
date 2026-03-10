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
    datetime: "2026-05-24T18:30:00+09:00",
    title: "その他もろもろの側から",
    ticket: "ADV ¥2,000 / DOOR ¥2,500",
  },
];
