import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export interface MenuItemsType {
  id: number;
  link: string;
  title: string;
}

export interface CollectionCardType {
    bg: string;
    title: string;
}
export interface CollectionItemsType extends CollectionCardType {
    id: number;
}