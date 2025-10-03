import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";
import Button from "./Button";

import {
    Instagram,
    YouTube,
    Facebook,
    Telegram,
    WhatsApp,
} from "@mui/icons-material";

const socialMedia = [
    { icon: <Instagram />, color: "linear-gradient(#833ab4,#fd1d1d,#fcb045)" },
    { icon: <YouTube />, color: "#FF0000" },
    { icon: <Facebook />, color: "#4267B2" },
    { icon: <Telegram />, color: "#24A1DE" },
    { icon: <WhatsApp />, color: "#128C7E" },
];

const links = [
    {
        title: "Tentang",
        items: [
            { label: "Lorem", href: "/1" },
            { label: "Ipsum", href: "/1" },
        ],
    },
    {
        title: "Tutorial",
        items: [
            { label: "Lorem", href: "/2" },
            { label: "Ipsum", href: "/2" },
        ],
    },
    {
        title: "Produk",
        items: [
            { label: "Lorem", href: "/3" },
            { label: "Ipsum", href: "/3" },
        ],
    },
];

const SocialButtons = ({ sx }) => (
    <Stack direction="row" gap={1.5} sx={sx}>
        {socialMedia.map(({ icon, color }, idx) => (
            <Button
                key={idx}
                bgcolor={color}
                bdcolor={"#000"}
                color="#fff"
                sx={{ px: 1 }}
            >
                {icon}
            </Button>
        ))}
    </Stack>
);

export default function Footer({ sx }) {
    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
                mb: { xs: "3.932rem", sm: 0 },
                py: 5,
                px: { xs: 3, md: 6 },
                bgcolor: "#f0f0f0",
                ...sx,
            }}
        >
            {/* Left Section */}
            <Stack width={{ md: "30%" }} gap={2}>
                <Typography variant="h5" color="kurai_ao">
                    Bimbel Rumah Ilmiah
                </Typography>
                <Typography color="kurai_ao" align={"justify"} mb={2}>
                    Rumah Ilmiah adalah bimbingan belajar yang berkomitmen pada
                    moto "Menjadikan esok hari lebih baik dari hari ini." Kami
                    menyediakan kursus berkualitas tinggi lengkap dengan materi
                    dan latihan yang terintegrasi langsung di website,
                    memudahkan akses belajar kapan saja. Dengan pendekatan yang
                    terstruktur dan dukungan penuh bagi siswa, kami hadir untuk
                    menemani perjalanan belajar yang lebih efektif dan bermakna.
                </Typography>
                <SocialButtons sx={{ display: { xs: "none", md: "flex" } }} />
            </Stack>

            {/* Middle Section (Desktop) */}
            <Stack
                direction="row"
                sx={{
                    display: { xs: "none", md: "flex" },
                    width: { md: "70%" },
                }}
                justifyContent="space-evenly"
            >
                {links.map((list, id) => (
                    <Stack key={id} gap={2}>
                        <Typography
                            variant="h5"
                            color="kurai_ao"
                            fontWeight={600}
                        >
                            {list.title}
                        </Typography>
                        {list.items.map((item, id) => (
                            <Typography key={id}>
                                <Link>{item.label}</Link>
                            </Typography>
                        ))}
                    </Stack>
                ))}
            </Stack>

            {/* Middle Section (Mobile) */}
            <Stack sx={{ display: { md: "none", xs: "block" } }}>
                {links.map((val, id) => (
                    <Accordion
                        key={id}
                        question={val.title}
                        answer={val.items}
                        bgcolor_title="#f0f0f0"
                        color_title="kurai_ao"
                        bgcolor_text="#f0f0f0"
                        color_text="#000"
                        sx={{ boxShadow: 0, border: "none" }}
                        nopaddinginline
                        nohover
                    />
                ))}
            </Stack>

            {/* Social Media (Mobile) */}
            <SocialButtons
                sx={{ display: { xs: "flex", md: "none" }, gap: 3 }}
            />
        </Stack>
    );
}
