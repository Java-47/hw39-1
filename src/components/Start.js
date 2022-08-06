import React, { useState } from 'react';
import { game } from '../utils/contants';

const Start  = (props) => {

  let [name, setName] = useState('');

  const handleChangeName = e => {
    setName(name = e.target.value.trim().toUpperCase())
  }

  const handleClickStart = () => {
    props.changePage(game);
    props.changeName(name);
  }

    return (
      <div>
        <h1>Ready For War</h1>
        <input onChange={handleChangeName} value={name} type='text' placeholder='Enter your name' />
        <button onClick={handleClickStart}>Start</button>
      </div>
    )

}

export default Start