import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { MuiRadioButton } from "@/shared/ui/MuiRadioButton";

interface StatusFilterProps {}

const statuses = [
    { value: "alive", label: "alive" },
    { value: "dead", label: "dead" },
    { value: "unknown", label: "unknown" },
];

export const StatusFilter: React.FC<StatusFilterProps> = (props) => {
    const {} = props;

    const [status, setStatus] = useState<string>("");

    const changeStatus = (status: string) => {
        setStatus(status);
    };

    return (
        <>
            <Box pl={1}>
                <Typography fontSize={18} fontWeight={700} my={0.5}>
                    Status
                </Typography>
                <MuiRadioButton
                    selected={status}
                    onChange={changeStatus}
                    options={statuses}
                />
            </Box>
            <Divider />
        </>
    );
};
