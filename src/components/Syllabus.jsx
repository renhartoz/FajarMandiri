import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Grid2,
    Stack,
} from "@mui/material";

const Syllabus = ({ syllabusData }) => {
    return (
        <Stack alignItems={"center"} justifyContent={"center"} my={5}>
            <Box
                sx={{ backgroundColor: "#fff", border: "1px solid #000" }}
                width={"80vw"}
            >
                {/* Header */}
                <Stack borderBottom={"1px solid #000"} px={5} py={2}>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold" }}
                        textAlign={{
                            xs: "left",
                            sm: "left",
                            md: "left",
                        }}
                    >
                        {syllabus_title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {syllabusData.unit} units • {syllabusData.subunit}{" "}
                        lessons • {syllabusData.quiz} quizzes
                    </Typography>
                </Stack>

                {/* Content Cards */}
                <Grid2 container>
                    {syllabusData.content.map((item, index) => (
                        <Grid2 key={index} width={"100%"}>
                            <Card
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    px: { xs: 2, sm: 3, md: 5 },
                                    py: 2,
                                    borderBottom:
                                        index !==
                                        syllabusData.content.length - 1
                                            ? "1px solid #000"
                                            : "none",
                                }}
                            >
                                {/* Number Circle */}
                                <Stack
                                    mr={2}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Typography
                                        backgroundColor="black_blue.main"
                                        color="#fff"
                                        sx={{
                                            width: "2.5em",
                                            aspectRatio: "1/1",
                                            borderRadius: "50%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            fontWeight: "bold",
                                        }}
                                        fontSize={"1em"}
                                    >
                                        {index + 1}
                                    </Typography>
                                </Stack>

                                {/* Card Content */}
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold" }}
                                        textAlign={{
                                            xs: "left",
                                            sm: "left",
                                            md: "left",
                                        }}
                                    >
                                        {item.point}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {item.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </Stack>
    );
};

export default Syllabus;
