import { Card, Box, Typography } from "@mui/material";
import { memo } from "react";
import { Badge } from "@/shared/ui/Badge";

interface EpisodeInfoProps {
    name: string;
    air_date: string;
    count: number;
}

export const EpisodeInfo: React.FC<EpisodeInfoProps> = memo((props) => {
    const { name, air_date, count } = props;
    return (
        <Card>
            <Box position="relative" p={2}>
                <Typography component="h1" fontSize={48}>
                    Episode: <span>{name}</span>
                </Typography>
                <Typography fontSize={28}>Air Data: {air_date}</Typography>
                <Badge>
                    <Typography fontSize={24} fontWeight="bold">
                        Characters: {count}
                    </Typography>
                </Badge>
            </Box>
        </Card>
    );
});
