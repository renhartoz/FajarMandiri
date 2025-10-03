import React, { useState, useRef, useEffect } from "react";
import { Stack, Paper, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const Accordion = ({
    question,
    answer,
    bgcolor_title = "primary.main",
    bgcolor_text = "#fff",
    bdcolor = "#000",
    color_title = "#000",
    color_text = "primary.main",
    sx = {},
    nopaddinginline = false,
    nohover = false,
    rawinput = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        const node = contentRef.current;
        if (!node) return;

        // ResizeObserver instance
        const resizeObserver = new ResizeObserver(() => {
            setContentHeight(node.scrollHeight);
        });

        // Observe the container
        resizeObserver.observe(node);

        // Recursively observe all child nodes
        const observeAllChildren = (element) => {
            Array.from(element.children).forEach((child) => {
                resizeObserver.observe(child);
                if (child.children.length > 0) {
                    observeAllChildren(child);
                }
            });
        };

        observeAllChildren(node); // Observe nested elements

        // Initial height
        setContentHeight(node.scrollHeight);

        return () => {
            resizeObserver.disconnect();
        };
    }, [isOpen]);


    return (
        <Paper
            elevation={3}
            sx={{
                width: "100%",
                border: `2px solid ${bdcolor}`,
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: `5px 5px 0px ${bdcolor}`,
                backgroundColor: bgcolor_title,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                ...(nohover
                    ? {}
                    : {
                            "&:hover": { transform: "translate(5px, 5px)", boxShadow: "none" },
                            "&:active": { transform: "translate(2px, 2px)" },
                    }),
                ...sx,
            }}
        >
            <Button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    padding: nopaddinginline ? "2% 0" : "2% 3%",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    backgroundColor: bgcolor_title,
                    borderBottom: (isOpen && bgcolor_title!=bgcolor_text) ? `2px solid ${bdcolor}` : "0px",
                    borderRadius: isOpen ? "0px" : "8px",
                    color: color_title,
                    cursor: "pointer",
                    outline: "none",
                    ...sx?.title,
                }}
            >
                <Typography component={'span'} color={color_title}>{question}</Typography>
                <Stack
                    style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                    }}
                >
                    <Typography color={color_title}>
                        <KeyboardArrowDownIcon />
                    </Typography>
                </Stack>
            </Button>

            <Stack
                ref={contentRef}
                justifyItems={'center'}
                style={{
                    maxHeight: isOpen ? `${contentHeight}px` : "0",
                    overflow: "hidden",
                    transition: "height ease-in-out",
                    background: bgcolor_text,
                    padding: isOpen ? "2% 3%" : "0 2vw",
                    ...sx?.text,
                }}
            >
                <Stack gap={2}>
                    {rawinput ? (
                        answer
                    ) : Array.isArray(answer) ? (
                        answer.map((item, id) => (
                            <Stack key={id}>
                                <Link
                                    to={item.href || "#"}
                                    style={{ textDecoration: "none" }}
                                    sx={{ py: id < answer.length - 1 ? "1vh" : "0px" }}
                                >
                                    <Typography fontSize={"0.9rem"} margin={0} color={color_text}>
                                        {item.label}
                                    </Typography>
                                </Link>
                            </Stack>
                        ))
                    ) : (
                        <Typography component={'div'} fontSize={"0.9rem"} color={color_text}>
                            {answer}
                        </Typography>
                    )}
                </Stack>
            </Stack>
        </Paper>
    );
};

export default Accordion;
