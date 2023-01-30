import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
    query getAllCharacters($page: Int!) {
        characters(page: $page) {
            info {
                count
            }
            results {
                id
                name
                image
                status
                gender
                location {
                    name
                }
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
