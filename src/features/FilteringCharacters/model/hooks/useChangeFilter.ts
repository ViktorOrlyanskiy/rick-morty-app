import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { filterQuery } from "@/shared/lib/filterQuery";

/**
 * Инкопсулирует в себе логику по работе с адресной строкой
 * @param filterName
 * @returns кортеж [filter, changeFilter]
 */

export function useChangeFilter(
    filterName: string
): [string, (filter: string) => void] {
    const router = useRouter();
    const filterFromQuery = (router?.query?.[filterName] || "") as string;
    const [filter, setFilter] = useState(filterFromQuery);

    const changeFilter = (filter: string) => {
        setFilter(filter);
        router.push({
            pathname: router.pathname,
            query: {
                ...filterQuery(router.query, filterName),
                [filterName]: filter,
            },
        });
    };

    useEffect(() => {
        if (!filterFromQuery) setFilter(filterFromQuery);
    }, [filterFromQuery]);

    return [filter, changeFilter];
}
