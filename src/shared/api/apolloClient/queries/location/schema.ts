import { gql } from "@apollo/client";
import { USER_FOR_CHARACTER_PAGE } from "../character/schema";

export const GET_ALL_LOCATIONS = gql`
    query getAllLocations($page: Int!) {
        locations(page: $page) {
            info {
                count
                next
                prev
                pages
            }
            results {
                id
                name
                type
            }
        }
    }
`;

export const GET_LOCATION_BY_ID = gql`
    ${USER_FOR_CHARACTER_PAGE}
    query getLocationById($id: ID!) {
        location(id: $id) {
            id
            name
            type
            dimension
            residents {
                ...UserForCharactersPage
            }
            created
        }
    }
`;
