import { Card, Grid } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { HeadTag } from "@/widgets/Head";
import { CharacterPagination } from "@/features/CharacterPagination";
import { FetchCharacters } from "@/features/fetchCharacters";
import { FilteringCharacters } from "@/features/FilteringCharacters";
import { CharacterSchema } from "@/entities/Character";
import {
    filterCharacters,
    getAllCharacters,
    InfoSchema,
} from "@/shared/api/apolloClient";

interface InfoProps extends InfoSchema {
    page: string;
}

interface CharactersProps {
    characters: CharacterSchema[];
    info: InfoProps;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { name, page } = context?.query;

    let response: any;

    if (name) {
        response = await filterCharacters(name);
    } else {
        response = await getAllCharacters(Number(page) || 1);
    }

    return {
        props: {
            characters: response?.data?.characters
                ?.results as CharacterSchema[],
            info: {
                ...response?.data?.characters?.info,
                page: page || 1,
            } as InfoProps,
        },
    };
}

const Characters: React.FC<CharactersProps> = ({ characters, info }) => {
    return (
        <>
            <HeadTag title="Characters" desc="Characters page" />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card component="section" variant="outlined">
                        <FilteringCharacters />
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <FetchCharacters characters={characters} />
                    <CharacterPagination
                        page={Number(info.page)}
                        pages={info.pages}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Characters;
