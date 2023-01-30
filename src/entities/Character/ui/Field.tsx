import styled from "@emotion/styled";
import { memo } from "react";

const StSpan = styled.span`
    font-weight: bold;
`;

interface FieldProps {
    label: string;
    value: string;
}

export const Field: React.FC<FieldProps> = memo((props) => {
    const { label, value } = props;
    return (
        <>
            <StSpan>{label}: </StSpan> {value ? value : "unknown"}
        </>
    );
});
