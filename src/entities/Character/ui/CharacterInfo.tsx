import { memo } from "react";
import Image from "next/image";
import { Grid, Card, Typography } from "@mui/material";
import { CharacterSchema } from "../model/types/characterSchema";
import { Field } from "./Field";
import { Status } from "./Status";

interface CharacterInfoProps extends CharacterSchema {}

export const CharacterInfo: React.FC<CharacterInfoProps> = memo((props) => {
    const { name, status, species, type, gender, image, origin, location } =
        props;

    return (
        <Card>
            <Grid container>
                <Image
                    priority
                    src={image}
                    alt={name}
                    width={350}
                    height={350}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
                <Grid
                    item
                    p={2}
                    pl={4}
                    flexGrow={1}
                    sx={{ position: "relative" }}
                >
                    <Status variant="info" status={status} />
                    <Typography
                        component="h1"
                        fontSize={36}
                        mb={1}
                        fontWeight="bold"
                    >
                        {name}
                    </Typography>
                    <Typography fontSize={20}>
                        <Field label="Species" value={species} />
                    </Typography>
                    <Typography fontSize={20}>
                        <Field label="Type" value={type} />
                    </Typography>
                    <Typography fontSize={20}>
                        <Field label="Gender" value={gender} />
                    </Typography>
                    <Typography fontSize={20}>
                        <Field label="Origin" value={origin?.name} />
                    </Typography>
                    <Typography fontSize={20}>
                        <Field label="Last Location" value={location?.name} />
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
});
