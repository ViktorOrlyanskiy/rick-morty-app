import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent, memo, useState } from "react";
import { getRouteCharacters } from "@/shared/consts/routes";

const StInput = styled(InputBase)`
    width: 100%;
    padding: 5px 15px;
    background-color: #fff;
    border-radius: 50px;
`;

type ChEvent = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
type KeyEvent = KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>;

interface CharacterSearchProps {}

export const CharacterSearch: React.FC<CharacterSearchProps> = memo(() => {
    const router = useRouter();
    const [query, setQuery] = useState(router.query?.name || "");

    const search = () => {
        router.push({
            pathname: getRouteCharacters(),
            query: query ? { name: query } : undefined,
        });
    };

    const onChangeQuery = (e: ChEvent) => {
        setQuery(e.target.value);
    };

    const onKeyDown = (e: KeyEvent) => {
        switch (e.key) {
            case "Enter":
                search();
                break;
        }
    };

    const onBlur = () => {
        search();
    };

    return (
        <Box>
            <StInput
                placeholder="Character search"
                value={query}
                onChange={onChangeQuery}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
            />
        </Box>
    );
});
