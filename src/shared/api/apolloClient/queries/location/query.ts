import { client } from "../../apolloClient";
import { GET_LOCATION_BY_ID } from "./schema";

export const fetchLocationById = async (id: string | string[] = "1") => {
    return await client.query({
        query: GET_LOCATION_BY_ID,
        variables: { id },
    });
};
