import { CollectionCardType } from "@/types"
import clsx from "clsx"

export const CollectionCard = ({bg, title}: CollectionCardType) => {
    return (
        <div className={clsx(`bg-[url(${bg})] p-8`)}>
            <p>{title}</p>
        </div>
    )
}