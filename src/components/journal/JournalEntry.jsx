import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body, url }) => {

  const dispatch = useDispatch();

  const noteDate = moment(date);

  const handleEntryClick = () => {
    dispatch(activeNote(id, { title, body, date, url }));
  };

  return (
    <div className='journal__entry pointer' onClick={ handleEntryClick }>
       {
         url &&
         <div className="journal__entry__picture"
            style={{
              backgroundSize: 'cover',
              backgroundImage: `url(${url})`
            }}
          ></div>
       }
        <div className='journal__entry__body'>
          <p className='journal__entry__title'>{ title }</p>
          <p className="journal__entry__content">{ body }</p>
        </div>
        <div className="journal__entry__date__box">
          <span>{ noteDate.format('dddd') }</span>
          <h4>{ noteDate.format('Do') }</h4>
        </div>
    </div>
  );
};
