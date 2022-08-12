/* eslint-disable no-undef */
import React,{useState, useEffect} from "react"
import { MOODS, API_KEY  } from "./data"
import { v4 as uuidv4 } from 'uuid';

import search from './images/search_icon.svg'

import './sport.css'

export default function AddNote({ addNote }) {
  const [ selectedImage, setSelectedImage ] = useState({})
  const [ gallery, setGallery ] = useState([])

  function onSubmit(e) {
    e.preventDefault()
    
    const form = new FormData(e.target)
    const data = Object.fromEntries(form)
    
   
    data.id = uuidv4()
    data.image = selectedImage.src.large || './images/note_img.png'

    console.log(data)
    addNote(data)
  }

  function onSearch(e) {
    e.preventDefault()

    const form = new FormData(e.target)
    const search = form.get('search')

    if(!search) return

    fetch(`https://api.pexels.com/v1/search?query=${search}`, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setGallery(data.photos)
      })
  }

  useEffect(() => {
    fetch('https://api.pexels.com/v1/curated', {
      headers: {
        Authorization: API_KEY,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setGallery(data.photos)
      })
  }, [])


  return (
    <main>
      <div className="note-img note-img--filled"></div>
      <form className="add-form" onSubmit={onSubmit}>
        <input
          name="title"
          type="text" 
          className="input" 
          placeholder="Название" 
        />
        <div className="add-form__row">
          <select name="mood" className="input mood-select">
            <option></option>
            {MOODS.map((el) => <option key={el}>{el}</option>)}
          </select>
          <input 
            name="date"
            type="date" 
            className="input" 
            placeholder="Дата" 
          />
        </div>
        <textarea
          name="content"
          className="input add-form__textarea" 
          placeholder="Описание"
        ></textarea>
        <button  className="btn add-form__btn">
          <img src="" alt="" />
          <span>Создать</span>
        </button>
      </form>

  
      <section className="add-image">
        <form className="search" onSubmit={onSearch}>
          <input type="search" className="input" name="search" />
          <button className="btn search__btn">
            <img src={search} alt="search" />
          </button>
        </form>
        <section className="gallery">
          {gallery.map((image) => (
            <button
              className={'image' + (selectedImage.id === image.id ? ' image--selected' : '')}
              key={image.id}
              onClick={() => setSelectedImage(image)}
            >
              <img className="image__source" src={image.src.large} alt="" />
            </button>
          ))}
        </section>
      </section>
    </main>
  )
}
