import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Records from "./pages/records";
import Calender from "./pages/calender";
import PlanTrener from "./pages/planTrener";
import Auth from "./components/auth";





function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Records/>}/>
        <Route path="/plan/calender" element={<Calender/>}/>
        <Route path="/plan" element={<PlanTrener/>}/>
        <Route path="/auth" element={<Auth/>}/>
    </Routes>
 </BrowserRouter>
    
  );
}

export default App;
