import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  
  

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        
      </Box>
      <Box display="block" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="75%"
                  height="100%"
                  src={`../../PIA.jpg`}
                  style={{ cursor: "pointer" }}
                />
              </Box>
        
          </Box>

  );
};

export default Dashboard;
