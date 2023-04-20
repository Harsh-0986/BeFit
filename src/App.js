import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/exercises/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
