import {Screen} from "@/pages/Screen";
import styled from "@emotion/styled";
import React from "react";

const ScreenContainer = styled.div`
  width: 100%;
  margin: auto;
`;

export default function Home() {
    return (
        <main>
            <ScreenContainer>
                <Screen/>
            </ScreenContainer>
        </main>
    )
}
