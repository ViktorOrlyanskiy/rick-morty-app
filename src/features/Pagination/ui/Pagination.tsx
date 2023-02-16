import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { filterQuery } from "@/shared/lib/filterQuery";
import { MuiPagination } from "@/shared/ui/MuiPagination";

interface Props {
    page: number;
    pages: number;
}

export const Pagination: React.FC<Props> = (props) => {
    const { pages, page } = props;
    const router = useRouter();

    const changePagination = (e: ChangeEvent<unknown>, page: number) => {
        const newPage = page !== 1 ? { page } : null;

        router.push({
            pathname: router.pathname,
            query: { ...filterQuery(router.query, "page"), ...newPage },
        });
    };

    return (
        <Box mt={5}>
            <MuiPagination
                page={page}
                pages={pages}
                changePagination={changePagination}
            />
        </Box>
    );
};
