import { Actions } from './../components/header/components/actions';
import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export interface MenuItemsType {
    id: number;
    link: string;
    title: string;
}

export interface ActionsItemsType {
    id: number;
    link: string;
    svg: string;
    title: string;
}
