import styled from "@emotion/styled";
import { Pagination } from "@mui/material";
import { ChangeEvent, FC } from "react";

const StPagination = styled(Pagination)`
    ul {
        justify-content: center;
    }
`;

interface Props {
    page: number;
    pages: number;
    changePagination: (e: ChangeEvent<unknown>, page: number) => void;
}

export const MuiPagination: FC<Props> = (props) => {
    const { page, pages, changePagination } = props;

    if (!page || !pages || pages < 2) {
        return null;
    }

    return (
        <StPagination
            count={pages}
            page={page}
            onChange={changePagination}
            variant="text"
            size="large"
            shape="circular"
            sx={{ width: "100%" }}
        />
    );
};
