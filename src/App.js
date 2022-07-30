import React,{useState} from "react";
import Auth from "./components/auth";
import Main from "./components/main";
import { AuthContext}  from "./authContext";
import { Routes, Route } from "react-router-dom";
import Records from "./components/records";
import PlanTrener from "./components/planTrener";



function App() {
  const[isAuth, setIsAuth]=useState('')
  return (
    
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <>
        <Routes>
          <Route path="/"  element={<Records/>}/>
          <Route path="/plan" element={<PlanTrener/>}/>
          {!isAuth ? <Auth/> : <Main/>}
          </Routes>
      </>
    </AuthContext.Provider>
    
  );
}

export default App;
