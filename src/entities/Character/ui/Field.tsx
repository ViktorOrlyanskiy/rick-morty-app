import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/system";
import { memo } from "react";

const StLabel = styled.span`
    font-weight: bold;
`;

interface StInputProps extends Partial<FieldProps> {
    colorHover?: string;
}

const StInput = styled.span`
    cursor: pointer;

    &:hover {
        color: ${(p: StInputProps) => p.colorHover};
    }
`;
interface FieldProps {
    label: string;
    value: string;
    type?: "link";
    onClick?: () => void;
}

export const Field: React.FC<FieldProps> = memo((props) => {
    const { label, value, type, onClick } = props;
    const theme = useTheme();
    const styleLink = type === "link" ? theme.palette.info.main : undefined;

    return (
        <Stack direction="row" flexWrap="wrap" spacing={0.5}>
            <StLabel>{label}: </StLabel>
            <StInput colorHover={styleLink} onClick={onClick}>
                {value ? value : "unknown"}
            </StInput>
        </Stack>
    );
});
