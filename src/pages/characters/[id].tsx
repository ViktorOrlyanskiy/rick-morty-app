import { Box, Button } from "@mui/material";
import { HeadTag } from "@/widgets/Head/HeadTag";
import { CharacterInfo, CharacterSchema } from "@/entities/Character";
import type { GetServerSidePropsContext } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import {
    client,
    fetchCharacterById,
    GET_CHARACTER_BY_ID,
} from "@/shared/api/apolloClient";

interface CharacterProps {
    character: CharacterSchema;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const id = context?.params?.id;

    const { data } = await fetchCharacterById(id);

    return {
        props: {
            character: data.character as CharacterSchema,
        },
    };
}

const CharacterPage: React.FC<CharacterProps> = ({ character }) => {
    const { name } = character;
    const router = useRouter();

    const onClickBack = useCallback(() => {
        router.push("/characters");
    }, [router]);

    return (
        <>
            <HeadTag title={name} desc={`${name} page`} />
            <Box>
                <Box mb={5}>
                    <Button variant="outlined" onClick={onClickBack}>
                        Go back
                    </Button>
                </Box>

                <CharacterInfo {...character} />
            </Box>
        </>
    );
};

export default CharacterPage;
