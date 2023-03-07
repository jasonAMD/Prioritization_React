import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Handles from "../../data/Handles.json";
import { useTheme } from "@mui/material";

const SocialMediaHandles = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "Game", headerName: "Game", flex: 0.5 },
    { field: "App_id", headerName: "Steam ID" },
    {
      field: "Subreddit",
      headerName: "Subreddit",
    },
    {
      field: "Twitter",
      headerName: "Twitter",
    },
    {
      field: "Twitch_id",
      headerName: "Twitch_id",
    },
    {
      field: "Athena_Name",
      headerName: "Athena_Name",
    },
  ];

  return (
    <Box m="20px">
      <Box
        m="0 0 0 0"
        height="100vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={Handles}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default SocialMediaHandles;