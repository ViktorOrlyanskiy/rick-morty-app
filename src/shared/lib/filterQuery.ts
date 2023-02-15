import { ParsedUrlQuery } from "querystring";

/**
 * Фильтрует query параметры из строки запроса
 * @param query
 * @param field
 * @returns
 */

export function filterQuery(
    query: ParsedUrlQuery,
    field: string
): ParsedUrlQuery {
    return Object.keys(query)
        .filter((key) => key !== field)
        .reduce((result, key) => ({ ...result, [key]: query[key] }), {});
}
