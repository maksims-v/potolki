import React, { useState, useCallback } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Typography, Box, useMediaQuery, Chip, Stack } from '@mui/material';
import Gallery from 'react-photo-gallery-next';
import Image from 'next/image';

import fotopechat1 from '../src/image/fotopechat/1.jpg';
import fotopechat2 from '../src/image/fotopechat/2.jpg';
import fotopechat3 from '../src/image/fotopechat/3.jpg';
import fotopechat4 from '../src/image/fotopechat/4.jpg';
import fotopechat5 from '../src/image/fotopechat/5.jpg';
import fotopechat6 from '../src/image/fotopechat/6.jpg';
import fotopechat7 from '../src/image/fotopechat/7.jpg';
import fotopechat8 from '../src/image/fotopechat/8.jpg';
import fotopechat9 from '../src/image/fotopechat/9.jpg';
import fotopechat10 from '../src/image/fotopechat/10.jpg';
import gljanec1 from '../src/image/gljanec/1.jpg';
import gljanec2 from '../src/image/gljanec/2.jpg';
import gljanec3 from '../src/image/gljanec/3.jpg';
import gljanec4 from '../src/image/gljanec/4.jpeg';
import gljanec5 from '../src/image/gljanec/5.jpg';
import gljanec6 from '../src/image/gljanec/6.jpeg';
import gljanec7 from '../src/image/gljanec/7.jpeg';
import gljanec8 from '../src/image/gljanec/8.jpeg';
import gljanec9 from '../src/image/gljanec/9.jpeg';
import gljanec10 from '../src/image/gljanec/10.jpg';
import matovie1 from '../src/image/matovie/1.jpg';
import matovie2 from '../src/image/matovie/2.jpg';
import matovie3 from '../src/image/matovie/3.jpg';
import matovie4 from '../src/image/matovie/4.jpg';
import matovie5 from '../src/image/matovie/5.jpg';
import matovie6 from '../src/image/matovie/6.jpg';
import matovie7 from '../src/image/matovie/7.jpg';
import matovie8 from '../src/image/matovie/8.jpg';
import matovie9 from '../src/image/matovie/9.jpg';
import matovie10 from '../src/image/matovie/10.jpg';
import pvh1 from '../src/image/pvh/1.jpg';
import pvh2 from '../src/image/pvh/2.jpg';
import pvh3 from '../src/image/pvh/3.jpg';
import pvh4 from '../src/image/pvh/4.jpg';
import pvh5 from '../src/image/pvh/5.jpg';
import pvh6 from '../src/image/pvh/6.jpg';
import pvh7 from '../src/image/pvh/7.jpg';
import pvh8 from '../src/image/pvh/8.jpg';
import pvh9 from '../src/image/pvh/9.jpg';
import pvh10 from '../src/image/pvh/10.jpg';
import satin1 from '../src/image/satin/1.jpg';
import satin2 from '../src/image/satin/2.jpeg';
import satin3 from '../src/image/satin/3.jpeg';
import satin4 from '../src/image/satin/4.jpeg';
import satin5 from '../src/image/satin/5.jpg';
import satin6 from '../src/image/satin/6.jpg';
import satin7 from '../src/image/satin/7.jpg';
import satin8 from '../src/image/satin/8.jpg';
import satin9 from '../src/image/satin/9.jpg';
import satin10 from '../src/image/satin/10.jpg';
import divas1 from '../src/image/divas/1.jpg';
import divas2 from '../src/image/divas/2.jpg';
import divas3 from '../src/image/divas/3.jpg';
import divas4 from '../src/image/divas/4.jpg';
import divas5 from '../src/image/divas/5.jpg';
import divas6 from '../src/image/divas/6.jpg';
import divas7 from '../src/image/divas/7.jpg';
import divas8 from '../src/image/divas/8.jpg';
import divas9 from '../src/image/divas/9.jpg';
import divas10 from '../src/image/divas/10.jpg';

const matovie = [
  matovie1,
  matovie2,
  matovie3,
  matovie4,
  matovie5,
  matovie6,
  matovie7,
  matovie8,
  matovie9,
  matovie10,
];

const divas = [divas1, divas2, divas3, divas4, divas5, divas6, divas7, divas8, divas9, divas10];

const satin = [satin1, satin2, satin3, satin4, satin5, satin6, satin7, satin8, satin9, satin10];

const pvh = [pvh1, pvh2, pvh3, pvh4, pvh5, pvh6, pvh7, pvh8, pvh9, pvh10];

