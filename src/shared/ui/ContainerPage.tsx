import { FC } from "react";
import { Container } from "@mui/material";
import styled from "@emotion/styled";

const StContainer = styled(Container)`
    max-width: 1180px;
    width: 100%;
    height: 100%;
`;

interface Props {
    children: React.ReactElement;
}

export const ContainerPage: FC<Props> = (props) => <StContainer {...props} />;
