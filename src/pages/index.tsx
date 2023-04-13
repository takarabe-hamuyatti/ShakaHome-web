import {Screen} from "@/pages/Screen";
import styled from "@emotion/styled";
import React from "react";

const ScreenContainer = styled.main`
  width: 100%;
  margin: auto;
  background: skyblue;
`;

export default function Home() {
    return (
        <ScreenContainer>
            <Screen/>
        </ScreenContainer>
    )
}
