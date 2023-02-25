import {
    Grid,
    Typography,
    Paper,
    Card,
    CardActionArea,
    Stack,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo } from "react";
import { getRouteLocation } from "@/shared/consts/routes";
import { CharacterSchema } from "../model/types/characterSchema";
import { Field } from "./Field";
import { Status } from "./Status";

interface CharacterInfoProps extends CharacterSchema {
    variant?: "small" | "medium";
}

export const CharacterInfo: React.FC<CharacterInfoProps> = memo((props) => {
    const {
        id,
        name,
        status,
        species,
        type,
        gender,
        image,
        origin,
        location,
        variant,
    } = props;
    const router = useRouter();
    const smallCard = variant === "small";

    const onClickCard = () => {
        router.push(`/characters/${id}`);
    };

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

    if (smallCard) {
        return (
            <Grid item xs={6}>
                <Card elevation={4}>
                    <CardActionArea onClick={onClickCard}>
                        <Stack direction="row">
                            <Image
                                priority
                                src={image}
                                alt={name}
                                width={170}
                                height={170}
                                style={{
                                    maxWidth: "100%",
                                    minWidth: 170,
                                    height: "auto",
                                }}
                            />
                            <Stack
                                p={1}
                                pl={2}
                                flexGrow={1}
                                sx={{ position: "relative" }}
                            >
                                <Status variant="card" status={status} />
                                <Typography
                                    component="h1"
                                    fontSize={20}
                                    fontWeight="bold"
                                >
                                    {name}
                                </Typography>
                                <Typography component="div" fontSize={16}>
                                    <Field label="Species" value={species} />
                                </Typography>

                                <Typography component="div" fontSize={16}>
                                    <Field
                                        type="link"
                                        label="Origin"
                                        value={origin?.name}
                                        onClick={onClickOrigin}
                                    />
                                </Typography>
                                <Typography component="div" fontSize={16}>
                                    <Field
                                        type="link"
                                        label="Last Location"
                                        value={location?.name}
                                        onClick={onClickLocation}
                                    />
                                </Typography>
                            </Stack>
                        </Stack>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    }

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
                    <Typography component="div" fontSize={20} gutterBottom>
                        <Field label="Species" value={species} />
                    </Typography>
                    <Typography component="div" fontSize={20} gutterBottom>
                        <Field label="Type" value={type} />
                    </Typography>
                    <Typography component="div" fontSize={20} gutterBottom>
                        <Field label="Gender" value={gender} />
                    </Typography>
                    <Typography component="div" fontSize={20} gutterBottom>
                        <Field
                            type="link"
                            label="Origin"
                            value={origin?.name}
                            onClick={onClickOrigin}
                        />
                    </Typography>
                    <Typography component="div" fontSize={20} gutterBottom>
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
