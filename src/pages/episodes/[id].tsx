import { Box } from "@mui/material";
import type { GetServerSidePropsContext } from "next";
import { HeadTag } from "@/widgets/Head";
import { FetchCharacters } from "@/features/fetchCharacters";
import { EpisodeInfo, EpisodeSchema } from "@/entities/Episode";
import { fetchEpisodeById } from "@/shared/api/apolloClient";

interface EpisodeProps {
    episode: EpisodeSchema;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const id = context?.params?.id;

    const { data } = await fetchEpisodeById(id);

    return {
        props: {
            episode: data.episode as EpisodeSchema,
        },
    };
}

const EpisodePage: React.FC<EpisodeProps> = ({ episode }) => {
    const { name, air_date, characters } = episode;

    return (
        <>
            <HeadTag title={name} desc={`${name} page`} />
            <EpisodeInfo
                name={name}
                air_date={air_date}
                count={characters.length}
            />
            <Box mt={6}>
                <FetchCharacters characters={characters} />
            </Box>
        </>
    );
};

export default EpisodePage;
