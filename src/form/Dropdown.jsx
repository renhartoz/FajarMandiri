import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Tooltip, Stack, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Dropdown({
    label='',
    icon,
    choices = [],
    value,
    setValue,
    renderItem,
    sx,
    children,
    arrow=true,
    null_label="Select"
}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{width: '100%', border: '1px solid #aaa', borderRadius:1, py:2, px:1.75, ...sx?.button}}>
                {icon?(
                    <Tooltip title={label}>
                        <Stack direction="row" alignchoices="center" spacing={0.5} width={'100%'}>
                            {icon}
                            {arrow && (isOpen ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />)}
                        </Stack>
                    </Tooltip>
                ):(
                    <Stack direction="row" alignchoices="center" spacing={0.5} width={'100%'} justifyContent={"space-between"} sx={sx?.label}>
                        <Typography>
                            {choices.find((i)=>i.value==value)?.label||choices.find((i) => JSON.stringify(i.value) === JSON.stringify(value))?.label||null_label}
                        </Typography>
                        {arrow && (isOpen ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />)}
                    </Stack>
                )}
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {choices.length>0?(
                    choices.map((item, index) => (
                        <MenuItem
                            key={index}
                            selected={item.value === value}
                            onClick={() => {
                                setValue(item.value);
                                handleClose();
                            }}
                        >
                            {renderItem ? renderItem(item) : (
                                    <Stack direction="row" spacing={1} alignchoices="center" sx={typeof sx?.item === 'function' ? sx.item(item) : sx?.item}>
                                        {item?.icon}
                                        {item?.label}
                                    </Stack>
                                )
                            }
                        </MenuItem>
                    ))
                ):(
                    <Stack px={3} py={2}>
                        {children}
                    </Stack>
                )}
            </Menu>
        </>
    );
}
