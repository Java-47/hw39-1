import React, { useState } from 'react';
import Game from './components/Game';
import Result from './components/Result';
import Start from './components/Start';
import { game, result, start } from './utils/contants';

const App = () => {

  const [page, setPage] = useState(start);
  const [name, setName] = useState('You');
  const [score, setScore] = useState([0, 0]);
  const [res, setRes] = useState();

  const changeName = name => {
    if (name) {
      setName(name);
    }
  }

  const changeScore = score => {
    if (score[0] > score[1]) {
      setScore(prevScore => ([prevScore[0] + 1, prevScore[1]]));
      setRes('Lose');
    }
    if (score[0] < score[1]) {
      setScore(prevScore => ([prevScore[0], prevScore[1] + 1]));
      setRes('Win');
    }
    if (score[0] === score[1]) {
      setRes('Draw');
    }
  }

  switch (page) {
    case game:
      return <Game
        nickName={name}
        changePage={setPage}
        getScore={changeScore}
      />;
    case result:
      return <Result
        changePage={setPage}
        score={score}
        result={res}
      />
    default:
      return <Start
        name={name}
        changeName={changeName}
        changePage={setPage}
      />
  }

}

export default App;
