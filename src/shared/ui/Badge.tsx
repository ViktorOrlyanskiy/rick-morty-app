import styled from "@emotion/styled";
import { memo, ReactNode } from "react";

const StBadge = styled.div`
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

interface BadgeProps {
    children: ReactNode;
}

export const Badge: React.FC<BadgeProps> = memo(({ children }) => {
    return <StBadge>{children}</StBadge>;
});
