import { Route, Routes } from "react-router";

import Login from "./pages/login/login";
import GlobalStyle from "./GlobalStyles";
import Register from "./pages/register/register";
import Create from "./pages/Create/Create";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Hero from "./components/Hero/Hero";
import MyBlog from "./pages/MyBlog/MyBlog";

function App() {
  return (
    <div>
      <GlobalStyle/>
  
      <Navbar/>
      {/* <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/write" element={<Create/>}/>

      </Routes> */}
      <MyBlog/>
      <Footer/>
    </div>
  
  );
}

export default App;
