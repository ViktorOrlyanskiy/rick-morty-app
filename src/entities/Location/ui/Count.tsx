import { memo, ReactNode } from "react";
import styled from "@emotion/styled";

const StCount = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    border-radius: 25px;
    background: #82db7a;
    font-size: 18px;
    font-weight: 700;
`;

interface CountProps {
    children: ReactNode;
}

export const Count: React.FC<CountProps> = memo(({ children }) => {
    return <StCount>{children}</StCount>;
});