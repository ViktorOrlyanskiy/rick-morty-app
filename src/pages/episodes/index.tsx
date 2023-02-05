import { EpisodeCard, EpisodeSchema } from "@/entities/Episode";
import { fetchAllEpisodes } from "@/shared/api/apolloClient";
import { HeadTag } from "@/widgets/Head/HeadTag";
import { Grid } from "@mui/material";

interface EpisodesProps {
    episodes: EpisodeSchema[];
}

export async function getServerSideProps() {
    const response = await fetchAllEpisodes(1);

    return {
        props: {
            episodes: response?.data?.episodes?.results as EpisodeSchema,
        },
    };
}

const Episodes: React.FC<EpisodesProps> = ({ episodes }) => {
    return (
        <>
            <HeadTag title="Episodes" desc="Episodes page" />
            <Grid container spacing={2} flexDirection="column">
                {episodes.map((episode) => (
                    <EpisodeCard key={episode.id} episode={episode} />
                ))}
            </Grid>
        </>
    );
};

export default Episodes;