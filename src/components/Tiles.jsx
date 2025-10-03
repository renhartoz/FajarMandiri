import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Tiles = ({ bg, bgcolor, bdcolor, href, children, sx, nochildren }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                width: "100%",
                maxWidth: 600,
                border: `2px solid ${bdcolor}`,
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: `5px 5px 0px ${bdcolor}`,
                backgroundColor: "white",
                "&:hover": {
                    transform: "translate(5px, 5px)",
                    boxShadow: "none",
                },
                "&:active": {
                    transform: "translate(2px, 2px)",
                },
                ...sx,
            }}
            component={"a"}
            href={href}
        >
            <Box
                component="img"
                src={bg}
                alt="Tile Image"
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                }}
            />
            {nochildren ? (
                <></>
            ) : (
                <Box
                    sx={{
                        borderTop: `2px solid ${bdcolor}`,
                        backgroundColor: bgcolor,
                        padding: "16px",
                    }}
                >
                    {children}
                </Box>
            )}
        </Paper>
    );
};

export default Tiles;
