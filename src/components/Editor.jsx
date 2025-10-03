
import React, { useState, useEffect, useRef } from 'react';
import {
    Box, 
    Stack, 
    IconButton, 
    Tooltip, 
    Divider,
    Typography
} from '@mui/material';

import Button from './Button';
import Dropdown from '../form/Dropdown';
import Popup from './Popup';
import CustomInput from '../form/CustomInput';

import FontDownloadIcon from '@mui/icons-material/FontDownload';
import TextFieldsIcon from '@mui/icons-material/TextFields';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';

import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import MovieIcon from '@mui/icons-material/Movie';
import FunctionsIcon from '@mui/icons-material/Functions';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import CodeIcon from '@mui/icons-material/Code';
import RemoveIcon from '@mui/icons-material/Remove';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Editor() {
    const canvasRef = useRef();
    const handleTextSelect = () => {
        const selection = window.getSelection();
        const selectedText = selection.toString();

        if (selectedText) {
            console.log("Selected text:", selectedText);
            // You can store it in state too
            // setSelectedText(selectedText)
        }
    };

    const fontFamilies = [
        { label: 'Apercu', value: 'Apercu' },
        { label: 'DM Sans', value: 'DM Sans' },
        { label: 'Monospace', value: 'monospace' },
        { label: 'Inter', value: 'Inter' },
        { label: 'Suisse', value: 'Suisse' },
    ]

    const alignItems = [
        { label: 'Left', value: 'left', icon: <FormatAlignLeftIcon /> },
        { label: 'Center', value: 'center', icon: <FormatAlignCenterIcon /> },
        { label: 'Right', value: 'right', icon: <FormatAlignRightIcon /> },
        { label: 'Justify', value: 'justify', icon: <FormatAlignJustifyIcon /> }
    ];

    const textStyles = [
        { label: 'Normal', value: 'normal' },
        { label: 'Title 1', value: 'h1' },
        { label: 'Title 2', value: 'h2' },
        { label: 'Title 3', value: 'h3' },
        { label: 'Title 4', value: 'h4' },
        { label: 'Title 5', value: 'h5' },
        { label: 'Subtitle', value: 'subtitle' },
        { label: 'Paragraph', value: 'paragraph' }
    ];

    const fontSizes = [
        { label: 'Small', value: '.8em' },
        { label: 'Normal', value: '1em' },
        { label: 'Large', value: '1.2em' },
        { label: 'Huge', value: '1.5em' }
    ];
    
    const defaultColors = [
        '#000000', '#58C4DD', '#236B8E', '#222222', '#444444', '#8B4513', '#F0AC5F',
        '#888888', '#83C167', '#DDDDDD', '#CD853F', '#BBBBBB', '#DC75CD', '#C55F73',
        '#FF862F', '#D147BD', '#ff0000', '#00ff00', '#0000ff', '#9A72AC', '#FC6255',
        '#5CD0B3', '#FFFF00', '#1976d2', '#009688', '#e53935', '#ffa000', '#FFFFFF',
    ];
    
    
    const [fontFamily, setFontFamily] = useState('Inter');
    const [fontSize, setFontSize] = useState('normal');
    const [textStyle, setTextStyle] = useState('normal');
    
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [strikeThrough, setStrikeThrough] = useState(false);
    const [fontColor, setFontColor] = useState('#000000');
    const [highlight, setHighlight] = useState('#ffffff');
    
    const [textAlign, setTextAlign] = useState('left');
    const [indent, setIndent] = useState(0);
    
    const [linkText, setLinkText] = useState('');
    const [linkURL, setLinkURL] = useState('');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    
    const [fontColorPopup, setFontColorPopup] = useState(false);
    const [highlightPopup, setHighlightPopup] = useState(false);
    const [customColors, setCustomColors] = useState([]);
    const [newColor, setNewColor] = useState('');
    
    useEffect(() => {
        const storedColors = JSON.parse(localStorage.getItem('customFontColors'));
        if (storedColors) setCustomColors(storedColors);
    }, []);
    
    useEffect(() => {
        localStorage.setItem('customFontColors', JSON.stringify(customColors));
    }, [customColors]);
    
    const style = {
        "fontFamily": fontFamily,
        "fontSize": fontSize,
        "textStyle": textStyle,

        "bold": bold,
        "italic": italic,
        "underline": underline,
        "strikeThrough": strikeThrough,
        "color": fontColor,
        "backgroundColor": highlight,

        "textAlign": textAlign,
        "indent": indent
    }

    // Debugging
    useEffect(()=>{
        console.log(style)
    }, [style])

    return (
        <>
            <Stack backgroundColor={'#888'} alignItems={'center'}>
                <Stack width={'100%'} 
                    direction="row" 
                    flexWrap={'nowrap'}
                    gap={1} 
                    sx={{ 
                        p: 1, 
                        backgroundColor: '#f5f5f5',
                        borderRadius: 1,
                        overflowX: 'auto',
                        flexWrap: 'nowrap'
                    }}
                >
                    <Dropdown
                        label="Font Family"
                        icon={<FontDownloadIcon />}
                        items={fontFamilies}
                        value={fontFamily}
                        onChange={(item) => setFontFamily(item.value)}
                        sx={{
                            item: (item) => ({
                                fontFamily: item.value,
                            })
                        }}
                    />
                    <Dropdown
                        label="Font Size"
                        icon={<TextFieldsIcon />}
                        items={fontSizes}
                        value={fontSize}
                        onChange={(item) => setFontSize(item.value)}
                    />
                    <Dropdown
                        label="Text Style"
                        items={textStyles}
                        value={textStyle}
                        onChange={(item) => setTextStyle(item.value)}
                    />
                    <Divider orientation="vertical" flexItem />
                    
                    <IconButton onClick={()=>setBold(!bold)} sx={{color: bold?'primary.main':'rgb(0 0 0 / 54%)'}}>
                        <Tooltip title="Bold">
                            <FormatBoldIcon />
                        </Tooltip>
                    </IconButton>
                    <IconButton onClick={()=>setItalic(!italic)} sx={{color: italic?'primary.main':'rgb(0 0 0 / 54%)'}}>
                        <Tooltip title="Italic">
                            <FormatItalicIcon />
                        </Tooltip>
                    </IconButton>
                    <IconButton onClick={()=>setUnderline(!underline)} sx={{color: underline?'primary.main':'rgb(0 0 0 / 54%)'}}>
                        <Tooltip title="Underline">
                            <FormatUnderlinedIcon />
                        </Tooltip>
                    </IconButton>
                    <IconButton onClick={()=>setStrikeThrough(!strikeThrough)} sx={{color: strikeThrough?'primary.main':'rgb(0 0 0 / 54%)'}}>
                        <Tooltip title="Strikethrough">
                            <StrikethroughSIcon />
                        </Tooltip>
                    </IconButton>
                    <IconButton onClick={() => setFontColorPopup(true)}>
                        <Tooltip title="Font Color">
                            <Stack sx={{ position: 'relative', top:0 }} alignItems={'center'}>
                                <Typography fontWeight={600} fontSize={'.8em'} fontFamily={'Arial'} color='inherit'>A</Typography>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 2,
                                        width: '120%',
                                        height: '.5vh',
                                        backgroundColor: fontColor,
                                        border: '1px solid #000'
                                    }}
                                />
                            </Stack>
                        </Tooltip>
                    </IconButton>
                    <IconButton onClick={() => setHighlightPopup(true)}>
                        <Tooltip title="Font Color">
                            <DriveFileRenameOutlineIcon/>
                        </Tooltip>
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    
                    <Dropdown
                        label="Alignment"
                        icon={textAlign === 'left' ? <FormatAlignLeftIcon /> : 
                            textAlign === 'center' ? <FormatAlignCenterIcon /> :
                            textAlign === 'right' ? <FormatAlignRightIcon /> :
                            <FormatAlignJustifyIcon />}
                        items={alignItems}
                        value={textAlign}
                        onChange={(item) => setTextAlign(item.value)}
                    />
                    <IconButton onClick={()=>setIndent(indent+1)}>
                        <Tooltip title="Increase Indent">
                            <FormatIndentIncreaseIcon />
                        </Tooltip>
                    </IconButton>
                    <IconButton onClick={()=>setIndent(indent>0?indent-1:0)}>
                        <Tooltip title="Decrease Indent">
                            <FormatIndentDecreaseIcon />
                        </Tooltip>
                    </IconButton>
                    <Divider orientation="vertical" flexItem />

                    <Dropdown
                        label="Link"
                        icon={< LinkIcon />}
                        arrow={false}
                    >
                        <Stack gap={3}>
                            <CustomInput
                                type='text'
                                placeholder='Text'
                                palette='primary'
                                useThemeColor={true}
                                name='link_text'
                                value={linkText}
                                setValue={setLinkText}
                            />
                            <CustomInput
                                type='text'
                                placeholder='URL'
                                palette='secondary'
                                useThemeColor={true}
                                name='link_url'
                                value={linkURL}
                                setValue={setLinkURL}
                            />
                        </Stack>
                    </Dropdown>
                    <Dropdown
                        label="Image"
                        icon={< ImageIcon />}
                        arrow={false}
                    >
                        <CustomInput
                            type='text'
                            placeholder='URL'
                            palette='primary'
                            useThemeColor={true}
                            name='image_url'
                            value={image}
                            setValue={setImage}
                        />
                    </Dropdown>
                    <Dropdown
                        label="Video"
                        icon={< MovieIcon />}
                        arrow={false}
                    >
                        <CustomInput
                            type='text'
                            placeholder='URL'
                            palette='primary'
                            useThemeColor={true}
                            name='video_url'
                            value={video}
                            setValue={setVideo}
                        />
                    </Dropdown>
                    <IconButton>
                        <Tooltip title="Math">
                            <FunctionsIcon />
                        </Tooltip>
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    
                    <IconButton>
                        <Tooltip title="Bullet List">
                            <FormatListBulletedIcon />
                        </Tooltip>
                    </IconButton>
                    <IconButton>
                        <Tooltip title="Numbered List">
                            <FormatListNumberedIcon />
                        </Tooltip>
                    </IconButton>
                    <IconButton>
                        <Tooltip title="Horizontal Line">
                            <RemoveIcon />
                        </Tooltip>
                    </IconButton>
                    <Divider orientation="vertical" flexItem />

                    <IconButton>
                        <Tooltip title="Code">
                            <CodeIcon />
                        </Tooltip>
                    </IconButton>
                    <IconButton>
                        <Tooltip title="More">
                            <MoreHorizIcon />
                        </Tooltip>
                    </IconButton>
                </Stack>
                <Box width={'90%'} backgroundColor={'#fff'} my={3}
                    ref={canvasRef}
                    contentEditable
                    suppressContentEditableWarning
                    onMouseUp={handleTextSelect}
                    onKeyUp={handleTextSelect}
                    sx={{ p: 2, minHeight: '100vh', border: '1px solid #ccc' }}
                >
                    Editable content here...
                </Box>
            </Stack>

            <Popup trigger={fontColorPopup} setTrigger={setFontColorPopup} title="Font Color">
                <Stack spacing={2}>
                    <Typography fontWeight="bold">Default Colors</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                        {[...defaultColors, ...customColors].map((color, i) => (
                            <IconButton key={i} onClick={() => {
                                setFontColor(color);
                                setFontColorPopup(false);
                            }}>
                                <Box
                                    sx={{
                                        width: 28,
                                        height: 28,
                                        borderRadius: 1,
                                        backgroundColor: color,
                                        border: '2px solid #000',
                                    }}
                                />
                            </IconButton>
                        ))}
                    </Stack>

                    <Divider />

                    <Typography fontWeight="bold">Add Custom Color</Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <input
                            type="color"
                            value={newColor}
                            onChange={(e) => setNewColor(e.target.value)}
                            style={{ width: 40, height: 40, border: 'none', padding: 0 }}
                        />
                        <Button
                            bgcolor={'secondary'}
                            bdcolor={'#000'}
                            color={'#fff'}
                            onClick={() => {
                                if (newColor && !customColors.includes(newColor)) {
                                    const updated = [...customColors, newColor];
                                    setCustomColors(updated);
                                    localStorage.setItem('customFontColors', JSON.stringify(updated)); // optional redundancy
                                }
                                setFontColor(newColor);
                                setFontColorPopup(false);
                                setNewColor('');
                            }}
                        >
                            Add
                        </Button>
                        <Button
                            bgcolor={'error'}
                            bdcolor={'#000'}
                            color={'#fff'}
                            onClick={() => {
                                setCustomColors([]);
                                localStorage.removeItem('customFontColors');
                            }}
                        >
                            Clear Custom Colors
                        </Button>
                    </Stack>
                </Stack>
            </Popup>
            <Popup trigger={highlightPopup} setTrigger={setHighlightPopup} title="Highlight Color">
                <Stack spacing={2}>
                    <Typography fontWeight="bold">Default Colors</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                        {[...defaultColors, ...customColors].map((color, i) => (
                            <IconButton key={i} onClick={() => {
                                setHighlight(color);
                                setHighlightPopup(false);
                            }}>
                                <Box
                                    sx={{
                                        width: 28,
                                        height: 28,
                                        borderRadius: 1,
                                        backgroundColor: color,
                                        border: '2px solid #000',
                                    }}
                                />
                            </IconButton>
                        ))}
                    </Stack>

                    <Divider />

                    <Typography fontWeight="bold">Add Custom Color</Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <input
                            type="color"
                            value={newColor}
                            onChange={(e) => setNewColor(e.target.value)}
                            style={{ width: 40, height: 40, border: 'none', padding: 0 }}
                        />
                        <Button
                            bgcolor={'secondary'}
                            bdcolor={'#000'}
                            color={'#fff'}
                            onClick={() => {
                                if (newColor && !customColors.includes(newColor)) {
                                    const updated = [...customColors, newColor];
                                    setCustomColors(updated);
                                    localStorage.setItem('customFontColors', JSON.stringify(updated));
                                }
                                setFontColor(newColor);
                                setFontColorPopup(false);
                                setNewColor('');
                            }}
                        >
                            Add
                        </Button>
                        <Button
                            bgcolor={'error'}
                            bdcolor={'#000'}
                            color={'#fff'}
                            onClick={() => {
                                setCustomColors([]);
                                localStorage.removeItem('customFontColors');
                            }}
                        >
                            Clear Custom Colors
                        </Button>
                    </Stack>
                </Stack>
            </Popup>
        </>
    );
}
