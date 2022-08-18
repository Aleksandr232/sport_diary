import React from "react";
import Main from "../components/main";
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 






export default function Calender(){
    return(
        <div>
            <Main/>
            <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"         
            />
        </div>
        
    )
}