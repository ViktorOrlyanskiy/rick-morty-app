import { gql } from "@apollo/client";

export const USER_FOR_CHARACTER_PAGE = gql`
    fragment UserForCharactersPage on Character {
        id
        name
        image
        status
        gender
        location {
            name
        }
    }
`;

export const GET_ALL_CHARACTERS = gql`
    ${USER_FOR_CHARACTER_PAGE}
    query getAllCharacters($page: Int!) {
        characters(page: $page) {
            info {
                count
                pages
            }
            results {
                ...UserForCharactersPage
            }
        }
    }
`;

export const FILTER_CHARACTERS = gql`
    ${USER_FOR_CHARACTER_PAGE}
    query filterCharacters($filter: FilterCharacter) {
        characters(filter: $filter) {
            info {
                count
                pages
            }
            results {
                ...UserForCharactersPage
            }
        }
    }
`;

export const GET_CHARACTER_BY_ID = gql`
    query getCharacterById($id: ID!) {
        character(id: $id) {
            name
            status
            species
            type
            gender
            image
            origin {
                id
                name
            }
            location {
                id
                name
            }
        }
    }
`;

export const GET_CHARACTERS_BY_IDS = gql`
    query getCharactersByIds($ids: [ID!]!) {
        charactersByIds(ids: $ids) {
            id
            name
            status
            species
            type
            gender
            image
            origin {
                id
                name
            }
            location {
                id
                name
            }
        }
    }
`;
