import React, { useState } from 'react';
import { Box, Typography, useMediaQuery, Slider, Stack, Radio, OutlinedInput } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';

const griestiArrRus = [
  'ПВХ',
  'Глянцевые',
  'Сатиновые',
  'Матовые',
  'Фотопечать',
  'Лакированные',
  'Двухуровневые',
];
const griestiArrLat = [
  'PVC',
  'Glancēts',
  'Satīns',
  'Matēts',
  'Fotogrāfiju drukāšana',
  'Lakots',
  'Divpakāpju',
];

const griestiOptionsRus = [
  {
    id: 1,
    name: 'Кол-во люстр',
    price: 15,
  },
  {
    id: 2,
    name: 'Точечные светильники',
    price: 7,
  },
  {
    id: 3,
    name: 'Led повсветка (за метр)',
    price: 5,
  },
  {
    id: 4,
    name: 'Кол-во углов',
    price: 5,
  },
  {
    id: 5,
    name: 'Кол-во труб',
    price: 5,
  },
  {
    id: 6,
    name: 'Световые линии (за метр)',
    price: 12,
  },
];

const griestiOptionsLat = [
  {
    id: 1,
    name: 'Lustru skaits',
    price: 15,
  },
  {
    id: 2,
    name: 'Prožektori',
    price: 7,
  },
  {
    id: 3,
    name: 'LED apgaismojums (uz metru)',
    price: 5,
  },
  {
    id: 4,
    name: 'Stūru skaits',
    price: 5,
  },
  {
    id: 5,
    name: 'Cauruļu skaits',
    price: 5,
  },
  {
    id: 6,
    name: 'Gaismas līnijas (uz metru)',
    price: 12,
  },
];

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }),
);

const Calculator = ({ language }) => {
  const isNonSmallScreens = useMediaQuery('(min-width: 600px)');
  const isNonMedium2Screens = useMediaQuery('(min-width: 900px)');

  const [price, Setprice] = useState(0);
  const [sliderValue, SetSliderValue] = useState(1);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [thirdValue, setThirdValue] = useState(0);
  const [fourthValue, setFourthValue] = useState(0);
  const [fifthValue, setFifthValue] = useState(0);
  const [sixthValue, setSixthtValue] = useState(0);

  const ckecboxValue = (value) => {
    if (value === 0) {
      Setprice(23);
    } else if (value === 1) {
      Setprice(23);
    } else if (value === 2) {
      Setprice(23);
    } else if (value === 3) {
      Setprice(23);
    } else if (value === 4) {
      Setprice(25);
    } else if (value === 5) {
      Setprice(25);
    } else if (value === 6) {
      Setprice(40);
    }
  };

  const getCalc = (e) => {
    SetSliderValue(e.target.value);
  };

  const optionValue = (value, priceSum) => {
    if (value === 1) {
      setFirstValue(priceSum);
    } else if (value === 2) {
      setSecondValue(priceSum);
    } else if (value === 3) {
      setThirdValue(priceSum);
    } else if (value === 4) {
      setFourthValue(priceSum);
    } else if (value === 5) {
      setFifthValue(priceSum);
    } else if (value === 6) {
      setSixthtValue(priceSum);
    }
  };

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
    let checked = false;
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  return (
    <Box
      id="calc"
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        pt: isNonSmallScreens ? 3 : 2,
        alignItems: 'center',
        pb: 5,
      }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
        {language ? 'КАЛЬКУЛЯТОР' : 'KALKULATORS'}
      </Typography>
      <Box
        sx={{
          fontFamily: 'Raleway',
          fontSize: isNonSmallScreens ? '20px' : '12px',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: '16px',
          mb: 1,
        }}>
        {language ? 'Приблизительная стоимость от:' : 'Aptuvenās izmaksas no:'}
        <Typography
          variant="h3"
          sx={{
            fontSize: '25px',
            pl: 1,
            pr: 1,
            pb: 0.4,
            color: '#1976d2',
            fontWeight: '600',
          }}>
          {sliderValue * price +
            firstValue +
            secondValue +
            thirdValue +
            fourthValue +
            fifthValue +
            sixthValue}{' '}
        </Typography>
        EUR
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isNonMedium2Screens ? 'row' : 'column',
        }}>
        <Box
          sx={{
            mr: 1,
            width: isNonMedium2Screens ? '50%' : '100%',
          }}>
          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                mb: 1,
                borderBottom: '3px dashed',
                borderColor: '#ffd166',
                fontWeight: 'bold',
                pb: '6px',
              }}>
              {language ? 'ФАКТУРА:' : 'TEKSTŪRA:'}
            </Typography>
            <Stack
              component="form"
              spacing={2}
              noValidate
              autoComplete="off"
              sx={{ pl: 0.5, flexGrow: isNonMedium2Screens ? 0 : 1 }}>
              <RadioGroup sx={{ flexDirection: 'row' }} name="use-radio-group" defaultValue="">
                {(language ? griestiArrRus : griestiArrLat).map((item, i) => (
                  <MyFormControlLabel
                    key={item}
                    onChange={() => ckecboxValue(i)}
                    value={item}
                    label={item}
                    control={<Radio sx={{ p: 0.5 }} />}
                  />
                ))}
              </RadioGroup>
            </Stack>
            <Typography
              sx={{ pt: isNonSmallScreens ? 2 : 1, fontSize: '20px', fontWeight: 'bold' }}>
              {language ? 'Площадь вашего потолка:' : 'Jūsu griestu platība:'}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Slider
                sx={{ width: '80%', pr: 2, height: '8px', mr: 2, left: '9px' }}
                onChange={getCalc}
                defaultValue={0}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
              <Typography variant="button" sx={{ pr: 1, fontSize: '20px' }}>
                {sliderValue}
              </Typography>
              <Typography variant="button" sx={{ fontSize: '20px' }}>
                м²
              </Typography>
            </Box>
            <Typography>
              {language
                ? 'Цена включает в себя: одну люстру, обход одной трубы, монтаж профилей, и установку потолка.'
                : 'Cenā ietilpst: viena lustra, viena cauruļu apvedceļš, profilu montāža, uzstādīšana griesti.'}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            ml: isNonMedium2Screens ? 1 : 0,
            flexGrow: 1,
            width: isNonMedium2Screens ? '40%' : '100%',
          }}>
          <Typography
            sx={{
              fontSize: '20px',
              mb: 1,
              borderBottom: '3px dashed',
              borderColor: '#ffd166',
              fontWeight: 'bold',
              pb: '6px',
            }}>
            {language ? 'ДОПОЛНИТЕЛЬНО:' : 'PAPILDUS:'}
          </Typography>
          <FormGroup
            aria-label="position"
            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            {(language ? griestiOptionsRus : griestiOptionsLat).map((item) => (
              <OutlinedInput
                onChange={(e) => optionValue(item.id, item.price * e.target.value)}
                key={item.id}
                type="number"
                placeholder={item.name}
                sx={{
                  m: isNonMedium2Screens ? 0.7 : '3px',
                  width: '45%',
                  height: isNonMedium2Screens ? undefined : '50px',
                }}
              />
            ))}
          </FormGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
