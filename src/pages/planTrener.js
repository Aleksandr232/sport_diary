import React,{useState, useEffect} from "react";
import Main from "../components/main";


export default function PlanTrener(){
    const [plan, setPlan] = useState([]);
    const [loading, setLoading] = useState(true);
  
    async function fetchUrl() {
      const response = await fetch('http://localhost:3001/api/contacts', plan);
      const json = await response.json();
      console.log(json)
      setPlan(json);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchUrl();
    }, []);
    
  
    return(
        <>
            <Main/>
            <h1>{plan?.name}</h1>
        </>
    )
}