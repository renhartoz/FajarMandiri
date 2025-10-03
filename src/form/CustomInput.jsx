import React from "react";
import { TextField, Box, InputAdornment, useTheme } from "@mui/material";

export default function CustomInput({
    type = "text",
    required = false,
    name = "",
    label = "",
    value,
    setValue,
    multiline = false,
    rows = 1,
    helperText = "",
    fullWidth = true,
    color = "#000",
    palette = "primary",
    startIcon = null,
    placeholder = "",
    onKeyDown,
    useThemeColor = false,
    disabled = false,
    readonly=false
}) {
    const theme = useTheme();
    const borderColor = useThemeColor ? theme.palette[palette].main : color;
    const boxShadowColor = useThemeColor ? theme.palette[palette].dark : "#000";

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box component={'div'} position={'relative'} sx={{
            transition: "all 0.2s ease",
            "&:hover": {
                transform: "translate(2px, 2px)",
            },
        }}>
            <Box
                className={'content'}
                sx={{
                    width: "100%",
                    border: `2px solid`,
                    borderColor: borderColor,
                    boxShadow: `8px 8px 0 ${boxShadowColor}`,
                    backgroundColor: "#fff",
                }}
            >
                <TextField
                    type={type}
                    required={required}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    variant="standard"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                    multiline={multiline}
                    maxRows={rows}
                    helperText={helperText}
                    fullWidth={fullWidth}
                    color={useThemeColor ? palette : undefined}
                    disabled={disabled}
                    slotProps={{
                        input: {
                            startAdornment: startIcon && (
                                <InputAdornment position="start">{startIcon}</InputAdornment>
                            ),
                            readOnly:readonly,
                        },
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
                        '& .MuiInputBase-root textarea': {
                            fontSize: { xs: ".8rem", md: "1rem" },
                            py: 2,
                            px: 3,
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
                />
            </Box>
        </Box>
    );
}
