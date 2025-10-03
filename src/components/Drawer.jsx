import React, { useEffect, useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Box, Typography, List, ListItem, ListItemText, Divider, Stack } from '@mui/material';
import Accordion from './Accordion';

const Drawer = ({ list=[], title, active, setActive, color, bgcolor, bdcolor }) => {
    const [isVisible, setIsVisible] = useState(false);

    const closeDrawer = () => {
        setIsVisible(false);
        setTimeout(() => {
        setActive(false);
        }, 300);
    };

    useEffect(() => {
        if (active) {
        setIsVisible(true);
        }
    }, [active]);

    if (!active) return null;

    return ReactDOM.createPortal(
        <>
        <Box
            aria-modal="true"
            onClick={closeDrawer}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                zIndex: 1300,
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
            }}
        />
        
        <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: '250px',
                backgroundColor: `${bgcolor}`,
                border: `2px solid ${bdcolor}`,
                zIndex: 1400,
                transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.3s ease',
            }}
        >
            <Stack sx={{ p:2 }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        color: `${color}`,
                        textAlign: 'center',
                    }}
                >
                    {title}
                </Typography>
            </Stack>
            <Divider color={bdcolor}/>

            <List disablePadding>
                {list.map((item, index) => (
                    <Fragment key={index}>
                        {/* Normal Menu Item */}
                        {item.href ? (
                            <ListItem onClick={closeDrawer} component="a" href={item.href}>
                                <ListItemText primary={item.label} sx={{ color: `${color}` }} />
                            </ListItem>
                        ) : (
                            // Dropdown Menu Item
                            <ListItem >
                                <Accordion question={item.label} answer={item.dropdown} bgcolor_title={bgcolor} color_title={color} bgcolor_text={bgcolor} color_text={color} sx={{ boxShadow: 0, "&.MuiPaper-root":{marginBottom:0} }} nopaddinginline />
                            </ListItem>
                        )}

                        <Divider sx={{ backgroundColor: bdcolor }} />
                    </Fragment>
                ))}
            </List>
        </Box>
        </>,
        document.getElementById('drawer')
    );
};

export default Drawer;
