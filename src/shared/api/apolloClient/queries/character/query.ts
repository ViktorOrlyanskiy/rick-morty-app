import { client } from "../../apolloClient";
import {
    FILTER_CHARACTERS,
    GET_ALL_CHARACTERS,
    GET_CHARACTERS_BY_IDS,
    GET_CHARACTER_BY_ID,
} from "./schema";

export const filterCharacters = async (rest: any) => {
    return await client.query({
        query: FILTER_CHARACTERS,
        variables: { filter: { ...rest } },
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

export const fetchCharactersByIds = async (ids: number[]) => {
    return await client.query({
        query: GET_CHARACTERS_BY_IDS,
        variables: { ids },
    });
};
