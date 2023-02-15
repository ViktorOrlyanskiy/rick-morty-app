import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { MuiSelect } from "@/shared/ui/MuiSelect";

interface SpeciesFilterProps {}

const specieses = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
    { value: "genderless", label: "genderless" },
    { value: "unknown", label: "unknown" },
];

export const SpeciesFilter: React.FC<SpeciesFilterProps> = (props) => {
    const {} = props;

    const [species, setSpecies] = useState<string>("");

    const changeSpecies = (gender: string) => {
        setSpecies(gender);
    };

    return (
        <>
            <Box px={1} pb={1}>
                <Typography fontSize={18} fontWeight={700} mt={0.5} mb={2}>
                    Species
                </Typography>
                <MuiSelect
                    label="select a species"
                    options={specieses}
                    selected={species}
                    onChange={changeSpecies}
                />
            </Box>
            <Divider />
        </>
    );
};
