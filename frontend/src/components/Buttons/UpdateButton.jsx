import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

const UpdateButton = ({color, hoverCol}) => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(color),
    backgroundColor: color,
    '&:hover': {
      backgroundColor: hoverCol,
    },
  }));
  return (
    <ColorButton variant="contained" startIcon={<CheckCircleOutlinedIcon  />}>
      Update Output
    </ColorButton >
  )
}

export default UpdateButton