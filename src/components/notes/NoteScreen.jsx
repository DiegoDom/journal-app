import React from 'react'
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className='notes__main__content'>
      <NotesAppBar/>
      <div className="notes__content">
        <input type="text" placeholder='Some awesome title' className='notes__title__input' autoComplete='off' />
        <textarea placeholder='What happened today?' className='notes__textarea'></textarea>
        <div className="notes__image">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Note" />
        </div>
      </div>
    </div>
  );
};
