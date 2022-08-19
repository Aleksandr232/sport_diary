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
            weekends={false}
            events={[
                { title: 'event 1', date: '2019-04-01' },
                { title: 'event 2', date: '2019-04-02' }
              ]}     
            />
        </div>
        
    )
}

