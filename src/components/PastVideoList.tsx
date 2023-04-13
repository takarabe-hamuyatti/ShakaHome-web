import {FC} from "react";
import {VideoCard} from "@/components/VideoCard";
import styled from "@emotion/styled";

const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px;
`;


type Props = {
    onClick: () => void
}

export const PastVideoList: FC<Props> = (props, context) => {
    return (
        <VideoListContainer>
            {Array(15)
                .fill(0)
                .map(() => dummyPastVideo)
                .map((info, index) => (
                    <VideoCard key={index} imageUrl={info.imageUrl} title={info.title} onClick={props.onClick}/>
                ))}
        </VideoListContainer>
    );
};

const dummyPastVideo = {
    imageUrl: "/shakahands.jpeg",
    title: "しゃかさんhandsだよ"
};