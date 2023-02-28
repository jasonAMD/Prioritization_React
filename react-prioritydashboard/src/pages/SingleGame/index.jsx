import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const SingleGame = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      margin="auto"
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="85px"
      gap="2px"
      >
      {/* Utilizatizes Box */}
      <Box
        gridColumn="span 3"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        m='5px'
      >
        <Box display='grid'>
        </Box>
      </Box>
      <Box
        gridColumn="span 5"
        gridRow="span 1"
        backgroundColor={colors.primary[400]}
        overflow="auto"
        margin="5px"
        >
        <Box
          display="grid"
          gridTemplateColumns="repeat(8, 1fr)"
          gridColumn="span 5"
          gridRow="span 2"
          m='auto'
          backgroundColor={colors.primary[400]}
        >
          <Box
            gridColumn="span 8"
            m='0px 10px 0px 0px'
          >
          </Box>
        </Box>
      </Box>
      {/* List box */}
      <Box
          gridColumn="span 4"
          gridRow="span 8"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          margin="5px"
        >
          <Box
            display="grid"
            gridTemplateColumns="repeat(6, 1fr)"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
          </Box>
        </Box>
      <Box
          gridColumn="span 5"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          margin="5px"
        >
        <Box
          display="grid"
          gridTemplateColumns="repeat(8, 1fr)"
          gridColumn="span 5"
          gridRow="span 2"
          m='0px 0px -18px 0px'
          backgroundColor={colors.primary[400]}
          gridAutoRows="60px"
        >
        </Box>
      </Box>
      {/* Amplitude Scoring Box */}
      <Box
        gridColumn="span 4"
        gridRow="span 6"
        m='5px'
        backgroundColor={colors.primary[400]}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        
      </Box>
      {/* Longevity Scoring box  */}
        <Box
        gridColumn="span 4"
        gridRow="span 6"
        m='5px'
        backgroundColor={colors.primary[400]}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
      </Box>
        
    </Box>
  )
}

export default SingleGame