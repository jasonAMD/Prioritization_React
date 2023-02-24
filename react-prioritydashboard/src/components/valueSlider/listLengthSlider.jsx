import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, useTheme } from '@mui/material';
import { tokens } from "../../theme";

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

export function ListLengthSlider() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="flex"
      textAlign="center"
      width="100%"
      m="auto"
    >
      <Box width="30%" p="2px">
        <Typography 
            variant='h6'
            color={colors.primary[100]}
            fontWeight="bold"
            align='center'
            m = "10px"
            noWrap={false} 
        >
            Choose a length for the list
        </Typography>
      </Box>
      <Box m="20px 0px 10px 0px" width="60%">
        <ThemeProvider theme={sliderTheme}>
            <Slider
              color="primary"
              defaultValue={2}
              valueLabelDisplay="auto"
              step={1}
              marks={true}
              min={0}
              max={5}
            />
        </ThemeProvider>
      </Box>
    </Box>
  );
}