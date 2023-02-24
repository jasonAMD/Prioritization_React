import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import rankinglist from '../../data/rankinglist.json'
import { MultipleSelectChip } from '../../components/multiSelect';
import { DiscreteSlider } from '../../components/valueSlider/valueSlider';
import { SelectVariants } from '../../components/singleSelect';
import { ListLengthSlider } from '../../components/valueSlider/listLengthSlider'
import { 
  redditSubscriber,
  twitterFollower,
  steamFollower,
  youtubeViews,
  benchmarkUtilization,
  metacriticScore,
  releaseDate,
  benchmarkUtilizationTrend,
  socialMediaGrowthAcceleration,
  athenaPlayerBase,
  twitchViewers
 } from '../../components/valueSlider/sliderInfo';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      margin="auto"
      width="100%"
      height="100%"
      // backgroundColor={colors.blueAccent[700]}
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
            <ListLengthSlider />
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
            <Box
              gridColumn="span 4"  
            >
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                Priority List
              </Typography>
            </Box>
            <Box
              display="flex"
              gridColumn="span 2"
              justifyContent="space-between"
            >
              <Typography color={colors.grey[100]} variant="h6" fontWeight="600">
                Rank
              </Typography>
              <Typography color={colors.grey[100]} variant="h6" fontWeight="600" width='40%'>
                Score
              </Typography>
              
            </Box>
          </Box>
          {rankinglist.map((GameInfo, i) => (
            <Box
              key={`${GameInfo.Game}-${i}`}
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
              display="grid"
              gridTemplateColumns="repeat(6, 1fr)"
            >
              <Box
                gridColumn="span 4"
              >
                <Typography
                  color={GameInfo.Signing === "AMD" ? colors.redAccent[500] : GameInfo.Signing === "Intel" ? colors.blueAccent[500] :
                         GameInfo.Signing === "Nvidia" ? colors.greenAccent[500] : colors.grey[200]}
                  variant="h6"
                  fontWeight="600"
                >
                  {GameInfo.Game}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {GameInfo.Signing}
                </Typography>
              </Box>
              <Box
                display="flex"
                gridColumn="span 2"
                justifyContent="space-between"
                p="5px"
              >
              <Box color={colors.grey[100]}>{GameInfo.Rank}</Box>
                <Box
                  backgroundColor={GameInfo.Signing === "AMD" ? colors.redAccent[700] : GameInfo.Signing === "Intel" ? colors.blueAccent[700] :
                                   GameInfo.Signing === "Nvidia" ? colors.greenAccent[700] : colors.grey[700]}
                  height='22px'
                  width='40%'
                  borderRadius="4px"
                  textAlign="center"
                  align='center'
                >
                  {GameInfo.Final_score}
                </Box>
              </Box>
            </Box>
          ))}
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
          <Box
            // backgroundColor="red"
            gridColumn="span 5"
          >
            <MultipleSelectChip />
          </Box>
          <Box
            // backgroundColor="blue"
            gridColumn="span 2"
          >
            <SelectVariants />
          </Box>
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
        <Typography
          variant="h4"
          textAlign="center"
          color={colors.redAccent[100]}
          p='4px 0 10px 0'
          fontWeight="bold"
        >
          Amplitude Scoring Box
        </Typography>
        <DiscreteSlider {...redditSubscriber}/>
        <DiscreteSlider {...twitterFollower}/>
        <DiscreteSlider {...steamFollower}/>
        <DiscreteSlider {...youtubeViews}/>
        <DiscreteSlider {...benchmarkUtilization}/>
        <DiscreteSlider {...metacriticScore}/>
        
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
        <Typography
          variant="h4"
          textAlign="center"
          color={colors.redAccent[100]}
          p='4px 0 10px 0'
          fontWeight="bold"
        >
          Longevity Scoring Box
        </Typography>
        <DiscreteSlider {...releaseDate}/>
        <DiscreteSlider {...benchmarkUtilizationTrend}/>
        <DiscreteSlider {...socialMediaGrowthAcceleration}/>
        <DiscreteSlider {...athenaPlayerBase}/>
        <DiscreteSlider {...twitchViewers}/>
      </Box>
        
    </Box>
  )
}

export default Dashboard