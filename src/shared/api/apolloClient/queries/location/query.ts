import { client } from "../../apolloClient";
import { GET_ALL_LOCATIONS, GET_LOCATION_BY_ID } from "./schema";

export const fetchAllLocatios = async (page: number) => {
    return await client.query({
        query: GET_ALL_LOCATIONS,
        variables: { page },
    });
};
export const fetchLocationById = async (id: string | string[] = "1") => {
    return await client.query({
        query: GET_LOCATION_BY_ID,
        variables: { id },
    });
};
