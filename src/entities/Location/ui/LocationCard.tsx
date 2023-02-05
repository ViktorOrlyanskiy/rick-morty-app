import { Box, Card, CardActionArea, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { LocationSchema } from "@/entities/Location";

interface LocationCardProps {
    location: LocationSchema;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
    const { id, name, type } = location;
    const router = useRouter();

    const onClickCard = useCallback(
        () => router.push(`/locations/${id}`),
        [id, router]
    );

    return (
        <Grid item>
            <Card variant="outlined">
                <CardActionArea onClick={onClickCard}>
                    <Box p={2}>
                        <Typography fontSize={28}>
                            {id}. {name} - {type}
                        </Typography>
                    </Box>
                </CardActionArea>
            </Card>
        </Grid>
    );
};
