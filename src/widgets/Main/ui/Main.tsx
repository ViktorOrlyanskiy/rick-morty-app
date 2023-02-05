import styled from "@emotion/styled";
import { FC, ReactElement } from "react";
import { ContainerPage } from "@/shared/ui/ContainerPage";

const StMain = styled.main`
    padding-top: 150px;
    padding-bottom: 50px;
`;

interface Props {
    children: ReactElement;
}

export const Main: FC<Props> = ({ children }) => {
    return (
        <StMain>
            <ContainerPage>{children}</ContainerPage>
        </StMain>
    );
};
