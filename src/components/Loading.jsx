import React from "react";
import { CircularProgress, Stack, Typography } from "@mui/material";

export default function Loading({text="Loading"}) {
    return (
        <Stack
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                maxWidth: "100%",
                maxHeight: "100%",
            }}
        >
            <CircularProgress color="primary" size="99px" />
            <Typography sx={{ py: 5, fontSize: "1em" }}>{text}</Typography>
        </Stack>
    );
}
