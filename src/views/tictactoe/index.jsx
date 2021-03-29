import React, { useState } from 'react';
import './css/index.min.css'

function Grid(props) {
  return (
    <div className="grid" onClick={() => props.onClick()}>
      <p className="value">{props.value}</p>
    </div>
  )
}

function Tutorial() {
  const arr = Array(9).fill(null);
  const [chess, setChess] = useState(arr);
  const [xIsNext, setXIsNext] = useState(true);

  function moveInChess(idx) {
    const newArr = [].concat(chess);
    if (newArr[idx]) {
      alert('请在空白格子内落子！')
      return
    }
    newArr[idx] = xIsNext ? 'X' : 'O';
    setChess(newArr);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="box">
      {
        chess.map((i, idx) => (
          <Grid key={idx} onClick={() => moveInChess(idx)} value={i} />
        ))
      }
    </div>
  );
}

export default Tutorial;
