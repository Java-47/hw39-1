import React from 'react'
import { game } from '../utils/contants'

const Result = ({ changePage, score, result }) => {

  return (
    <div>
      <h2>{result}</h2>
      <h3>{score[0]}-{score[1]}</h3>
      <button onClick={() => changePage(game)}>Again ?</button>
    </div>
  )
}

export default Result