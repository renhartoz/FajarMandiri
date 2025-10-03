import * as React from "react";
import { styled } from "@mui/material/styles";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Stack,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";

// This function calculates the contrast text color based on the background color
const getContrastTextColor = (bgColor) => {
    const hex = bgColor.replace("#", "");
    const r =
        parseInt(hex.length === 3 ? hex[0] + hex[0] : hex.slice(0, 2), 16) /
        255;
    const g =
        parseInt(hex.length === 3 ? hex[1] + hex[1] : hex.slice(2, 4), 16) /
        255;
    const b =
        parseInt(hex.length === 3 ? hex[2] + hex[2] : hex.slice(4, 6), 16) /
        255;

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luminance > 0.5 ? "#000" : "#FFF";
};

const getVariantStyles = (theme, variant) => {
    if (typeof variant === "string" && /^#([A-Fa-f0-9]{3,8})$/.test(variant)) {
        return {
            headBackground: variant, // Use provided HEX color
            headColor: getContrastTextColor(variant), // Default text color
            rowBackground: "#F5F5F5", // Light gray rows
            borderColor: "#000",
        };
    }
    switch (variant) {
        case "monotone":
            return {
                headBackground: "#000", // Black header
                headColor: "#FFF", // White text
                rowBackground: "#F5F5F5", // Light gray rows
                borderColor: "#000",
            };
        case "primary":
            return {
                headBackground: theme.palette.primary.main, // Primary blue
                headColor: theme.palette.common.white, // White text
                rowBackground: theme.palette.action.hover, // Hover effect
                borderColor: "#000", // Darker blue border
            };
        case "secondary":
            return {
                headBackground: theme.palette.secondary.main,
                headColor: theme.palette.common.white, // White text
                rowBackground: theme.palette.action.hover, // Hover effect
                borderColor: "#000", // Darker blue border
            };
        case "tertiary":
            return {
                headBackground: theme.palette.tertiary.main,
                headColor: theme.palette.common.white, // White text
                rowBackground: theme.palette.action.hover, // Hover effect
                borderColor: "#000", // Darker blue border
            };
        case "quaternary":
            return {
                headBackground: theme.palette.quaternary.main,
                headColor: theme.palette.common.white, // White text
                rowBackground: theme.palette.action.hover, // Hover effect
                borderColor: "#000", // Darker blue border
            };
        case "success":
            return {
                headBackground: theme.palette.success.main,
                headColor: theme.palette.common.white, // White text
                rowBackground: theme.palette.action.hover, // Hover effect
                borderColor: "#000", // Darker blue border
            };
        case "error":
            return {
                headBackground: theme.palette.error.main,
                headColor: theme.palette.common.white, // White text
                rowBackground: theme.palette.action.hover, // Hover effect
                borderColor: "#000", // Darker blue border
            };
        case "warning":
            return {
                headBackground: theme.palette.warning.main,
                headColor: theme.palette.common.white, // White text
                rowBackground: theme.palette.action.hover, // Hover effect
                borderColor: "#000", // Darker blue border
            };
        case "info":
            return {
                headBackground: theme.palette.info.main,
                headColor: theme.palette.common.white, // White text
                rowBackground: theme.palette.action.hover, // Hover effect
                borderColor: "#000", // Darker blue border
            };
        default:
            return {
                headBackground: theme.palette.grey[900],
                headColor: theme.palette.common.white,
                rowBackground: theme.palette.grey[100],
                borderColor: theme.palette.grey[700],
            };
    }
};

const StyledTableCell = styled(TableCell, {
    shouldForwardProp: (prop) => prop !== "variant",
})(({ theme, variant }) => {
    const styles = getVariantStyles(theme, variant);
    return {
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: styles.headBackground,
            color: styles.headColor,
            border: `2px solid ${styles.borderColor || "#000"}`,
            padding: "1em 0.25em",
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            border: `2px solid ${styles.borderColor || "#000"}`,
            padding: "1em 0.25em",
        },
    };
});

const StyledTableRow = styled(TableRow)(({ theme, variant }) => {
    const styles = getVariantStyles(theme, variant);
    return {
        "&:nth-of-type(odd)": {
            backgroundColor: styles.rowBackground,
        },
    };
});

export function CustomRawTable({
    content,
    variant = "monotone",
    spacing = 0,
    sx,
}) {
    return (
        <>
            <Stack
                spacing={spacing}
                sx={{
                    height: "fit-content",
                    justifyContent: "center",
                    alignItems: "center",
                    width:"100%", 
                }}
            >
                {Array.isArray(content) &&
                content.every((row) => Array.isArray(row)) ? (
                    content.every((row) =>
                        row.every(
                            (col) =>
                                typeof col === "object" &&
                                !React.isValidElement(col) &&
                                col !== null &&
                                !Array.isArray(col)
                        )
                    ) ? (
                        <TableContainer
                            component={Paper}
                            sx={{
                                maxWidth: sx?.maxWidth || "80%",
                                overflowY:"hidden",
                                ...sx?.table,
                            }}
                        >
                            <Table aria-label="customized table">
                                <TableHead>
                                    <StyledTableRow variant={variant}>
                                        {content[0].map((col, index) => (
                                            <StyledTableCell
                                                key={index}
                                                align="center"
                                                colSpan={col.colspan || 1}
                                                rowSpan={col.rowspan || 1}
                                                variant={variant}
                                            >
                                                {col.content}
                                            </StyledTableCell>
                                        ))}
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    {content.slice(1).map((row, rowIndex) => (
                                        <StyledTableRow
                                            key={rowIndex}
                                            variant={variant}
                                        >
                                            {row.map((cell, cellIndex) => (
                                                <StyledTableCell
                                                    key={cellIndex}
                                                    align="center"
                                                    colSpan={cell.colspan || 1}
                                                    rowSpan={cell.rowspan || 1}
                                                    variant={variant}
                                                >
                                                    {cell.content}
                                                </StyledTableCell>
                                            ))}
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : content.every((row) =>
                          row.every(
                              (col) =>
                                  typeof col === "string" ||
                                  React.isValidElement(col)
                          )
                      ) ? (
                        <TableContainer component={Paper} sx={{ overflowY:"hidden", ...sx?.table }}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        {content[0].map((cell, index) => (
                                            <StyledTableCell
                                                key={index}
                                                align="center"
                                                variant={variant}
                                            >
                                                {cell}
                                            </StyledTableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {content.slice(1).map((row, rowIndex) => (
                                        <StyledTableRow
                                            key={rowIndex}
                                            variant={variant}
                                        >
                                            {row.map((cell, cellIndex) => (
                                                <StyledTableCell
                                                    key={cellIndex}
                                                    align="center"
                                                    variant={variant}
                                                >
                                                    {cell}
                                                </StyledTableCell>
                                            ))}
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <Typography>This is a mixed array structure</Typography>
                    )
                ) : (
                    <Typography>This is not a valid table structure</Typography>
                )}
            </Stack>
        </>
    );
}
