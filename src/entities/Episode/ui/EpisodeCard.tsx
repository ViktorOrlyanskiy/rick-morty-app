import { Box, Card, CardActionArea, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { memo, useCallback } from "react";
import { EpisodeSchema } from "../model/types/episodeSchema";

interface EpisodeCardProps {
    episode: EpisodeSchema;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = memo(({ episode }) => {
    const { id, name, air_date } = episode;
    const router = useRouter();

    const onClickCard = useCallback(
        () => router.push(`/episodes/${id}`),
        [id, router]
    );

    return (
        <Grid item>
            <Card variant="outlined">
                <CardActionArea onClick={onClickCard}>
                    <Box p={2}>
                        <Typography fontSize={28}>
                            {id}. {name} - {air_date}
                        </Typography>
                    </Box>
                </CardActionArea>
            </Card>
        </Grid>
    );
});
