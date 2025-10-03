import React from "react";
import {
    Card as MuiCard,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Chip,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Card({
    image,
    productName,
    price,
    featured,
    brand,
    color = "primary",
    href,
    maxChar = null,
    sx={}
}) {

    return (
        <Link to={href ? href : "/comingsoon"}>
            <MuiCard
                sx={{
                    width: "100%",
                    border: "4px solid black",
                    boxShadow: "none",
                    position: "relative",
                    transition:
                        "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                    "&:hover": {
                        transform: "translate(-4px, -4px)",
                        boxShadow: "8px 8px 0px black",
                    },
                    ...sx
                }}
            >
                {/* Course Image with brand Chip */}
                <Box sx={{ position: "relative" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image||"/no_image.jpg"}
                        alt={productName}
                        sx={{ borderBottom: "4px solid black" }}
                    />

                    {/* brand Chip */}
                    {brand && (
                        <Chip
                            label={
                                <Typography
                                    color="#fff"
                                    fontWeight="bold"
                                    fontSize={"1em"}
                                >
                                    {brand}
                                </Typography>
                            }
                            size="small"
                            sx={{
                                position: "absolute",
                                top: 8,
                                right: 8,
                                backgroundColor: "#000",
                            }}
                        />
                    )}
                </Box>

                {/* free Course Label */}
                {featured && (
                    <Box
                        sx={{
                            backgroundColor: free
                                ? "secondary.main"
                                : "tertiary.main",
                            px: 1,
                            py: 0.5,
                        }}
                    >
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            color="#fff"
                        >
                            Featured
                        </Typography>
                    </Box>
                )}

                {/* Course Details */}
                <CardContent>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        color={color.main || "primary"}
                    >
                        {maxChar && productName.length > maxChar ? `${productName.slice(0, maxChar-3)}...` : productName}
                    </Typography>
                    {price && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            mt={1}
                            sx={{
                                fontSize: "0.9em",
                                textAlign: {
                                    xs: "justify",
                                    sm: "justify",
                                    md: "justify",
                                    lg: "left",
                                },
                            }}
                        >
                            {price}
                        </Typography>
                    )}
                </CardContent>
            </MuiCard>
        </Link>
    );
}
