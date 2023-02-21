import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeSettings } from '@/styles/theme';
import { Container } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Header from '../../components/Header';
import Footer from 'components/Footer';
import Calculator from 'components/Calc';
import About from 'components/About';
import Head from 'next/head';

const Home = () => {
  const theme = createTheme(themeSettings());
  const [language, setLanguage] = useState(true);
  const isNonMediumScreens = useMediaQuery('(min-width: 900px)');

  return (
    <main>
      <Head>
        <title>IESTIEPTIE GRIESTI</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://potolki-8z93-6u3uc0rmk-maksims-v.vercel.app/" />
        <meta
          name="description"
          content="Piekaramie Griesti | Iestieptie, nostiepjamie griesti Rīgā un Latvijā"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Header language={language} setLanguage={setLanguage} />
        <Container
          sx={{
            backgroundColor: '#f2f2f2',
            width: isNonMediumScreens ? '55%' : '100%',
          }}>
          <Calculator language={language} />
          <About language={language} />
        </Container>
        <Footer />
      </ThemeProvider>
    </main>
  );
};

export default Home;
