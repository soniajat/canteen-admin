
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockDataInvoices } from "../../data/mockData";
 
const Dashboard = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', objectFit: "cover", overflow: 'hidden', height: '126vh' }}>
        <img src="../../PIA.jpg" alt="dash" />
      </div>
    </>
  );
};
 
export default Dashboard;
 