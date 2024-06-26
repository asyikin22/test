import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import './Table.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Table = ({ books}) => {

  //function to delete book
  async function handleDeleteClick(id) {
    try {
      await axios.delete("http://localhost:3000/books/" + id)
      console.log("book is susccesfully deleted!")
      setTimeout(() => {
        window.location.reload()
      }, 500)
    } catch (error) {
      console.log(error)
    }
  }

  //function to navigate to the update page with the book ID
  const navigate = useNavigate()
  
  async function handleEditClick(id) {
    navigate(`/update/${id}`)
  }

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
        {
          field: "Actions",
          headerName: "Actions",
          flex: 1, 
          minWidth: 100,
          renderCell: (params) => (
            <>
              <IconButton 
                style={{ marginRight: '10px' }}
                color="primary"
                onClick={()=> handleEditClick(params.id)}
              >
                <EditIcon />
              
              </IconButton>

              <IconButton 
                color="secondary"
                onClick={()=> handleDeleteClick(params.id)}
              >
                <DeleteOutlineIcon />
              
              </IconButton>
            </>
          )
        }
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