import React, { useState, useEffect } from 'react';
import { Stack, AppBar, Typography, Button } from "@mui/material";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loading from './components/Loading.jsx';

export default function App() {
    const navigate = useNavigate();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const init = async () => {
            setIsReady(true);
        };
        init();
    }, []);

    if (!isReady) {
        return <Loading/>;
    }

    return (
        <>
            <Stack sx={{minHeight: '100vh'}}>
                <Theme>
                    <AppBar position="sticky">
                        <Navbar/>
                    </AppBar>
                    <Stack flexGrow={1}>
                        <Outlet />
                    </Stack>
                    <ScrollToTop/>
                    <Footer />
                </Theme>
            </Stack>
        </>
    );
}
