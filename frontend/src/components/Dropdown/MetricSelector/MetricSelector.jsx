import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NormalizedScores from '../../../data/NormalizedScores.json'
import { FormHelperText } from '@mui/material';

export default function ScoreSelector() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: '265px', maxWidth: '265px' }}>
        <InputLabel id="demo-simple-select-autowidth-label">Metric Selector</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age} 
          onChange={handleChange}
          autoWidth
          label="Metric Selector"
          variant='filled'
          sx={{filled: 'red'}}
        >
          <MenuItem value={1}>Score</MenuItem>
          <MenuItem value={2}>Reddit Subscribers</MenuItem>
          <MenuItem value={3}>Twitter Followers</MenuItem>
          <MenuItem value={4}>Steam Followers</MenuItem>
          <MenuItem value={5}>YouTube Views</MenuItem>
          <MenuItem value={6}>Twitch Viewers</MenuItem>
        </Select>
        <FormHelperText>Select the metric you want to view</FormHelperText>
      </FormControl>
    </div>
  );
}