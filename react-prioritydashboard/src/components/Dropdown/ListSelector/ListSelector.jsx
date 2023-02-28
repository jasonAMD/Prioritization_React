import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" width="100%" sx={{ m: 1, minWidth: 120, maxWidth:150 }}>
        <InputLabel id="demo-simple-select-standard-label">List</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={10}>General</MenuItem>
          <MenuItem value={20}>Navi3x Top 30 List</MenuItem>
          <MenuItem value={30}>ISV Game Portfolio Ranking List</MenuItem>
          <MenuItem value={40}>QA Newly Popular Priority List</MenuItem>
          <MenuItem value={50}>QA Evergreen Title List</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
