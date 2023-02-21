import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, useTheme } from '@mui/material';
import { tokens } from "../theme";

function valuetext(value) {
  return `${value}°C`;
}

const sliderTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#e7ac2ca0',
      darker: '#ccac20c3',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export function DiscreteSlider() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width='80%'
      m="auto"
      p="20px" 
    >
      <Typography 
        variant='h6'
        color={colors.grey[300]}
        fontWeight="bold"
        align='center'>
          Reddit
      </Typography>
      <ThemeProvider theme={sliderTheme}>
        <Slider
          color="primary"
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
      </ThemeProvider>
    </Box>
  );
}
