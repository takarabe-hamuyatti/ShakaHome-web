import {FC} from "react";
import Image from "next/image";

type Props = {
    imageUrl : string,
    title: string,
    id: Number

}
export const VideoCard: FC<Props> = ({
    imageUrl,
    title,
    id
}) => {
    return(
        <button>
            <Image src={imageUrl} alt={"釈迦さんの過去の動画だよ"}/>
            <p>{title}</p>
        </button>
    )
}