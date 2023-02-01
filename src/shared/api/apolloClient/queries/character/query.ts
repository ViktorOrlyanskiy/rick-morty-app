import { client } from "../../apolloClient";
import {
    FILTER_CHARACTERS,
    GET_ALL_CHARACTERS,
    GET_CHARACTER_BY_ID,
} from "./schema";

export const filterCharacters = async (name: string | string[]) => {
    return await client.query({
        query: FILTER_CHARACTERS,
        variables: { filter: { name } },
    });
};

export const getAllCharacters = async (page: number) => {
    return await client.query({
        query: GET_ALL_CHARACTERS,
        variables: { page },
    });
};

export const fetchCharacterById = async (id: string | string[] = "1") => {
    return await client.query({
        query: GET_CHARACTER_BY_ID,
        variables: { id },
    });
};
