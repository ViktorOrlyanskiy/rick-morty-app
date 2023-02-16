import { Box, Divider, Typography } from "@mui/material";
import { MuiRadioButton } from "@/shared/ui/MuiRadioButton";
import { useChangeFilter } from "../model/hooks/useChangeFilter";

interface StatusFilterProps {}

const statuses = [
    { value: "alive", label: "alive" },
    { value: "dead", label: "dead" },
    { value: "unknown", label: "unknown" },
];

export const StatusFilter: React.FC<StatusFilterProps> = () => {
    const [status, changeStatus] = useChangeFilter("status");

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
