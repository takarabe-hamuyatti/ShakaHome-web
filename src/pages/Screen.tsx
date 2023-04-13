import {FC} from "react";
import {PastVideoList} from "@/components/PastVideoList";
import styled from "@emotion/styled";


const ScreenContainer = styled.div`
  margin: auto;
  flex-wrap: wrap;
`;
export const Screen: FC = () => {
    return (
        <ScreenContainer>
            <PastVideoList/>
        </ScreenContainer>
    )
}