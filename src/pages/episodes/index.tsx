import { Grid } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { HeadTag } from "@/widgets/Head";
import { Pagination } from "@/features/Pagination";
import { EpisodeCard, EpisodeSchema } from "@/entities/Episode";
import { fetchAllEpisodes, InfoSchema } from "@/shared/api/apolloClient";
import { List } from "@/shared/ui/List";

interface InfoProps extends InfoSchema {
    page: string;
}

interface EpisodesProps {
    episodes: EpisodeSchema[];
    info: InfoProps;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { page } = context?.query;
    const response = await fetchAllEpisodes(Number(page) || 1);

    return {
        props: {
            episodes: response?.data?.episodes?.results as EpisodeSchema,
            info: {
                ...response?.data?.episodes?.info,
                page: page || 1,
            } as InfoProps,
        },
    };
}

const Episodes: React.FC<EpisodesProps> = ({ episodes, info }) => {
    return (
        <>
            <HeadTag title="Episodes" desc="Episodes page" />
            <Grid container spacing={2} flexDirection="column">
                <List
                    data={episodes}
                    renderItem={(data) => <EpisodeCard episode={data} />}
                />
                <Pagination page={Number(info.page)} pages={info.pages} />
            </Grid>
        </>
    );
};

export default Episodes;
