import {FC} from "react";
import {VideoCard} from "@/components/VideoCard";
import styled from "@emotion/styled";

const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PastVideoList: FC = () => {
    return (
        <VideoListContainer>
            {Array(9)
                .fill(0)
                .map(() => dummyPastVideo)
                .map((info, index) => (
                    <VideoCard key={index} imageUrl={info.imageUrl} title={info.title} />
                ))}
        </VideoListContainer>
    );
};

const dummyPastVideo = {
    imageUrl: "/shakahands.jpeg",
    title: "しゃかhandsだよ"
};