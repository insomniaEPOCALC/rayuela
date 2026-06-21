export type MicroCMSImage = {
  url: string;
  height: number;
  width: number;
};

export type News = {
  datetime: string;
  title: string;
  img?: MicroCMSImage;
  details?: string;
  link?: string;
};
