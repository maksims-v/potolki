import { AppBar, Box, Typography, useMediaQuery, Link, Divider, Button } from '@mui/material';
import CheckCircleOutlineTwoToneIcon from '@mui/icons-material/CheckCircleOutlineTwoTone';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CalculateIcon from '@mui/icons-material/Calculate';

import logo from '../public/logo.jpeg';

const listRus = [
  'Оригинальные материалы от производителя потолков',
  'Гарантия 10 лет на все комплектующие и работу',
  'Быстрый монтаж - производство и монтаж в течении 1-3 дней',
  'Бесплатный выезд замерщика и расчета работ (по Риге)',
  'Замена поврежденного покрытия',
];

const listLat = [
  'Oriģinālie materiāli no griestu ražotāja',
  '10 gadu garantija visām detaļām un darbam',
  'Ātra uzstādīšana - izgatavošana un uzstādīšana 1-3 dienu laikā',
  'Bezmaksas mērītāja izbraukšana un darbu aprēķins (Rīgā)',
  'Bojātā pārklājuma nomaiņa',
];

const NavBar = ({ language, setLanguage }) => {
  const isNonSmallScreens = useMediaQuery('(min-width: 600px)');
  const isNonMediumScreens = useMediaQuery('(min-width: 900px)');

  return (
    <AppBar
      sx={{
        color: 'white',
        position: 'relative',
        minHeight: isNonMediumScreens ? '80vh' : '100vh',
        background: `url(${logo.src})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          width: '95%',
          zIndex: 3,
          display: isNonMediumScreens ? undefined : 'flex',
          justifyContent: isNonMediumScreens ? undefined : 'space-between',
        }}>
        <Link
          color="error"
          href="#calc"
          sx={{
            position: isNonMediumScreens ? 'absolute' : undefined,
            top: '20px',
            left: '20px',
            color: '#fff',
            fontSize: isNonMediumScreens ? '25px' : '15px',
            fontFamily: 'Raleway',
            textDecoration: 'none',
          }}>
          {language ? 'КАЛЬКУЛЯТОР' : 'KALKULATORS'}
          <CalculateIcon
            fontSize="large"
            sx={{
              position: 'relative',
              top: '7px',
              left: isNonMediumScreens ? '6px' : '2px',
              color: '#ffd166',
            }}
          />
        </Link>
        <Link
          href="tel:29926325"
          sx={{
            position: isNonMediumScreens ? 'absolute' : undefined,
            top: '20px',
            right: '20px',
            color: '#fff',
            fontSize: isNonMediumScreens ? '25px' : '16px',
            fontFamily: 'Raleway',
            textDecoration: 'none',
          }}>
          <SmartphoneIcon
            fontSize="large"
            sx={{
              position: 'relative',
              top: ' 6px',
              right: isNonMediumScreens ? '6px' : '0px',
              color: '#ffd166',
            }}
          />
          +371 29926325
        </Link>
        <Button
          onClick={() => setLanguage(!language)}
          sx={{
            position: 'absolute',
            color: '#fff',
            fontSize: '20px',
            top: isNonMediumScreens ? '20px' : undefined,
            right: '50%',
            fontWeight: 'bold',
            transform: 'translateX(50%)',
          }}>
          {language ? 'LV' : 'RU'}
        </Button>
      </Box>

      <Typography
        variant="h1"
        fontSize={isNonSmallScreens ? undefined : '25px'}
        sx={{ zIndex: '2', pt: isNonMediumScreens ? 10 : 10, pb: isNonMediumScreens ? 7 : 10 }}>
        {language ? 'НАТЯЖНЫЕ ПОТОЛКИ' : 'IESTIEPTIE GRIESTI'}
      </Typography>

      <Box sx={{ zIndex: '2', flexGrow: '1' }}>
        <Box
          gap={isNonMediumScreens ? '1rem' : '0.5rem'}
          sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h2"
            fontSize={isNonSmallScreens ? undefined : '20px'}
            sx={{ zIndex: '2', pb: isNonMediumScreens ? 0 : 0, textAlign: 'center' }}>
            {language ? 'Натяжные потолки по всей Латвии' : 'Iestieptie griesti visā Latvijā'}
          </Typography>
          <Divider
            sx={{
              borderColor: '#ffd166',
              zIndex: 3,
              width: isNonSmallScreens ? '100%' : '90%',
              alignSelf: 'center',
            }}
          />
          {language
            ? listRus.map((item) => (
                <Typography
                  key={item}
                  fontSize={isNonSmallScreens ? '20px' : '14px'}
                  sx={{ pl: 3, pr: 3 }}>
                  <CheckCircleOutlineTwoToneIcon
                    fontSize={isNonSmallScreens ? 'large' : 'medium'}
                    sx={{
                      position: 'relative',
                      top: isNonSmallScreens ? '7.5px' : '5px',
                      right: '5px',
                      color: '#ffd166',
                    }}
                  />
                  {item}
                </Typography>
              ))
            : listLat.map((item) => (
                <Typography
                  key={item}
                  fontSize={isNonSmallScreens ? '20px' : '14px'}
                  sx={{ pl: 3, pr: 3 }}>
                  <CheckCircleOutlineTwoToneIcon
                    fontSize={isNonSmallScreens ? 'large' : 'medium'}
                    sx={{
                      position: 'relative',
                      top: isNonSmallScreens ? '7.5px' : '5px',
                      right: '5px',
                      color: '#ffd166',
                    }}
                  />
                  {item}
                </Typography>
              ))}
        </Box>
      </Box>

      <Box
        className="layout"
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0, .35)',
        }}></Box>
      {isNonMediumScreens ? undefined : (
        <ArrowDownwardIcon
          fontSize="large"
          sx={{
            color: '#ffd166',
            zIndex: 2,
            position: 'relative',
            bottom: '20px',
          }}
        />
      )}
    </AppBar>
  );
};

export default NavBar;
