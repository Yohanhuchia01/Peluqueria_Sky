import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const FooterContainer = styled('footer')(({ theme }) => ({
    color:"#ffffff",
    padding: theme.spacing(2),
    textAlign: 'center',
    background:'#252525',
    minHeight: 'fit-content',
}));

const Footer = () => {
    return (
        <FooterContainer>
            <Typography>Todos los derechos reservados &copy; {new Date().getFullYear()}</Typography>
        </FooterContainer>
    );
};

export default Footer;
