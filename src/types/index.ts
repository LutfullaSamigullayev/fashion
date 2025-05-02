import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export interface MenuItemsType {
  id: number;
  link: string;
  title: string;
}

export interface CollectionCardType {
    imgUrl: string;
    title: string;
}
export interface CollectionItemsType extends CollectionCardType {
    id: number;
}

export interface WearCardType {
  imgUrl: string;
  title: string;
  price: number;
}
export interface NowWearItemsType extends WearCardType {
  id: number;
}

export interface InstagramItemsType {
  id: number;
  bgUrl: string;
}

export interface FooterItemsType {
  id: number;
  title: string;
  link: string;
}
export interface FooterMenuType {
  id?: number;
  title: string;
  data: FooterItemsType[];
}