import React,{useState, useEffect} from "react";
import Main from "../components/main";

import './plan.css'

export default function PlanTrener(){
    const [plan, setPlan] = useState(null);
    
    useEffect(() => {
        fetch('http://localhost:3000/api/plans')
        .then(response=>response.json())
        .then(response => setPlan(response.data))
    }, []);
    
  
    return(
        <>
            <Main/>
        <div className="container">
            <div className="grid_plan">
                <div className="box">
                    <h1>Дата:{plan?.datas}</h1>
                </div>
                <div className="box"> 
                    <h1>Тренировка утро:{plan?.moring}</h1>
                </div>
                <div className="box">
                    <h1>Тренировка вечер:{plan?.evening}</h1>
                </div>
                <div className="box">
                    <h1>Пульсовые зоны:{plan?.pulse}</h1>
                </div>
                <div className="box">
                    <img src={plan?.exercise.image} alt="" />
                </div>
            </div>
        </div>
            
            
            
            
        </>
    )
}