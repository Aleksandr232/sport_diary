import React,{useState} from "react";


export default function Tables(){
    const [data, setData] = useState('')
    return(
        <table className="table-fixed m-auto mt-20  ">
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
    <tr>
      <td>5</td>
      <td>5</td>
      <td>5</td>
      <td>5</td>
      <td>5</td>
      <td>5</td>
    </tr>
    <tr>
      <td>r</td>
      <td>r</td>
      <td>r</td>
      <td>r</td>
      <td>r</td>
      <td>r</td>
    </tr>
    <tr>
      <td>t</td>
      <td>g</td>
      <td>g</td>
      <td>g</td>
      <td>g</td>
      <td>g</td>
    </tr>
  </tbody>
</table>
    )
}