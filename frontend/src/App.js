import { Route, Routes } from "react-router";

import Login from "./pages/login/login";
import GlobalStyle from "./GlobalStyles";
import Register from "./pages/register/register";
import Create from './pages/Create/Create'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Hero from "./components/Hero/Hero";
import MyBlog from "./pages/MyBlog/MyBlog";
import PostDetails from "./pages/PostDetails/PostDetails";
import Editpost from "./pages/editPost/Editpost";
import Profile from "./pages/Profile/Profile";
import { UserContextProvider } from "./context/UserContext";
import About from "./pages/About/About";

function App() {
  return (
    <UserContextProvider>
      <GlobalStyle/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/write" element={<Create/>}/>
        <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
        <Route exact path="/edit/:id" element={<Editpost/>}/>
        <Route exact path="/myblogs/:id" element={<MyBlog/>}/>
        <Route exact path="/profile/:id" element={<Profile/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </UserContextProvider>
  
  );
}

export default App;
