import React from "react";
import { TextField, InputAdornment, Box, useTheme } from "@mui/material";

const addThousandSeparator = (value) => {
    const parts = value.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};

export default function CustomInputNumber({
    value,
    setValue,
    label,
    name,
    prefix,
    unit,
    decimal = false,
    type = "text",
    multiline = false,
    rows,
    required = false,
    helperText,
    color = "#000",              // fallback raw color (black)
    palette = "primary",         // theme color palette (e.g. "primary", "secondary")
    useThemeColor = false,       // toggle to use palette color
    fullWidth = true,
    placeholder="",
    ...rest
}) {
    const theme = useTheme();

    const borderColor = useThemeColor ? theme.palette[palette]?.main : color;
    const shadowColor = useThemeColor ? theme.palette[palette]?.dark || "#000" : "#000";

    const handleChange = (event) => {
        let input_val = event.target.value;
        if (decimal) {
            input_val = input_val.replace(/[^\d.,]/g, '')
                                 .replace(/[,]/g, '')
                                 .replace(/\.(?=.*\.)/g, '');
            input_val = addThousandSeparator(input_val);
        } else {
            input_val = input_val.replace(/[^\d]/g, '');
            input_val = addThousandSeparator(input_val);
        }
        setValue(input_val);
    };

    return (
        <Box
            component="div"
            position="relative"
            sx={{
                transition: "all 0.2s ease",
                "&:hover": {
                    transform: "translate(2px, 2px)",
                },
            }}
        >
            <Box
                className="content"
                sx={{
                    width: "100%",
                    border: `2px solid`,
                    borderColor: borderColor,
                    boxShadow: `8px 8px 0 ${shadowColor}`,
                    backgroundColor: "#fff",
                }}
            >
                <TextField
                    type={type}
                    required={required}
                    className="input"
                    name={name}
                    label={label}
                    variant="outlined"
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    multiline={multiline}
                    maxRows={rows}
                    helperText={helperText}
                    color={useThemeColor ? palette : undefined}
                    fullWidth={fullWidth}
                    slotProps={{
                        input: {
                            startAdornment: prefix && (
                                <InputAdornment position="start">{prefix}</InputAdornment>
                            ),
                            endAdornment: unit && (
                                <InputAdornment position="end">{unit}</InputAdornment>
                            ),
                        }
                    }}
                    sx={{
                        input: {
                            fontSize: { xs: ".8rem", md: "1rem" },
                            py: 2,
                            px: 3,
                            '::placeholder': {
                                color: '#888',
                                fontWeight: 600,
                                opacity: 1,
                            },
                        },
                        label: {
                            fontSize: { xs: ".8rem", md: "1rem" },
                            fontWeight: "bold",
                        },
                        "& .MuiInput-underline:before": {
                            borderBottom: "none",
                        },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                            borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": {
                            borderBottom: "none",
                        },
                        "& .MuiFormHelperText-root": {
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                        },
                        backgroundColor: "white",
                    }}
                    {...rest}
                />
            </Box>
        </Box>
    );
}
