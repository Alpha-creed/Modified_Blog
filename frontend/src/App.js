import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import { Register } from "./pages/register";
import { Home } from "./pages/Home";
import Create from "./pages/Create";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/write" element={<Create/>}/>

      </Routes>
      
    </div>
  
  );
}

export default App;
