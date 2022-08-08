import React,{useState} from "react";
import Auth from "./components/auth";
import { AuthContext}  from "./authContext";
import Account from "../pages/account";


export default function Autaction(){
    const[isAuth, setIsAuth]=useState('')
    return(
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      {!isAuth ? <Auth/> : <Account/>}
    </AuthContext.Provider>
    )
}