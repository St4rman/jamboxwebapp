import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'installs', headerName: 'ID', width: 70 },
  { field: 'minInstalls', headerName: 'First name', width: 130 },
  { field: 'maxInstalls', headerName: 'Last name', width: 130 },
];

const rows = [
  { installs: 1, minInstalls: 'Snow', maxInstalls: 'Jon', age: 35 },
  { installs: 2, minInstalls: 'Lannister', maxInstalls: 'Cersei', age: 42 },
  { installs: 3, minInstalls: 'Lannister', maxInstalls: 'Jaime', age: 45 },
  { installs: 4, minInstalls: 'Stark', maxInstallse: 'Arya', age: 16 },
  { installs: 5, minInstalls: 'Targaryen', maxInstalls: 'Daenerys', age: null },
  { installs: 6, minInstalls: 'Melisandre', maxInstalls: null, age: 150 },
  { installs: 7, minInstalls: 'Clifford', maxInstalls: 'Ferrara', age: 44 },
  { installs: 8, minInstalls: 'Frances', maxInstalls: 'Rossini', age: 36 },
  { installs: 9, minInstalls: 'Roxie', maxInstalls: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}