import { Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo } from "react";
import { getRouteLocation } from "@/shared/consts/routes";
import { CharacterSchema } from "../model/types/characterSchema";
import { Field } from "./Field";
import { Status } from "./Status";

interface CharacterInfoProps extends CharacterSchema {}

export const CharacterInfo: React.FC<CharacterInfoProps> = memo((props) => {
    const { name, status, species, type, gender, image, origin, location } =
        props;
    const router = useRouter();

    const onClickOrigin = () => {
        if (origin.id) {
            router.push(getRouteLocation(origin.id));
        }
    };

    const onClickLocation = () => {
        if (location.id) {
            router.push(getRouteLocation(location.id));
        }
    };

    return (
        <Paper elevation={4}>
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
                        mb={1}
                        component="h1"
                        fontSize={36}
                        fontWeight="bold"
                    >
                        {name}
                    </Typography>
                    <Typography fontSize={20} gutterBottom>
                        <Field label="Species" value={species} />
                    </Typography>
                    <Typography fontSize={20} gutterBottom>
                        <Field label="Type" value={type} />
                    </Typography>
                    <Typography fontSize={20} gutterBottom>
                        <Field label="Gender" value={gender} />
                    </Typography>
                    <Typography fontSize={20} gutterBottom>
                        <Field
                            type="link"
                            label="Origin"
                            value={origin?.name}
                            onClick={onClickOrigin}
                        />
                    </Typography>
                    <Typography fontSize={20} gutterBottom>
                        <Field
                            type="link"
                            label="Last Location"
                            value={location?.name}
                            onClick={onClickLocation}
                        />
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
});
