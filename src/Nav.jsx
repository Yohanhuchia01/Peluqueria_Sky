import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuButtonClick = () => {
        setIsMenuOpen(true);
    };

    const handleButtonClick = (route) => {
        navigate(`/${route}`);
        setIsMenuOpen(false);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                {!isMenuOpen && (
                    <Button color="inherit" onClick={handleMenuButtonClick}>
                        Menú
                    </Button>
                )}
                {isMenuOpen && (
                    <>
                        <Button color="inherit" onClick={() => handleButtonClick('gallery')}>
                            Galería
                        </Button>
                        <Button color="inherit" onClick={() => handleButtonClick('services')}>
                            Servicios
                        </Button>
                        <Button color="inherit" onClick={() => handleButtonClick('contact')}>
                            Contacto
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Nav;