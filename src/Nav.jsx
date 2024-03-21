import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box, Slide, Grid, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [timeout, setTimeout] = useState(2000); // tiempo de entrada
    const navigate = useNavigate();

    const handleMenuButtonClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setTimeout(isMenuOpen ? 100 : 1000); // tiempo de salida
    };

    const handleButtonClick = (route) => {
        navigate(`/${route}`);
        setIsMenuOpen(false);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <IconButton color="inherit" onClick={handleMenuButtonClick}>
                            {isMenuOpen ? <CloseIcon /> : <Typography>HOME</Typography>}
                        </IconButton>
                    </Grid>
                    <Grid item>
                            <Slide direction="right" in={isMenuOpen} mountOnEnter unmountOnExit timeout={timeout}>
                                <Box>
                                    <Button color="inherit" onClick={() => handleButtonClick('gallery')}>
                                        Galería
                                    </Button>
                                    <Button color="inherit" onClick={() => handleButtonClick('services')}>
                                        Servicios
                                    </Button>
                                    <Button color="inherit" onClick={() => handleButtonClick('contact')}>
                                        Contacto
                                    </Button>
                                </Box>
                            </Slide>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;