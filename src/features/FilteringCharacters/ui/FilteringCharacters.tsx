import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { getRouteCharacters } from "@/shared/consts/routes";
import { GenderFilter } from "./GenderFilter";
import { SpeciesFilter } from "./SpeciesFilter";
import { StatusFilter } from "./StatusFilter";

interface FilteringCharactersProps {}

export const FilteringCharacters: React.FC<FilteringCharactersProps> = (
    props
) => {
    const {} = props;
    const router = useRouter();

    const onClearFilters = () => {
        if (router.query) router.push(getRouteCharacters());
    };

    return (
        <Paper component="section" sx={{ padding: "5px 0 0" }}>
            <StatusFilter />
            <SpeciesFilter />
            <GenderFilter />
            <Box pt={2} pb={0.5} px={0.5}>
                <Button
                    variant="contained"
                    sx={{ width: "100%" }}
                    onClick={onClearFilters}
                >
                    Clear filters
                </Button>
            </Box>
        </Paper>
    );
};
