import React,{useState} from "react";
import Auth from "./components/auth";
import Main from "./components/main";
import { AuthContext}  from "./authContext";


export default function Autaction(){
    const[isAuth, setIsAuth]=useState('')
    return(
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      {!isAuth ? <Auth/> : <Main/>}
    </AuthContext.Provider>
    )
}