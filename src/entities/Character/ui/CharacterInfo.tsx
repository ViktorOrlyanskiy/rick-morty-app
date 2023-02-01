import { memo } from "react";
import Image from "next/image";
import { Grid, Card, Typography } from "@mui/material";
import { CharacterSchema } from "../model/types/characterSchema";
import { Field } from "./Field";
import { Status } from "./Status";
import { useRouter } from "next/router";

interface CharacterInfoProps extends CharacterSchema {}

export const CharacterInfo: React.FC<CharacterInfoProps> = memo((props) => {
    console.log(props);
    const { name, status, species, type, gender, image, origin, location } =
        props;
    const router = useRouter();

    const onClickOrigin = () => {
        if (origin.id) {
            router.push("/locations/" + origin.id);
        }
    };

    const onClickLocation = () => {
        if (location.id) {
            router.push("/locations/" + location.id);
        }
    };

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
                    <Typography fontSize={20} mb={0.5}>
                        <Field label="Species" value={species} />
                    </Typography>
                    <Typography fontSize={20} mb={0.5}>
                        <Field label="Type" value={type} />
                    </Typography>
                    <Typography fontSize={20} mb={0.5}>
                        <Field label="Gender" value={gender} />
                    </Typography>
                    <Typography fontSize={20} mb={0.5}>
                        <Field
                            type="link"
                            label="Origin"
                            value={origin?.name}
                            onClick={onClickOrigin}
                        />
                    </Typography>
                    <Typography fontSize={20} mb={0.5}>
                        <Field
                            type="link"
                            label="Last Location"
                            value={location?.name}
                            onClick={onClickLocation}
                        />
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
});
