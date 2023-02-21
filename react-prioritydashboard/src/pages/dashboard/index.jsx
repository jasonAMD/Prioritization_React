import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from '../../data/mockData';
import { MultipleSelectChip } from '../../components/multiSelect';
import { DiscreteSlider } from '../../components/valueSlider/valueSlider';
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
      gridAutoRows="150px"
      gap="2px"
      >
      {/* Utilizatizes Box */}
      <Box
        gridColumn="span 8"
        gridRow="span 1"
        m='10px'
        backgroundColor={colors.primary[400]}
      >
        <MultipleSelectChip />
        
      </Box>
      {/* List box */}
      <Box
          gridColumn="span 4"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          margin="10px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Priority List
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.redAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.redAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      {/* Amplitude Scoring Box */}
      <Box
        gridColumn="span 4"
        gridRow="span 3"
        m='10px'
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
        gridRow="span 3"
        m='10px'
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