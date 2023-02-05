import { client } from "../../apolloClient";
import { GET_ALL_EPISODES, GET_EPISODE_BY_ID } from "./schema";

export const fetchAllEpisodes = async (page: number) => {
    return await client.query({
        query: GET_ALL_EPISODES,
        variables: { page },
    });
};

export const fetchEpisodeById = async (id: string | string[] | undefined) => {
    return await client.query({
        query: GET_EPISODE_BY_ID,
        variables: { id },
    });
};
