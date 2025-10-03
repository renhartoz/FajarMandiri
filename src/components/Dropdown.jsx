import React, { useState } from "react";
import { Menu, MenuItem, Button, Box, Divider, Typography, Chip } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Dropdown({ items, children, color, bgcolor, bdcolor, sx, MainBorder }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const isActiveDropdown = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: "inline-block", position: "relative" }}>
            <Button
                onClick={handleClick}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1vh 1.5vh",
                    textTransform: "none",
                    borderRadius: "8px",
                    backgroundColor: bgcolor,
                    color: color,
                    border: MainBorder?`2px solid ${bdcolor}`:'none',
                    boxShadow: MainBorder?`3px 3px 0px ${bdcolor}`:'none',
                    transition: "all 0.3s ease",
                    "&:hover": {
                        transform: "translate(3px, 3px)",
                        boxShadow: "none",
                    },
                    ...sx,
                }}
                endIcon={
                    <KeyboardArrowDownIcon
                        sx={{
                            transition: "transform 0.3s ease",
                            transform: isActiveDropdown ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                    />
                }
            >
                {children}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={isActiveDropdown}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "dropdown-button", sx: { p: 0 } }}
                sx={{
                    mt: 1,
                    "& .MuiMenu-paper": {
                        borderRadius: "8px",
                        border: `2px solid ${bdcolor}`,
                        boxShadow: `3px 3px 0px ${bdcolor}`,
                        minHeight: "0",
                        padding: 0,
                        backgroundColor: bgcolor,
                    },
                }}
            >
                {items.map((item, index) => (
                    <Box key={index}>
                        <MenuItem
                            component="a"
                            href={item.link}
                            sx={{
                                textDecoration: "none",
                                color: color,
                                backgroundColor: bgcolor,
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                p: 2,
                                "&:hover": {
                                    backgroundColor: color,
                                    color: bgcolor,
                                },
                            }}
                            onClick={handleClose}
                        >
                            {/* Left Icon */}
                            {item.icon && <Box sx={{ fontSize: "1.5rem" }}>{item.icon}</Box>}

                            {/* Text Content */}
                            <Box>
                                <Typography component={'div'} variant="body1" fontWeight="bold">
                                    {item.label}
                                    {item.badge && (
                                        <Chip
                                            label={item.badge}
                                            sx={{
                                                ml: 1,
                                                fontSize: ".75em",
                                                backgroundColor: "lightgreen",
                                                color: "#070",
                                            }}
                                        />
                                    )}
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                                    {item.desc}
                                </Typography>
                            </Box>
                        </MenuItem>
                        {index < items.length - 1 && <Divider sx={{ backgroundColor: bdcolor, m:0, "&.MuiDivider-root": { margin: "0" } }} />}
                    </Box>
                ))}
            </Menu>
        </Box>
    );
}
