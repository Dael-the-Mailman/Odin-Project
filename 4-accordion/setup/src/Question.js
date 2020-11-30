import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info}) => {
  const [show, setShow] = useState(false)
  const showInfo = () =>{
    setShow(!show);
  }

  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={showInfo}>
          {(show) ? <AiOutlinePlus/> : <AiOutlineMinus/>}
        </button>
      </header>
      {(show) ? <p>{info}</p> : <></>}
    </div>
  );
};

export default Question;
