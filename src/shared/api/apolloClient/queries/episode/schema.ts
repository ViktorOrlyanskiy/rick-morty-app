import { gql } from "@apollo/client";
import { USER_FOR_CHARACTER_PAGE } from "../character/schema";

export const GET_ALL_EPISODES = gql`
    query getAllEpisodes($page: Int!) {
        episodes(page: $page) {
            info {
                count
                next
                prev
                pages
            }
            results {
                id
                name
                air_date
            }
        }
    }
`;

export const GET_EPISODE_BY_ID = gql`
    ${USER_FOR_CHARACTER_PAGE}
    query getEpisodeById($id: ID!) {
        episode(id: $id) {
            id
            name
            air_date
            episode
            characters {
                ...UserForCharactersPage
            }
        }
    }
`;
