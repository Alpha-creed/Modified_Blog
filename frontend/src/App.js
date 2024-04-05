import { Route, Routes } from "react-router";

import Login from "./pages/login/login";
import GlobalStyle from "./GlobalStyles";
import Register from "./pages/register/register";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Register/>
      {/* <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/write" element={<Create/>}/>

      </Routes>
       */}
    </div>
  
  );
}

export default App;
