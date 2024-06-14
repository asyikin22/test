import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './Table.scss'

const Table = ({ books }) => {
  // console.log('Books in Table Component:', books)

    const columns = [ 
        { field: 'ID', headerName: 'ID', width: 90 },
        {
        field: 'Title',
        headerName: 'Title',
        editable: true,
        flex: 1,
        minWidth: 100,
        },
        {
        field: 'Author',
        headerName: 'Author',
        editable: true,
        flex: 1,
        minWidth: 100,
        },
        {
        field: 'Fiction',
        headerName: 'Fiction',
        editable: true,
        flex: 1,
        minWidth: 100,
        },
        {
        field: 'Genre',
        headerName: 'Genre',
        editable: true,
        flex: 1,
        minWidth: 100,
        },
        {
        field: 'Gender',
        headerName: 'Gender',
        editable: true,
        flex: 1,
        minWidth: 100,
        },
        {
        field: 'Origin',
        headerName: 'Origin',
        editable: true,
        flex: 1,
        minWidth: 100,
        },
        {
        field: 'Language',
        headerName: 'Language',
        editable: true,
        flex: 1,
        minWidth: 100,
        },
        {
        field: 'Pages',
        headerName: 'Pages',
        editable: true,
        flex: 1,
        minWidth: 100,
        },
        {
        field: 'Year Published',
        headerName: 'Published',
        editable: true,
        flex: 1,
        minWidth: 100,
        },
      ];

  return (
      <DataGrid
        className="table"
        rows={books}
        columns={columns}
        getRowId={(row)=> row.ID}
        rowHeight={30}              //Adjust row height
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={ {toolbar:GridToolbar }}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps: { debounceMs: 500 },
            },
        }}
        pageSizeOptions={[10, 20, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
  )
}

export default Table