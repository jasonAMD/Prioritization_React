import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'firstName',
    headerName: 'Category',
    flex: 0.5,
  },
  {
    field: 'lastName',
    headerName: 'Value',
    flex: 0.5,
  },
];

const rows = [
  { id: 1, lastName: '2020-05-17', firstName: 'Release Date'},
  { id: 2, lastName: 'Mojang', firstName: 'Primary Developer'},
  { id: 3, lastName: 'Microsoft Studios', firstName: 'Primary Publisher'},
  { id: 4, lastName: 'PC, Windows 10', firstName: 'Platforms'},
];

export default function SingleGameGrid() {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        // hideFooterPagination
        // hideFooterSelectedRowCount
        hideFooter
      />
    </Box>
  );
}