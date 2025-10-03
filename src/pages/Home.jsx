import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Box,
    Divider,
    Stack,
    Typography,
    Container,
    Grid2,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Carousel from "../components/Carousel";
import Tiles from "../components/Tiles";
import CustomInput from "../form/CustomInput";
import Button from "../components/Button";
import CourseCard from "../components/Card";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import courses_data from "../data/course.json";
import exercise_data from "../data/exercise.json";

const courses = courses_data.slice(0, 4);
const exercises = exercise_data.slice(0, 4);

export default function Home() {
    const slides = [
        {
            bg: "/hero/hero_1.png",
            titleColor: "primary",
            color: "#fff",
        },
        {
            bg: "/hero/hero_2.png",
            titleColor: "secondary",
            color: "#fff",
        },
        {
            bg: "/hero/hero_3.png",
            titleColor: "tertiary",
            color: "#fff",
        },
        {
            bg: "/hero/hero_4.png",
            titleColor: "quaternary",
            color: "#fff",
        },
    ];

    const [search, setSearch] = useState("");
    const nav = useNavigate();
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            nav(`/course?search=${encodeURIComponent(search)}`);
        }
    };
    return (
        <>
            <Stack direction={"column"} sx={{ backgroundColor: "#f5f5f5" }}>
                <Carousel slides={slides} time={5000} />
                <Stack p={"5vh 3vw"}>
                    <CustomInput
                        type="text"
                        required={true}
                        name="search"
                        value={search}
                        setValue={setSearch}
                        fullWidth={true}
                        color="secondary"
                        startIcon={<SearchIcon sx={{ ml: 2 }} />}
                        placeholder="Cari Kursus Online"
                        onKeyDown={handleKeyPress}
                    />
                </Stack>
                <Stack
                    direction={"column"}
                    gap={2}
                    sx={{
                        padding: "2% 3%",
                    }}
                    justifyContent={"center"}
                >
                    <Stack>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <Typography
                                variant="h3"
                                textAlign={{ xs: "center", sm: "justify" }}
                                component={"h1"}
                                fontSize={{ xs: "2em", sm: "3.5em" }}
                                color="secondary"
                            >
                                Alur Pembelajaran
                            </Typography>
                            <Link to={"/course"}>
                                <Typography color="primary" fontSize={"1em"}>
                                    Lihat Semua
                                </Typography>
                            </Link>
                        </Stack>
                        <Divider
                            sx={{ border: ".3vh solid #222", width: "100%" }}
                        />
                    </Stack>
                    <Typography
                        textAlign={"justify"}
                        color="black_blue"
                        fontSize={{ xs: ".9em", sm: "1em", md: "1.2em" }}
                        sx={{ mb: 2 }}
                    >
                        Mempelajari kursus terpercaya dengan mengikuti silabus
                        dan konsep yang telah kami design
                    </Typography>
                    <Grid2
                        container
                        spacing={2}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        columns={{ xs: 1, sm: 2, md: 2, lg: 4 }}
                    >
                        {courses.map((item) => (
                            <Grid2
                                key={item.id}
                                size={1}
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <Stack
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    width={300}
                                >
                                    <CourseCard {...item} image={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/${item.image}`} />
                                </Stack>
                            </Grid2>
                        ))}
                    </Grid2>
                </Stack>
            </Stack>
            <Stack direction={"column"} sx={{ backgroundColor: "#e5edff" }}>
                <Stack
                    direction={"column"}
                    gap={2}
                    sx={{
                        padding: "2% 3%",
                    }}
                    justifyContent={"center"}
                >
                    <Stack>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <Typography
                                variant="h3"
                                textAlign={{ xs: "center", sm: "justify" }}
                                component={"h1"}
                                fontSize={{ xs: "2em", sm: "3.5em" }}
                                color="#DB6400"
                            >
                                Uji Kompetensi
                            </Typography>
                            <Link to={"/exercise"}>
                                <Typography color="#DB6400" fontSize={"1em"}>
                                    Lihat Semua
                                </Typography>
                            </Link>
                        </Stack>
                        <Divider
                            sx={{ border: ".3vh solid #222", width: "100%" }}
                        />
                    </Stack>
                    <Typography
                        textAlign={"justify"}
                        color="black_blue"
                        fontSize={{ xs: ".9em", sm: "1em", md: "1.2em" }}
                        sx={{ mb: 2 }}
                    >
                        Kumpulan soal-soal latihan berkualitas yang telah
                        didesain sedemikian rupa untuk menguji kemampuan Anda
                    </Typography>
                    <Grid2
                        container
                        spacing={2}
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        columns={{ xs: 1, sm: 2, md: 2, lg: 4 }}
                    >
                        {exercises.map((item) => (
                            <Grid2
                                key={item.id}
                                size={1}
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <Stack
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    width={300}
                                >
                                    <CourseCard {...item} maxChar={20} />
                                </Stack>
                            </Grid2>
                        ))}
                    </Grid2>
                </Stack>
            </Stack>
            <Stack
                sx={{
                    width: "100%",
                    height: "100%",
                }}
                px={{ xs: 5, sm: 10 }}
                py={5}
                className="radialbg"
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                gap={{ xs: 6, md: 16 }}
            >
                <Stack
                    direction={"column"}
                    gap={3}
                    maxWidth={{ xs: "100vw", md: "50vw" }}
                    px={3}
                    py={2}
                    sx={{
                        backgroundColor: "#f5f5f5",
                        borderRadius: "8px",
                        border: "2px solid black",
                        boxShadow: "none",
                        position: "relative",
                        transition:
                            "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                        "&:hover": {
                            transform: "translate(4px, -4px)",
                            boxShadow: "-8px 8px 0px black",
                        },
                    }}
                >
                    <Stack gap={0.6} direction={"column"}>
                        <Typography
                            variant="h3"
                            textAlign={{ xs: "center", sm: "justify" }}
                            component={"h1"}
                            fontSize={{ xs: "1em", sm: "1.2em" }}
                            color="#E06600"
                            fontWeight={700}
                        >
                            Apa saja keuntungan Kursus Online di Rumah Ilmiah?
                        </Typography>
                        <Typography
                            variant="h3"
                            textAlign={{ xs: "center", sm: "justify" }}
                            component={"h1"}
                            fontSize={{ xs: "1.5em", sm: "1.8em" }}
                            color="secondary"
                            fontWeight={700}
                        >
                            Jaminan Kursus Online
                        </Typography>
                        <Typography
                            textAlign={"justify"}
                            color="black_blue"
                            fontSize={{ xs: ".7em", sm: "1em" }}
                        >
                            Pilih dan belajar puluhan kursus online di{" "}
                            <Typography
                                component="b"
                                color="primary"
                                fontWeight={800}
                            >
                                Rumah Ilmiah
                            </Typography>{" "}
                            dan dapatkan banyak keuntungannya.
                        </Typography>
                    </Stack>
                    <Stack direction={"column"} gap={3}>
                        <Stack
                            direction={"column"}
                            gap={0.6}
                            sx={{
                                borderLeft: "1.6px solid #aaa",
                                "&:hover": {
                                    borderLeft: "1.6px solid",
                                    borderColor: "primary.main",
                                    "& h1": { color: "primary.main" },
                                },
                            }}
                            px={1.6}
                        >
                            <Typography
                                variant="h1"
                                textAlign={"justify"}
                                color="black_blue"
                                fontSize={{ xs: ".7em", sm: "1em" }}
                                fontWeight={700}
                            >
                                Kurikulum Berkualitas
                            </Typography>
                            <Typography
                                textAlign={"justify"}
                                color="black_blue"
                                fontSize={{ xs: ".7em", sm: "1em" }}
                            >
                                Belajar lebih terarah dengan mengikuti pilihan
                                kurikulum berkualitas yang kami rancang untuk
                                Anda.
                            </Typography>
                        </Stack>
                        <Stack
                            direction={"column"}
                            gap={0.6}
                            sx={{
                                borderLeft: "1.6px solid #aaa",
                                "&:hover": {
                                    borderLeft: "1.6px solid",
                                    borderColor: "tertiary.main",
                                    "& h1": { color: "tertiary.main" },
                                },
                            }}
                            px={1.6}
                        >
                            <Typography
                                variant="h1"
                                textAlign={"justify"}
                                color="black_blue"
                                fontSize={{ xs: ".7em", sm: "1em" }}
                                fontWeight={700}
                            >
                                Materi Penunjang
                            </Typography>
                            <Typography
                                textAlign={"justify"}
                                color="black_blue"
                                fontSize={{ xs: ".7em", sm: "1em" }}
                            >
                                Ikuti kursus online dan dapatkan materi
                                penunjang untuk memaksimalkan pembelajaran Anda.
                            </Typography>
                        </Stack>
                        <Stack
                            direction={"column"}
                            gap={0.6}
                            sx={{
                                borderLeft: "1.6px solid #aaa",
                                "&:hover": {
                                    borderLeft: "1.6px solid",
                                    borderColor: "secondary.main",
                                    "& h1": { color: "secondary.main" },
                                },
                            }}
                            px={1.6}
                        >
                            <Typography
                                variant="h1"
                                textAlign={"justify"}
                                color="black_blue"
                                fontSize={{ xs: ".7em", sm: "1em" }}
                                fontWeight={700}
                            >
                                Test Kemampuan Pemahaman
                            </Typography>
                            <Typography
                                textAlign={"justify"}
                                color="black_blue"
                                fontSize={{ xs: ".7em", sm: "1em" }}
                            >
                                Uji kemampuan Anda dengan mengerjakan rangkaian
                                tes (pre test dan post test) hingga kuis yang
                                dapat mengukur tingkat pemahaman Anda
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack>
                    <Tiles
                        bg={"/misc/jaminan.png"}
                        bgcolor={"primary.main"}
                        bdcolor={"#000"}
                        sx={{
                            maxWidth: { xs: "100vw", md: "25vw" },
                        }}
                        nochildren
                    />
                </Stack>
            </Stack>
            <Stack
                sx={{
                    width: "100%",
                    height: "100%",
                }}
                px={{ xs: 5, sm: 10 }}
                py={5}
                className="radialbg2"
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                gap={{ xs: 6, md: 16 }}
            >
                <Stack>
                    <Tiles
                        bg={"/misc/membership.png"}
                        bgcolor={"secondary.main"}
                        bdcolor={"#000"}
                        sx={{
                            maxWidth: { xs: "100vw", md: "25vw" },
                        }}
                        nochildren
                    />
                </Stack>

                {/* Membership Box */}
                <Stack
                    direction={"column"}
                    gap={3}
                    maxWidth={{ xs: "100%", md: "50vw" }}
                    px={3}
                    py={2}
                    sx={{
                        backgroundColor: "#f5f5f5",
                        borderRadius: "8px",
                        border: "2px solid black",
                        boxShadow: "none",
                        position: "relative",
                        transition:
                            "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                        "&:hover": {
                            transform: "translate(-4px, -4px)",
                            boxShadow: "8px 8px 0px black",
                        },
                    }}
                >
                    {/* Titles */}
                    <Stack gap={0.6} direction={"column"}>
                        <Typography
                            variant="h3"
                            textAlign={{ xs: "center", sm: "justify" }}
                            component={"h1"}
                            fontSize={{ xs: "1em", sm: "1.2em" }}
                            color="#E06600"
                            fontWeight={700}
                        >
                            Apa keuntungan Membership?
                        </Typography>
                        <Typography
                            variant="h3"
                            textAlign={{ xs: "center", sm: "justify" }}
                            component={"h1"}
                            fontSize={{ xs: "1.5em", sm: "1.8em" }}
                            color="secondary"
                            fontWeight={700}
                        >
                            Membership Rumah Ilmiah
                        </Typography>
                        <Typography
                            variant="body1"
                            textAlign={"justify"}
                            color="black_blue"
                            fontSize={{ xs: ".8em", sm: "1em" }}
                        >
                            Nikmati semua akses ke{" "}
                            <Typography
                                component="b"
                                color="primary"
                                fontWeight={800}
                            >
                                Rumah Ilmiah
                            </Typography>
                        </Typography>
                    </Stack>

                    <Grid2 container spacing={1.6} direction={"column"}>
                        {[
                            "Gratis Akses 200+ Kursus Online",
                            "Gratis Akses Event Premium",
                            "Unlimited Download RPP dan Dokumen Bahan Ajar",
                            "Akses semua Rekaman Pelatihan",
                            "Dukungan Prioritas CS",
                            "Sertifikat sesuai Jam Pelajaran yang diikuti",
                        ].map((item, index) => (
                            <Grid2 key={index}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap={1}
                                >
                                    <CheckCircleIcon
                                        sx={{
                                            color: "primary.main",
                                            fontSize: "1.2em",
                                        }}
                                    />
                                    <Typography
                                        variant="body1"
                                        fontSize={{ xs: ".8em", sm: "1em" }}
                                        color="black_blue"
                                    >
                                        {item}
                                    </Typography>
                                </Stack>
                            </Grid2>
                        ))}
                    </Grid2>

                    {/* Buttons */}
                    <Stack
                        direction="row"
                        gap={2}
                        mt={2}
                        justifyContent={{ xs: "center", sm: "start" }}
                    >
                        <Button
                            bgcolor="primary"
                            color={"#fff"}
                            bdcolor={"#000"}
                            sx={{ fontWeight: "bold" }}
                        >
                            Coba Membership Sekarang!
                        </Button>
                        <Button
                            bgcolor="primary"
                            color={"#fff"}
                            bdcolor={"#000"}
                            sx={{ fontWeight: "bold" }}
                        >
                            Lihat Detail Membership
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}
