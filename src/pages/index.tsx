import { Box } from "@mui/material";
import Image from "next/image";
import { HeadTag } from "@/widgets/Head";
import {
    getRandomCharacters,
    ShowsRandomCharacters,
} from "@/features/ShowsRandomCharacters";
import { CharacterSchema } from "@/entities/Character";
import { fetchCharactersByIds } from "@/shared/api/apolloClient";
import MainLogo from "../../public/main-image.png";
interface CharactersProps {
    characters: CharacterSchema[];
}

export async function getServerSideProps() {
    const randomIds = getRandomCharacters();
    const response = await fetchCharactersByIds(randomIds);

    return {
        props: {
            characters: response?.data?.charactersByIds as CharacterSchema[],
        },
    };
}

const Characters: React.FC<CharactersProps> = ({ characters }) => {
    return (
        <>
            <HeadTag title="Rick & Morty" desc="Home page" />
            <Box mb={15}>
                <Image
                    priority
                    src={MainLogo}
                    alt="main-logo"
                    width={1000}
                    height={1000}
                    style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "90%",
                        height: "auto",
                        margin: "0 auto",
                    }}
                />
            </Box>
            <ShowsRandomCharacters characters={characters} />
        </>
    );
};

export default Characters;
