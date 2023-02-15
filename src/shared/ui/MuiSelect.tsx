import { Box, TextField, MenuItem } from "@mui/material";

interface Props {
    label: string;
    selected: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
}

export const MuiSelect: React.FC<Props> = (props) => {
    const { label, selected, onChange, options } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };
    return (
        <Box width="100%">
            <TextField
                select
                fullWidth
                size="small"
                label={label}
                value={selected}
                onChange={handleChange}
            >
                {options.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
};