const gljanec = [
  gljanec1,
  gljanec2,
  gljanec3,
  gljanec4,
  gljanec5,
  gljanec6,
  gljanec7,
  gljanec8,
  gljanec9,
  gljanec10,
];

const fotopechat = [
  fotopechat1,
  fotopechat2,
  fotopechat3,
  fotopechat4,
  fotopechat5,
  fotopechat6,
  fotopechat7,
  fotopechat8,
  fotopechat9,
  fotopechat10,
];

const textArr = [
  {
    id: 0,
    name: 'Пвх',
  },
  {
    id: 1,
    name: 'Глянцевые',
  },
  {
    id: 2,
    name: 'Сатиновые',
  },
  {
    id: 3,
    name: 'Матовые',
  },
  {
    id: 4,
    name: 'Фотопечать',
  },
  {
    id: 5,
    name: 'Двухуровневые',
  },
];

const ImageLibrary = () => {
  const isNonMediumScreens = useMediaQuery('(min-width: 900px)');

  console.log();

  const [photos, setPhotos] = useState([
    {
      src: fotopechat1.src,
      width: 4,
      height: 3,
      alt: 'IESTIEPTIE GRIESTI',
    },
    {
      src: fotopechat2.src,
      width: 1,
      height: 1,
      alt: 'IESTIEPTIE GRIESTI',
    },
    {
      src: fotopechat3.src,
      width: 3,
      height: 4,
      alt: 'IESTIEPTIE GRIESTI',
    },
    {
      src: fotopechat4.src,
      width: 3,
      height: 4,
      alt: 'IESTIEPTIE GRIESTI',
    },
    {
      src: fotopechat5.src,
      width: 3,
      height: 4,
      alt: 'IESTIEPTIE GRIESTI',
    },
    {
      src: fotopechat6.src,
      width: 4,
      height: 3,
      alt: 'IESTIEPTIE GRIESTI',
    },
    {
      src: fotopechat7.src,
      width: 3,
      height: 4,
      alt: 'IESTIEPTIE GRIESTI',
    },
    {
      src: fotopechat8.src,
      width: 4,
      height: 3,
      alt: 'IESTIEPTIE GRIESTI',
    },
    {
      src: fotopechat9.src,
      width: 1,
      height: 1,
      alt: 'IESTIEPTIE GRIESTI',
    },
    {
      src: fotopechat10.src,
      width: 3,
      height: 4,
      alt: 'IESTIEPTIE GRIESTI',
    },
  ]);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [text, setText] = useState('Фотопечать');
  const [render, setRender] = useState('');

  const toggleChips = (e) => {
    setText(e.target.innerText);
    if (e.target.innerText === 'Матовые') {
      setPhotos(
        photos.map((item, i) => ({
          ...item,
          src: matovie[i].src,
        })),
      );
    } else if (e.target.innerText === 'Пвх') {
      setPhotos(
        photos.map((item, i) => ({
          ...item,
          src: pvh[i].src,
        })),
      );
    } else if (e.target.innerText === 'Сатиновые') {
      setPhotos(
        photos.map((item, i) => ({
          ...item,
          src: satin[i].src,
        })),
      );
    } else if (e.target.innerText === 'Глянцевые') {
      setPhotos(
        photos.map((item, i) => ({
          ...item,
          src: gljanec[i].src,
        })),
      );
    } else if (e.target.innerText === 'Фотопечать') {
      setPhotos(
        photos.map((item, i) => ({
          ...item,
          src: fotopechat[i].src,
        })),
      );
    } else if (e.target.innerText === 'Двухуровневые') {
      setPhotos(
        photos.map((item, i) => ({
          ...item,
          src: divas[i].src,
        })),
      );
    }
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Box
      sx={{
        m: '0 auto ',
        textAlign: 'center',
        pt: 2,
      }}>
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
        Галерея
      </Typography>
      <Image src={fotopechat1} alt="Picture of the author" placeholder="blur" />
      <Box>
        <Stack
          direction="row"
          gap={'0.5rem'}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
          }}>
          {textArr.map((item) => (
            <Chip
              key={item.id}
              sx={{ width: isNonMediumScreens ? '15%' : '40%' }}
              label={item.name}
              color="info"
              variant="outlined"
              onClick={toggleChips}
            />
          ))}
        </Stack>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'left',
            mb: 1,
            pl: '4px',
            pt: 2,
          }}>
          {text}:
        </Typography>
      </Box>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x, index) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Box>
  );
};

export default ImageLibrary;
