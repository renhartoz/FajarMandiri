import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Stack, Typography, Box } from "@mui/material";
import Button from "./Button";

export default function PageNav({ pages, courseName }) {
    const navigate = useNavigate();
    const location = useLocation();
    const index = pages.indexOf(location.pathname);

    const [showGrid, setShowGrid] = useState(false);
    const [gridPage, setGridPage] = useState(0);

    const gridSize = 16;
    const columns = 4;
    const totalGrids = Math.ceil(pages.length / gridSize);

    const progressKey = `progress_${courseName}`;
    const handleNavigation = (newIndex) => {
        if (newIndex < 0 || newIndex >= pages.length) return;
        localStorage.setItem(progressKey, newIndex);
        navigate(pages[newIndex]);
        setShowGrid(false);
    };

    const gridPages = pages.slice(gridPage * gridSize, (gridPage + 1) * gridSize);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight" && index < pages.length - 1) {
                handleNavigation(index + 1);
            } else if (e.key === "ArrowLeft" && index > 0) {
                handleNavigation(index - 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [index, pages]);

    return (
        <Stack
            spacing={1}
            sx={{
                position: "sticky",
                bottom: 0,
                zIndex: 100,
                backgroundColor: "kurai_ao.main",
                borderTop: "2px solid black",
                pt: 1,
                pb: 2,
            }}
        >
            {/* Main Navigation */}
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                px={2}
            >
                <Box sx={{ position: "relative" }}>
                    <Button
                        sx={{ px: 2, py: 1 }}
                        bgcolor="secondary.main"
                        bdcolor="#000"
                        onClick={() => setShowGrid((prev) => !prev)}
                    >
                        {showGrid ? "Hide Pages" : "Show Pages"}
                    </Button>

                    {/* Floating Dropdown Grid */}
                    <Box
                        sx={{
                            display: showGrid ? "block" : "none",
                            position: "absolute",
                            bottom: "3.5em",
                            left: "50%",
                            transform: "translateX(-50%)",
                            bgcolor: "#f5f5f5",
                            border: "3px solid black",
                            borderRadius: 1,
                            p: 2,
                            boxShadow: 4,
                            zIndex: 200,
                            transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${columns}, 1fr)`,
                            gap: 1,
                        }}
                        >
                        {gridPages.map((page, i) => {
                            const pageIndex = gridPage * gridSize + i;
                            return (
                                <Box
                                    key={i}
                                    onClick={() => handleNavigation(pageIndex)}
                                    sx={{
                                        width: 42,
                                        height: 42,
                                        border: "2px solid black",
                                        borderRadius: 1,
                                        backgroundColor: pageIndex === index ? "primary.main" : "#ccc",
                                        color: pageIndex === index ? "#fff" : "#000",
                                        fontWeight: 600,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            backgroundColor: "primary.dark",
                                            color: "#fff",
                                            transform: "scale(1.1)",
                                        },
                                    }}
                                >
                                    {pageIndex + 1}
                                </Box>
                            );
                        })}
                    </Box>

                    {/* Pagination Dots */}
                    {pages.length > gridSize && (
                    <Box display="flex" justifyContent="center" mt={1} gap={1}>
                        {[...Array(totalGrids)].map((_, i) => (
                        <Box
                            key={i}
                            onClick={() => setGridPage(i)}
                            sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: i === gridPage ? "#3949ab" : "#bbb",
                            cursor: "pointer",
                            transition: "all 0.2s",
                            }}
                        />
                        ))}
                    </Box>
                    )}
                </Box>
                </Box>

                <Typography color="#fff">
                    {index + 1} / {pages.length}
                </Typography>

                <Stack direction="row" gap={3}>
                    <Button
                        disabled={index === 0}
                        sx={{ width: "4em", px: 2, py: 1 }}
                        bgcolor="primary.main"
                        bdcolor="#000"
                        onClick={() => handleNavigation(index - 1)}
                    >
                        Back
                    </Button>
                    <Button
                        disabled={index === pages.length - 1}
                        sx={{ width: "4em", px: 2, py: 1 }}
                        bgcolor="primary.main"
                        bdcolor="#000"
                        onClick={() => handleNavigation(index + 1)}
                    >
                        Next
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}

export function PageNav2({ pages, exerciseName }) {
    const navigate = useNavigate();
    const location = useLocation();
    const index = pages.indexOf(location.pathname);

    const [showGrid, setShowGrid] = useState(false);
    const [gridPage, setGridPage] = useState(0);

    const gridSize = 16;
    const columns = 4;
    const rows = 4;
    const totalGrids = Math.ceil(pages.length / gridSize);

    const progressKey = `progress_${exerciseName}`;
    const handleNavigation = (newIndex) => {
        localStorage.setItem(progressKey, newIndex);
        navigate(pages[newIndex]);
        setShowGrid(false);
    };

    const gridPages = pages.slice(
        gridPage * gridSize,
        (gridPage + 1) * gridSize
    );

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight" && index < pages.length - 1) {
                handleNavigation(index + 1);
            } else if (e.key === "ArrowLeft" && index > 0) {
                handleNavigation(index - 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [index, pages]);

    return (
        <Stack
            spacing={1}
            sx={{
                position: "sticky",
                bottom: 0,
                zIndex: 100,
                backgroundColor: "kurai_ao.main",
                borderTop: "2px solid black",
                pt: 1,
                pb: 2,
            }}
        >
            {/* Main Navigation */}
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                px={2}
            >
                <Box sx={{ position: "relative" }}>
                    <Button
                        sx={{ px: 2, py: 1 }}
                        bgcolor="secondary.main"
                        bdcolor="#000"
                        onClick={() => setShowGrid((prev) => !prev)}
                    >
                        {showGrid ? "Hide Pages" : "Show Pages"}
                    </Button>

                    {/* Floating Dropdown Grid */}
                    <Box
                        sx={{
                            display: showGrid ? "block" : "none",
                            position: "absolute",
                            bottom: "3.5em",
                            left: "50%",
                            transform: "translateX(-50%)",
                            bgcolor: "#f5f5f5",
                            border: "3px solid black",
                            borderRadius: 1,
                            p: 2,
                            boxShadow: 4,
                            zIndex: 200,
                            transition:
                                "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                                gap: 1,
                            }}
                        >
                            {gridPages.map((page, i) => {
                                const pageIndex = gridPage * gridSize + i;
                                return (
                                    <Box
                                        key={i}
                                        onClick={() =>
                                            handleNavigation(pageIndex)
                                        }
                                        sx={{
                                            width: 42,
                                            height: 42,
                                            border: "2px solid black",
                                            borderRadius: 1,
                                            backgroundColor:
                                                pageIndex === index
                                                    ? "primary.main"
                                                    : "#ccc",
                                            color:
                                                pageIndex === index
                                                    ? "#fff"
                                                    : "#000",
                                            fontWeight: 600,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                backgroundColor: "primary.dark",
                                                color: "#fff",
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    >
                                        {pageIndex + 1}
                                    </Box>
                                );
                            })}
                        </Box>

                        {/* Pagination Dots */}
                        {pages.length > 16 && (
                            <Box
                                display="flex"
                                justifyContent="center"
                                mt={1}
                                gap={1}
                            >
                                {[...Array(totalGrids)].map((_, i) => (
                                    <Box
                                        key={i}
                                        onClick={() => setGridPage(i)}
                                        sx={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: "50%",
                                            backgroundColor:
                                                i === gridPage
                                                    ? "#3949ab"
                                                    : "#bbb",
                                            cursor: "pointer",
                                            transition: "all 0.2s",
                                        }}
                                    />
                                ))}
                            </Box>
                        )}
                    </Box>
                </Box>
                <Typography color="#fff">
                    {index + 1} / {pages.length}
                </Typography>
                <Stack direction="row" gap={3}>
                    <Button
                        disabled={index === 0}
                        sx={{ width: "4em", px: 2, py: 1 }}
                        bgcolor="primary.main"
                        bdcolor="#000"
                        onClick={() => handleNavigation(index - 1)}
                    >
                        Back
                    </Button>
                    <Button
                        disabled={index === pages.length - 1}
                        sx={{ width: "4em", px: 2, py: 1 }}
                        bgcolor="primary.main"
                        bdcolor="#000"
                        onClick={() => handleNavigation(index + 1)}
                    >
                        Next
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}
