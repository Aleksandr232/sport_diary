import React,{useState} from "react";
import Auth from "./components/auth";
import Main from "./components/main";
import { AuthContext}  from "./authContext";
import {Route, Routes, BrowserRouter} from 'react-router-dom'





function App() {
  const[isAuth, setIsAuth]=useState('')
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
      {!isAuth ? <Auth/> : <Main/>}
    </AuthContext.Provider>
 </BrowserRouter>
    
  );
}

export default App;
