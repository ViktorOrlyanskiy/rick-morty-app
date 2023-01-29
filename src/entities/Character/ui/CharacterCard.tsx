import { memo, useCallback } from "react";
import { Grid, Card, Typography, CardActionArea } from "@mui/material";
import Image from "next/image";
import { CharacterSchema } from "../model/types/characterSchema";

interface CharacterCardProps extends CharacterSchema {}

export const CharacterCard: React.FC<CharacterCardProps> = memo((props) => {
    const { name, gender, image, location } = props;

    const onClickCard = useCallback(() => {
        console.log("click");
    }, []);

    return (
        <Grid item xs={3}>
            <Card sx={{ height: "100%" }}>
                <CardActionArea
                    onClick={onClickCard}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                        height: "100%",
                    }}
                >
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
