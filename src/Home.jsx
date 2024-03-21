import React from 'react';
import backgroundImage from './assets/background2.jpg';
import { Box } from '@mui/material';
import Nav from './Nav';
import Footer from './Footer';

const Home = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <Nav />
            {/* Aquí va el resto de tu código */}
            <Footer />
        </Box>
    );
};

export default Home;