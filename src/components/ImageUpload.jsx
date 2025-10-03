import React, { useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';

const ImageUpload = ({ val, icon, setVal, required }) => {
    const [fileName, setFileName] = useState(val ? val.name : '');
    const [fileURL, setFileURL] = useState(val ? URL.createObjectURL(val) : '');
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setVal(file);
        setFileName(file.name);
        setFileURL(URL.createObjectURL(file))
    };

    const handleClearImage = () => {
        setVal('');
        setFileName('');
        setFileURL('')
    };

    function truncateString(str) {
        if (str.length > 15) {
            return str.slice(0, 15) + '...';
        } else {
            return str;
        }
    }      

    return (
        <Stack className="col" spacing={2}>
            {val ? (
                <Button variant='outlined' color='error' startIcon={<ImageIcon />} endIcon={<CloseIcon sx={{zIndex:5}} onClick={handleClearImage} />}>
                    <Link to={fileURL} target='_blank'>
                        <Stack style={{width: "100%"}} direction={'row'}>
                            <Typography color={"#f44336"} variant='p' textTransform={"None"}>{truncateString(fileName)}</Typography>
                        </Stack>
                    </Link>
                </Button>
            ) : (
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={icon || <CloudUploadIcon />}
                >
                    Upload Image
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleImageChange}
                        required={required}
                    />  
                </Button>
            )}
        </Stack>
    );
};

export default ImageUpload;