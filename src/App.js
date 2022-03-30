import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import Admin from './Containers/Admin/Admin';
import Profile from './Containers/Profile/Profile';
import Theme from './Containers/Theme/Theme'; 
import AdminUsuario from './Containers/AdminUsuario/AdminUsuario'; 
import AdminAuth from './Containers/AdminAuth/AdminAuth'; 
import Posts from './Containers/Posts/Posts'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter> 

        <Header />
        <Routes>
          
          
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/:theme" element={<Theme/>}/> 
          <Route path="/adminUsuario" element={<AdminUsuario/>}/>
          <Route path="/adminAuth" element={<AdminAuth/>}/>
          <Route path="/posts" element={<Posts/>}/>


       
       
        </Routes>
        <Footer />
      
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
