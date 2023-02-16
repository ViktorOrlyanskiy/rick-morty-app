import { Box, Divider, Typography } from "@mui/material";
import { MuiSelect } from "@/shared/ui/MuiSelect";
import { useChangeFilter } from "../model/hooks/useChangeFilter";

interface GenderFilterProps {}

const genders = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
    { value: "genderless", label: "genderless" },
    { value: "unknown", label: "unknown" },
];

export const GenderFilter: React.FC<GenderFilterProps> = () => {
    const [gender, changeGender] = useChangeFilter("gender");

    return (
        <>
            <Box px={1} pb={1}>
                <Typography fontSize={18} fontWeight={700} mt={0.5} mb={2}>
                    Gender
                </Typography>
                <MuiSelect
                    label="select a gender"
                    options={genders}
                    selected={gender}
                    onChange={changeGender}
                />
            </Box>
            <Divider />
        </>
    );
};
