import React,{useState, useEffect} from "react";
import ReactPlayer from 'react-player/youtube'

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
                    <h1 className="text">Дата:<div className="data">{plan?.datas}</div></h1>
                </div>
                <div className="box"> 
                    <h1 className="text">Тренировка утро:<div className="data">{plan?.moring}</div></h1>
                </div>
                <div className="box">
                    <h1 className="text">Тренировка вечер:<div className="data">{plan?.evening}</div></h1>
                </div>
                <div className="box">
                    <h1 className="text">Пульсовые зоны:<div className="data">{plan?.pulse}</div></h1>
                </div>
                <div className="box">
                    <ReactPlayer
                     width='100%'
                     height='100%'
                     url={plan?.exercise.url} />
                </div>
            </div>
        </div>
            
            
            
            
        </>
    )
}