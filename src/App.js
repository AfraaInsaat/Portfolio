import { Box, Container } from "@mui/material";
import React from "react";
import NavBar from "./Components/NavBar";
import LoadingScreen from "./Components/LoadingScreen";
import Home from "./Pages/Home";
import { Colors } from "./theme";
import { User_data } from "./Context";
const App = () => {
  const [loading, setLoading] = React.useState(false);

  const { page } = React.useContext(User_data);

  React.useEffect(() => {
    const loadingTimer = setTimeout(() => setLoading(true), 1500);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (!loading) return <LoadingScreen />;

  return (
    <Box sx={{ backgroundColor: "black", height: "100vh", overflow: "auto" }}>
      <Container maxWidth="xl">
        <NavBar />
        <Home />
      </Container>
    </Box>
  );
};

export default App;
