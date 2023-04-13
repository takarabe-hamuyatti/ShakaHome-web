import {FC} from "react";
import {VideoCard} from "@/components/VideoCard";

export const PastVideoList: FC = () => {
    return (
        <div>
            {
                Array(9)
                    .fill(0)
                    .map(() => dummyPastVideo)
                    .map((info, index) => (
                            <VideoCard key={index} imageUrl={info.imageUrl} title={info.title}/>
                        )
                    )
            }
        </div>
    )
}

const dummyPastVideo = {
    imageUrl: "/shakahands.jpeg",
    title: "しゃかhandsだよ"
}