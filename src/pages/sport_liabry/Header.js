

import rowing from './images/rowing.jpg'
import grid from "./images/grid_icon.png"
import pen from "./images/pen.jpg" 
import './sport.css'


export default function Header({ onNavigate }) {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo__img" src={rowing} />
        <h1 className="logo__title">Дневник</h1>
      </div>
      <div className="filter">
        <input type="text" className="input" placeholder="Поиск" />
        <select className="input mood-select">
          <option></option>
          <option>😌</option>
          <option>😆</option>
          <option>😑</option>
          <option>🤔</option>
        </select>
      </div>
      <nav className="main-nav">
        <a href="#" className="btn btn--primary" onClick={() => onNavigate(true)}>
          <img src={grid} alt="" />
          <span>Список</span>
        </a>
        <a href="#" className="btn" onClick={() => onNavigate(false)}>
          <img className='pen' src={pen} alt="" />
          <span>Запись</span>
        </a>
      </nav>
    </header>
  )
}