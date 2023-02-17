import React from 'react';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Link, useMediaQuery } from '@mui/material';

const Footer = () => {
  const isNonMediumScreens = useMediaQuery('(min-width: 900px)');

  return (
    <footer>
      <Box
        sx={{
          height: '70px',
          backgroundColor: '#191f45',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Link
          href="mailto:ivan@sample.com"
          sx={{
            color: '#fff',
            fontSize: isNonMediumScreens ? '25px' : '18px',
            fontFamily: 'Raleway',
            textDecoration: 'none',
          }}>
          <MailOutlineIcon
            fontSize="large"
            sx={{
              position: 'relative',
              top: ' 7px',
              right: isNonMediumScreens ? '6px' : '0px',
              color: '#ffd166',
            }}
          />
          ivan@sample.com
        </Link>
        <Link
          href="tel:29926325"
          sx={{
            color: '#fff',
            fontSize: isNonMediumScreens ? '25px' : '18px',
            fontFamily: 'Raleway',
            textDecoration: 'none',
          }}>
          <SmartphoneIcon
            fontSize="large"
            sx={{
              position: 'relative',
              top: ' 7px',
              right: isNonMediumScreens ? '6px' : '0px',
              color: '#ffd166',
            }}
          />
          +371 29926325
        </Link>
      </Box>
    </footer>
  );
};

export default Footer;
