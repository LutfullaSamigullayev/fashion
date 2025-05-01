import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export interface MenuItemsType {
  id: number;
  link: string;
  title: string;
}

export interface CatalogCardType {
    bg: string;
    title: string;
}
export interface CatalogTopItemsType extends CatalogCardType {
    id: number;
}