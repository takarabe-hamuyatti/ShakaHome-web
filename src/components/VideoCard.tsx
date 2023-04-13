import {FC} from "react";
import Image from "next/image";

type Props = {
    imageUrl : string,
    title: string

}
export const VideoCard: FC<Props> = ({
    imageUrl,
    title
}) => {
    return(
        <button>
            <Image src={imageUrl} alt={"釈迦さんの過去の動画だよ"} width={500} height={250}/>
            <p>{title}</p>
        </button>
    )
}