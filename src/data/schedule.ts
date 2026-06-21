import type { MicroCMSImage } from "./news";

export type Schedule = {
  datetime: string;
  title: string;
  ticket?: string;
  flyer?: MicroCMSImage;
  details?: string;
  link?: string;
  linkTitle?: string;
  extraLink?: string;
  extraLinkTitle?: string;
};
