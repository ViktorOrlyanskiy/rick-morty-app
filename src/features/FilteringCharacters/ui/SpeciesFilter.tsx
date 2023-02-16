import { Box, Divider, Typography } from "@mui/material";
import { MuiSelect } from "@/shared/ui/MuiSelect";
import { useChangeFilter } from "../model/hooks/useChangeFilter";

interface SpeciesFilterProps {}

const specieses = [
    { value: "human", label: "human" },
    { value: "alien", label: "alien" },
    { value: "humanoid", label: "humanoid" },
    { value: "poopybutthole", label: "poopybutthole" },
    { value: "mythological", label: "mythological" },
    { value: "animal", label: "animal" },
    { value: "desease", label: "desease" },
    { value: "robot", label: "robot" },
    { value: "cronenberg", label: "cronenberg" },
    { value: "planet", label: "planet" },
    { value: "unknown", label: "unknown" },
];

export const SpeciesFilter: React.FC<SpeciesFilterProps> = () => {
    const [species, changeSpecies] = useChangeFilter("species");

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
