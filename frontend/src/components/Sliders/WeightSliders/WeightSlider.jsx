import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, useTheme } from '@mui/material';
import { tokens } from "../../../theme";

const sliderTheme = createTheme({
  palette: {
    primary: {
      main: '#ff4343b5',
      darker: '#ccac20c3',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export function DiscreteSlider({
  name, 
  colorType,
  defaultValue,
  step,
  marks,
  min,
  max,
  img, 
  alt
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width='80%'
      m="auto"
    >
      <Box 
        display="flex" 
        justifyContent="center"
        height="30px"
        >
        <Box
            component="img"
            sx={{
              height: '30px',
              width: '30px',
            }}
            alt={alt}
            src={img}
        />
        <Typography 
          alignSelf="center"
          variant='h5'
          color={colors.primary[100]}
          fontWeight="bold"
          align='center'
          p="0 0px 0 5px"
          >
            {name}
        </Typography>
      </Box>
      <ThemeProvider theme={sliderTheme}>
        <Slider
          color={colorType}
          defaultValue={defaultValue}
          valueLabelDisplay="auto"
          step={step}
          marks={marks}
          min={min}
          max={max}
        />
      </ThemeProvider>
    </Box>
  );
}