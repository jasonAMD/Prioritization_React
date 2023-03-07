import React from 'react'
import SaveButton from '../../components/Buttons/SaveButton'
import { Box, useTheme, Typography, Button } from "@mui/material";
import { tokens } from "../../theme";
import GameSelector from '../../components/Dropdown/GameSelector/GameSelector';
import { ResponsiveLine } from '@nivo/line'
import data from "../../data/FakeLine.json"
import ScoreSelector from '../../components/Dropdown/MetricSelector/MetricSelector';
import RangePicker from '../../components/Calender/RangePicker/RangePicker';
import DoubleArrowTwoToneIcon from '@mui/icons-material/DoubleArrowTwoTone';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import UpdateButton from '../../components/Buttons/UpdateButton';

const HistoricView = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const DataSave = {
    name: "Data",
    color: colors.redAccent[700],
    hoverCol: colors.redAccent[900]
  };

  const UpdateOutput = {
    color: colors.greenAccent[700],
    hoverCol: colors.greenAccent[900]
  };

  return (
    <Box
      m="5px"
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="90px"
      gap="2px"
      >
      <Box
        display="grid"
        gridColumn="span 3"
        gridRow="span 6"
        justifyContent='space-between'
        bgcolor={colors.primary[400]}
        m="5px"
      >
        <Box>
          <Typography 
            color={colors.grey[100]} 
            variant="h4" 
            align="center"
            noWrap={false}
            m='10px 5px 0px 0px'
            fontWeight="600"
          >
            Game Metric Historic Viewer
          </Typography>
          <Typography 
            color={colors.grey[100]} 
            variant="h5" 
            align="center"
            noWrap={false}
            m='0px 10px 10px 10px'
          >
            The scores metric shown on this page correspond to the slider weights you have selected on the home page 
          </Typography>
        </Box>
        <Box display='flex' >
          <GameSelector />
        </Box>
        <Box>
          <ScoreSelector />
        </Box>
        <Box display='flex' gap="20px" m='5px'>
          <RangePicker />
          <Box mt='15px'>
            <DoubleArrowTwoToneIcon />
          </Box>
          <RangePicker />
        </Box> 
        <Box display='flex' justifyContent="space-between" m="5px">
          <UpdateButton {...UpdateOutput}/>
          <SaveButton {...DataSave}/>
        </Box>
      </Box>
      <Box 
        bgcolor={colors.primary[400]}
        gridRow="span 6" 
        gridColumn="span 9"
        m="5px"
      >
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[]}
        />   
      </Box> 
    </Box>
  )
}

export default HistoricView