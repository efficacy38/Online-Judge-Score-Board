import React, {useState} from 'react'
import { DataGrid, GridToolbar  } from '@material-ui/data-grid';

function DataTable({cols, rows, isLoadingData}) {
    return (
        <div style={{ height: "400px", width: "100%" }}>
        <DataGrid
          rows={Array.isArray(rows) ? rows : []}
          style={{height: "100%"}}
          columns={cols}
          pageSize={10}
          disableSelectionOnClick
          className="bg-white"
          disableColumnMenu
          components={{
            Toolbar: GridToolbar,
          }}
          loading={isLoadingData}
          columnBuffer={5}
        />
      </div>
    )
}

export default DataTable
