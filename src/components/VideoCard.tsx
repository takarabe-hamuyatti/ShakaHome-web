import {FC} from "react";
import Image from "next/image";
import styled from "@emotion/styled";

type Props = {
    imageUrl: string,
    title: string,
    onClick: () => void
}

const VideoCardContainer = styled.button`
  padding: 10px;
`;


export const VideoCard: FC<Props> = ({
                                         imageUrl,
                                         title,
                                         onClick
                                     }) => {
    return (
        <VideoCardContainer onClick={onClick}>
            <Image src={imageUrl} alt={"釈迦さんの過去の動画だよ"} width={500} height={250}/>
            <p>{title}</p>
        </VideoCardContainer>
    )
}