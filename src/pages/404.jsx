import { Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <>
            <Stack
                sx={{
                    height: "100vh",
                    display: { xs: "flex", sm: "none" },
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(2px)",
                    color: "#fef0da",
                    px: 5,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }}
                justifyContent="center"
                alignItems="start"
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: "monospace",
                    }}
                >
                    404
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "monospace",
                    }}
                >
                    Page Not Found
                </Typography>
                <Button
                    variant="contained"
                >
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            fontWeight: "900",
                            fontFamily: "monospace",
                        }}
                    >
                        Go Home &rArr;
                    </Link>
                </Button>
            </Stack>
        </>
    );
}
