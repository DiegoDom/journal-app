import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';
import Swal from 'sweetalert2';

export const NoteScreen = () => {

  const dispatch = useDispatch();

  const { active: note } = useSelector(state => state.notes);
  const [ formValues, handleInputChange, reset ] = useForm(note);
  const { body, title } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if(note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeleting(note.id));
      }
    })
  };

  return (
    <div className='notes__main__content'>
      <NotesAppBar/>
      <div className="notes__content">
        <input type="text" placeholder='Some awesome title' className='notes__title__input' autoComplete='off'
          value={ title } onChange={ handleInputChange } name="title"/>
        <textarea placeholder='What happened today?' className='notes__textarea'
          value={ body } onChange={ handleInputChange } name="body"></textarea>
        {
          (note.url)
          && (
            <div className="notes__image">
              <img src={ note.url } alt="Note" />
            </div>
          )
        }
      </div>
      <button className="btn btn__danger" onClick={ handleDelete }>Delete</button>
    </div>
  );
};
