import { Card, Box, Typography } from "@mui/material";
import { memo } from "react";
import { Count } from "./Count";

interface LocationInfoProps {
    name: string;
    type: string;
    dimension: string;
    count: number;
}

export const LocationInfo: React.FC<LocationInfoProps> = memo((props) => {
    const { name, type, dimension, count } = props;
    return (
        <Card>
            <Box position="relative" p={2}>
                <Typography component="h1" fontSize={48}>
                    Location: <span>{name}</span>
                </Typography>
                <Typography fontSize={28}>Type: {type}</Typography>
                <Typography fontSize={28}>Dimension: {dimension}</Typography>
                <Count>
                    <Typography fontSize={24} fontWeight="bold">
                        Characters: {count}
                    </Typography>
                </Count>
            </Box>
        </Card>
    );
});
