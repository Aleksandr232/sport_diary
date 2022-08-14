import React,{useState} from "react"
import Note from "./Note"
import './sport.css'

export default function NoteList({ notes }) {
  const [ modal, setModal ] = useState(false)


  return (
    <>
      {modal
        ? (
          <main className="modal">
            <article className="full-note">
              <header className="full-note__header">
                <h2 className="full-note__title"><strong>😌</strong> Побывал в горах</h2>
                <time className="full-note__date" dateTime="2022-08-21">21 августа 2021 года</time>
                <button className="modal__btn">
                  <img src="./images/close_icon.svg" alt="close modal" />
                </button>
              </header>
              <img className="full-note__img" src="./images/full_note_img.png" alt="night sky" />
              <div className="full-note__content">Описание заметки</div>
            </article>
          </main>
        ) : (
          <main className="note-list">
            {notes.map((el) => (
              <Note key={el.id} {...el} />
            ))}
          </main>
        )
      }
    </>
  )
}