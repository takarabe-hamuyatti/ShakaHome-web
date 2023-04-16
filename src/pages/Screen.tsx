import {FC, useCallback, useState} from "react";
import {PastVideoList} from "@/components/PastVideoList";
import styled from "@emotion/styled";


const ScreenContainer = styled.div`
  margin: auto;
  flex-wrap: wrap;
`;


const CounterContainer = styled.p`
  margin: auto;
  text-align: center;
  font-size: 200px;
`;

export const Screen: FC = () => {
    const [value, setValue] = useState(0);

    if (value == 10) alert("やったね！！")


    const handleClick = useCallback(() => {
        setValue(value + 1)
    }, [value])

    return (
        <>
            <CounterContainer>{value}</CounterContainer>
            <ScreenContainer>
                <PastVideoList onClick={handleClick}/>
            </ScreenContainer>
        </>
    )
}
