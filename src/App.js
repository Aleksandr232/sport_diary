import React,{useState} from "react";
import Auth from "./components/auth";
import Main from "./components/main";
import { AuthContext}  from "./authContext";
import { Routes, Route } from "react-router-dom";
import Records from "./components/records";
import PlanTrener from "./components/planTrener";
import Calender from "./components/calender";




function App() {
  const[isAuth, setIsAuth]=useState('')
  return (
    
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      {!isAuth ? <Auth/> : <Main/>}
      <Routes>
        <Route path="records"  element={<Records/>}/>
        <Route path="/plan" element={<PlanTrener/>}/>
        <Route path="/calender" element={<Calender/>}/>
    </Routes>
    </AuthContext.Provider>
    
    
 
    
  );
}

export default App;
