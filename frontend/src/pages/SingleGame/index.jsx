import React from 'react'
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import GameSelector from '../../components/Dropdown/GameSelector/GameSelector';
import SaveButton from '../../components/Buttons/SaveButton';
import PieChart from '../../components/Graphs/PieChart'
import BarChart from '../../components/Graphs/BarChart'
// import Skyrim from '../../data/Skyrim.json'
import {
  Reddit,
  Twitter,
  Steam,
  YouTube,
  Twitch,
  Metacritic
} from './data.jsx'
import SocialMediaHandles from '../SocialMediaHandles';
import SingleGameGrid from '../../components/DataGrid/SingleGameGrid';

function SocialMediaBox({alt, img, title, amount}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      height="100%"
      display='grid'
      gridAutoRows="10px"
      gap="2px"
    >
      <Box
        gridRow="span 11"
        display='flex'
      >
        <Box
          alignSelf='center'
          m='auto'
          component="img"
          width="80%"
          height="70%"
          alt={alt}
          src={img}
        />
      </Box>
      <Box
        bgcolor={colors.grey[800]}
        width="70%"
        gridRow="span 2"
        borderRadius="20px"
        m='auto'
      >
        <Typography
          align='center'
          variant="h6" 
          fontWeight="600"
        > 
          {title}:
        </Typography>
      </Box>
      <Box
        bgcolor={colors.blueAccent[800]}
        width="70%"
        gridRow="span 2"
        borderRadius="20px"
        m='auto'
      >
        <Typography
          align='center'
        > 
          {amount} 
        </Typography>
      </Box>
    </Box>
  );
};

const SingleGame = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const DataSave = {
    name: "Data",
    color: colors.redAccent[700],
    hoverCol: colors.redAccent[900]
  };

  return (
    <Box
      m="5px"
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="100px"
      gap="2px"
      >
      <Box
        display="flex"
        gridColumn="span 12"
        gridRow="span 1"
        justifyContent='space-between'
      >
        <GameSelector />
        <Box m='50px 5px 0px 0px'>
          <SaveButton {...DataSave}/>
        </Box>
      </Box> 
      <Box
        display="grid"
        gridColumn="span 2"
        gridRow="span 2"
        m='5px'
        justifyContent='space-between'
        bgcolor={colors.primary[400]}
      >
        <Typography 
          color={colors.grey[100]} 
          variant="h4" 
          align="center"
          noWrap={false}
          m='10px 5px 0px 0px'
          fontWeight="600"
        >
          Single Game Viewer
        </Typography>
        <Typography 
          color={colors.grey[100]} 
          variant="h5" 
          align="center"
          noWrap={false}
          m='0px 10px 10px 10px'
        >
          The scores shown on this page correspond to the slider weights you have selected on the home page 
        </Typography>
      </Box> 
      <Box
        display="flex"
        gridColumn="span 4"
        gridRow="span 2"
        m='5px'
        justifyContent='space-between'
        bgcolor={colors.primary[400]}
      >
        <SingleGameGrid />
      </Box>
      <Box
        display="flex"
        gridColumn="span 6"
        gridRow="span 4"
        m='5px'
        justifyContent='space-between'
        bgcolor={colors.primary[400]}
      >
        <PieChart />
      </Box>  
      <Box
        display="flex"
        gridColumn="span 2"
        gridRow="span 2"
        m='5px'
        justifyContent='space-between'
        bgcolor={colors.primary[400]}
      >
        <SocialMediaBox {...Reddit}/>
      </Box> 
      <Box
        display="flex"
        gridColumn="span 2"
        gridRow="span 2"
        m='5px'
        justifyContent='space-between'
        bgcolor={colors.primary[400]}
      >
        <SocialMediaBox {...Twitter}/>
      </Box> 
      <Box
        display="flex"
        gridColumn="span 2"
        gridRow="span 2"
        m='5px'
        justifyContent='space-between'
        bgcolor={colors.primary[400]}
      >
        <SocialMediaBox {...Steam}/>
      </Box> 
      <Box
        display="flex"
        gridColumn="span 2"
        gridRow="span 2"
        m='5px'
        justifyContent='space-between'
        bgcolor={colors.primary[400]}
      >
        <SocialMediaBox {...YouTube}/>
      </Box> 
      <Box
        display="flex"
        gridColumn="span 2"
        gridRow="span 2"
        m='5px'
        justifyContent='space-between'
        bgcolor={colors.primary[400]}
      >
        <SocialMediaBox {...Twitch}/>
      </Box> 
      <Box
        display="flex"
        gridColumn="span 2"
        gridRow="span 2"
        m='5px'
        justifyContent='space-between'
        bgcolor={colors.primary[400]}
      >
        <SocialMediaBox {...Metacritic}/>
      </Box> 
      <Box
        display="flex"
        gridColumn="span 6"
        gridRow="span 2"
        m='5px'
        justifyContent='space-between'
        bgcolor={colors.primary[400]}
      >
        <BarChart />
      </Box> 
    </Box>
  )
}

export default SingleGame