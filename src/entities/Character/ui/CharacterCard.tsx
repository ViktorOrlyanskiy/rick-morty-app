import { memo, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Grid, Card, Typography, CardActionArea } from "@mui/material";
import { CharacterSchema } from "../model/types/characterSchema";
import { Status } from "./Status";

interface CharacterCardProps extends CharacterSchema {}

export const CharacterCard: React.FC<CharacterCardProps> = memo((props) => {
    const { id, name, status, gender, image, location } = props;
    const router = useRouter();

    const onClickCard = useCallback(() => {
        router.push(`/characters/${id}`);
    }, [id, router]);

    return (
        <Grid item xs={3}>
            <Card sx={{ height: "100%" }}>
                <CardActionArea
                    onClick={onClickCard}
                    sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                        height: "100%",
                    }}
                >
                    <Status variant="card" status={status} />
                    <Image
                        priority
                        src={image}
                        alt={name}
                        width={300}
                        height={300}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                        }}
                    />
                    <Grid item flexGrow={1} p={1}>
                        <Typography
                            component="h3"
                            fontSize={18}
                            fontWeight="bold"
                        >
                            {name}
                        </Typography>
                        <Typography fontSize={14}>Gender: {gender}</Typography>
                        <Typography fontSize={14}>
                            Last Location: {location?.name}
                        </Typography>
                    </Grid>
                </CardActionArea>
            </Card>
        </Grid>
    );
});
