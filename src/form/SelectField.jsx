import React, { useState } from "react";
import {
    FormControl,
    MenuItem,
    Select,
    InputLabel
} from "@mui/material";
//TODO: ben style
export default function SelectField({
    label,
    value,
    setValue,
    choices = [],
    fullWidth = true,
    defaultValue = "",
    ...rest
}) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event) => setValue(event.target.value);

    return (
        <FormControl fullWidth={fullWidth}>
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
                labelId="select-label"
                value={value}
                defaultValue={defaultValue}
                label={label}
                onChange={handleChange}
                open={open}
                onOpen={handleOpen}
                onClose={handleClose}
                {...rest}
            >
                {choices.map(([val, label], i) => (
                    <MenuItem value={val} key={i}>{label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
