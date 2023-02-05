import { Card, Grid } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { HeadTag } from "@/widgets/Head";
import { FetchCharacters } from "@/features/fetchCharacters";
import { CharacterSchema } from "@/entities/Character";
import { filterCharacters, getAllCharacters } from "@/shared/api/apolloClient";

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
