import styled from "@emotion/styled";
import { Box, Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { getRouteCharacters } from "@/shared/consts/routes";
import { filterQuery } from "@/shared/lib/filterQuery";

const StPagination = styled(Pagination)`
    ul {
        justify-content: center;
    }
`;

interface Props {
    page: number;
    pages: number;
}

export const CharacterPagination: React.FC<Props> = (props) => {
    const { pages, page } = props;
    const router = useRouter();

    const changePagination = (e: ChangeEvent<unknown>, page: number) => {
        const newPage = page !== 1 ? { page } : null;

        router.push({
            pathname: getRouteCharacters(),
            query: { ...filterQuery(router.query, "page"), ...newPage },
        });
    };

    if (!page || !pages || pages < 2) {
        return null;
    }

    return (
        <Box mt={5}>
            <StPagination
                count={pages}
                page={page}
                onChange={changePagination}
                variant="text"
                size="large"
                shape="circular"
                sx={{ width: "100%" }}
            />
        </Box>
    );
};
