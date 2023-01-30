import { Box, Button } from "@mui/material";
import { HeadTag } from "@/widgets/Head/HeadTag";
import { CharacterInfo, CharacterSchema } from "@/entities/Character";
import type { GetServerSidePropsContext } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

interface CharacterProps {
    character: CharacterSchema;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const id = context?.params?.id;

    const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
    );
    const character: CharacterSchema = await response.json();

    return {
        props: {
            character,
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
