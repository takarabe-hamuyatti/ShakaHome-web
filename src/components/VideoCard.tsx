import {FC} from "react";
import Image from "next/image";
import styled from "@emotion/styled";

type Props = {
    imageUrl : string,
    title: string
}

const VideoCardContainer = styled.button`
    padding : 10px;
`;


export const VideoCard: FC<Props> = ({
    imageUrl,
    title
}) => {
    return(
        <VideoCardContainer>
            <Image src={imageUrl} alt={"釈迦さんの過去の動画だよ"} width={500} height={250}/>
            <p>{title}</p>
        </VideoCardContainer>
    )
}