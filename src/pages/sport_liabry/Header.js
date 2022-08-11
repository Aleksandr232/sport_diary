

import logo from './images/logo.svg'
import grid from "./images/grid_icon.png"
import pen from "./images/pen_icon.svg" 
import './sport.css'


export default function Header({ onNavigate }) {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo__img" src={logo} />
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
          <img src={pen} alt="" />
          <span>Запись</span>
        </a>
      </nav>
    </header>
  )
}