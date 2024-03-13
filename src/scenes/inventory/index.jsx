
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
 
const Inventory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "item_id", flex: 1, headerClassName: "header-class" },
    { field: "itemId", headerName: "image", flex: 2, headerClassName: "header-class" },
    { field: "orderItemId", headerName: "name", flex: 1, headerClassName: "header-class" },
    { field: "totalPrice", headerName: "price", flex: 1, headerClassName: "header-class" },
    { field: "roomId", headerName: "description", flex: 1, headerClassName: "header-class" },
    { field: "expectedTime", headerName: "location", flex: 1, headerClassName: "header-class" },
    { field: "dateTime", headerName: "dateTime", flex: 1, headerClassName: "header-class" },
    { field: "stage", headerName: "item_status", flex: 1, headerClassName: "header-class" },
  ];
 
 
 
 
  return (
    <Box m="20px">
      <Header
        title="Available items"
        subtitle="List of Available Items"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
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
            backgroundColor: "#630944",
            borderBottom: "none",
            color: "#FFFFFF",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "silver",
            color: "#FFFFFF",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          }
 
         
        }}
      >
      <Box
  m="40px 0 0 0"
  height="97vh"
  sx={{
  }}
>
  <DataGrid
    rows={mockDataContacts}
    columns={columns}
    components={{ Toolbar: GridToolbar }}
    disableColumnMenu
    disableColumnSelector
  />
</Box>
      </Box>
    </Box>
  );
};
 
export default Inventory;
 