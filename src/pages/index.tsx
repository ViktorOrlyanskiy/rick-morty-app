import { Box, Card, Grid } from "@mui/material";
import { HeadTag } from "@/widgets/Head/HeadTag";
import { FetchCharacters } from "@/features/fetchCharacters";
import { CharacterSchema } from "@/entities/Character";
import {
    client,
    GET_ALL_CHARACTERS,
    FILTER_CHARACTERS,
    filterCharacters,
    getAllCharacters,
} from "@/shared/api/apolloClient";
import { GetServerSidePropsContext } from "next";

interface CharactersProps {
    characters: CharacterSchema[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { name } = context?.query;

    let response: any;

    if (name) {
        response = await filterCharacters(name);
    } else {
        response = await getAllCharacters(1);
    }

    return {
        props: {
            characters: response?.data?.characters?.results as CharacterSchema,
        },
    };
}

const Characters: React.FC<CharactersProps> = ({ characters }) => {
    return (
        <>
            <HeadTag title="Characters" desc="Characters page" />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card component="section" variant="outlined">
                        сайдбар
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <FetchCharacters characters={characters} />
                </Grid>
            </Grid>
        </>
    );
};

export default Characters;
