import { Typography, Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { tokens } from "../../theme";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  
  return (
    <Box display="flex" justifyContent="space-between" p='10px 0px 0px 10px'>
    
      <Box>
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
        >
          PRIORITY LIST DASHBOARD
        </Typography>
        <Typography variant="h5" color={colors.redAccent[400]}>
          AMD UXG TEAM
        </Typography>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;