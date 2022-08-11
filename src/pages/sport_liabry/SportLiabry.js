import React,{useState} from "react"
import Header from "./Header"
import NoteList from "./NoteList"
import AddNote from "./AddNote"
import {defaultNotes} from './data'
import MainAccount from "../../components/main_account"

import './sport.css'

export default function SportLiabry() {
  const [isNoteList, setIsNoteList ] = useState(true)
  const [ notes, setNotes ] = useState(defaultNotes)

  function onNavigate(val) {
    setIsNoteList(val)
  }

  function addNote(newNote) {
    setNotes([...notes, newNote])
  }


  const className = 'container' + (isNoteList ? '' : ' add-note')
  
  return (
    <>
    <MainAccount/>
    <div className={className}>
      <Header
        onNavigate={onNavigate}
      />
      {isNoteList ? <NoteList notes={notes} /> : <AddNote addNote={addNote} />}
    </div>
  </>
  )
}
