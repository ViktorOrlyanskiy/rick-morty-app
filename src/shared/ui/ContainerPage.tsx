import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { FC } from "react";

const StContainer = styled(Container)`
    max-width: 1180px;
    width: 100%;
    height: 100%;
`;

interface Props {
    children: React.ReactElement;
}

export const ContainerPage: FC<Props> = (props) => <StContainer {...props} />;
