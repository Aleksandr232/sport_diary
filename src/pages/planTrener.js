import React,{useState, useEffect} from "react";
import Main from "../components/main";


export default function PlanTrener(){
    const [plan, setPlan] = useState(null);
    
    useEffect(() => {
        fetch('/api/plans')
        .then(response=>response.json())
        .then(response => setPlan(response.data))
        console.log(plan)
    }, []);
    
  
    return(
        <>
            <Main/>
            <h1>Дата:{plan?.datas}</h1>
            <h1>Тренировка утро:{plan?.moring}</h1>
            <h1>Тренировка вечер:{plan?.evening}</h1>
            <h1>Пульсовые зоны:{plan?.pulse}</h1>
            <img src={plan?.exercise.image} alt="" />
        </>
    )
}