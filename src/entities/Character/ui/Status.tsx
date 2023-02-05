import styled from "@emotion/styled";
import { memo } from "react";

interface StProps {
    status: string;
    alive?: boolean;
    dead?: boolean;
    card?: boolean;
    info?: boolean;
}

const StStatus = styled.div`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    background: #b3b3b3;
    background: ${(p: StProps) => p.status === "Alive" && "#82db7a"};
    background: ${(p: StProps) => p.status === "Dead" && "#eb5353"};
    line-height: 1.4;

    ${(p: StProps) =>
        p.card &&
        `
        top: 5px;
        right: 5px;
        padding: 2px 5px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: 300;
        
    }`}
    ${(p: StProps) =>
        p.info &&
        `
        top: 10px;
        right: 10px;
        padding: 3px 15px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 700;
        
    }`};
`;

interface StatusProps {
    status: string;
    variant: "card" | "info";
}

export const Status: React.FC<StatusProps> = memo(({ status, variant }) => {
    const isAlive = status === "Alive" ? true : undefined;
    const isDead = status === "Dead" ? true : undefined;
    const isCardVariant = variant === "card" ? true : undefined;
    const isInfoVariant = variant === "info" ? true : undefined;

    return (
        <StStatus
            status={status}
            alive={isAlive}
            dead={isDead}
            card={isCardVariant}
            info={isInfoVariant}
        >
            {status}
        </StStatus>
    );
});
