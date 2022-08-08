import React,{useState} from "react";
import {DATA} from "./data";


export default function Tables(){
    const [open, setOpen]= useState(false)

   

    return(
     <>
     <button onClick={()=>setOpen(prev=>!prev)} className="py-2 px-4 border m-20 ml-[45%] bg-blue-400 ">{open ? "Скрыть" : "Показать"}</button>
        {open && <table  className="table-fixed m-auto mt-20 w-[700px]">
    <thead>
        <tr>
        <th>Возраст</th>
        <th>Масса</th>
        <th>Имя</th>
        <th>Страна</th>
        <th>Время</th>
        <th>Сезон</th>
        </tr>
    </thead>
    <tbody>
    {DATA.map((row, idx)=>( <tr>
        <td>{row.age}</td>
        <td>{row.weight}</td>
        <td>{row.name}</td>
        <td>{row.category}</td>
        <td>{row.value}</td>
        <td>{row.seson}</td>
        </tr>))}
    </tbody>
    </table>}
        </>
    )
}