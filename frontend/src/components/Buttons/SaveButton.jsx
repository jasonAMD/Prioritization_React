import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import SaveIcon from '@mui/icons-material/Save';

const SaveButton = ({name, color, hoverCol}) => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(color),
    backgroundColor: color,
    '&:hover': {
      backgroundColor: hoverCol,
    },
  }));
  return (
    <ColorButton variant="contained" startIcon={<SaveIcon  />}>
      Save {name}
    </ColorButton >
  )
}

export default SaveButton