import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import { Register } from "./pages/register";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>

      </Routes>
      
    </div>
  
  );
}

export default App;
