import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NormalizedScores from '../../../data/NormalizedScores.json'
import { FormHelperText } from '@mui/material';

export default function GameSelector() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: '265px', maxWidth: '265px'}}>
        <InputLabel id="demo-simple-select-autowidth-label">Game Selector</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age} 
          onChange={handleChange}
          autoWidth
          label="Game Selector"
          variant='filled'
          sx={{filled: 'red'}}
        >
        {/* rankinglist.map((GameInfo, i) => ( */}
        {NormalizedScores.map((PointInfo, i) => (
          <MenuItem value={i}>
            {PointInfo.Game}
          </MenuItem>
        ))}
        </Select>
        <FormHelperText>Select a game to see how it has been scored</FormHelperText>
      </FormControl>
    </div>
  );
}