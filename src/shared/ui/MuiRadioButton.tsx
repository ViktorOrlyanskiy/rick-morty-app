import {
    Box,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
} from "@mui/material";

interface Props {
    selected: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
}

export const MuiRadioButton: React.FC<Props> = (props) => {
    const { selected, onChange, options } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };
    return (
        <Box>
            <FormControl>
                <RadioGroup value={selected} onChange={handleChange}>
                    {options.map(({ value, label }) => (
                        <FormControlLabel
                            key={value}
                            value={value}
                            control={<Radio size="small" />}
                            label={label}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Box>
    );
};
