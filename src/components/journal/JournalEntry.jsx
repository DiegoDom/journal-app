import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div className="journal__entry__picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80)'
          }}
        ></div>
        <div className='journal__entry__body'>
          <p className='journal__entry__title'>Un nuevo dia</p>
          <p className="journal__entry__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laboriosam.</p>
        </div>
        <div className="journal__entry__date__box">
          <span>Monday</span>
          <h4>28</h4>
        </div>
    </div>
  );
};
