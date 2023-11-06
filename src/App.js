import logo from './logo.svg';
import './App.css';
import {useReducer, useState} from "react" ;
import {useEffect} from "react" ;

const initialcell = []


function App() {


    const [turn, setTurn] = useState(0)
  const [cell, setcell] = useState(initialcell)
  const [player, setPlayer] = useState("A")
    const [score, _setScore] = useState({
        A: 0, B: 0
    })

    const setScore = () => {
        let resultScore = {...score}
        resultScore[player] = resultScore[player] + 1;
        _setScore(resultScore)
    }

    const [counter, setCounter] = useState(0)

    const [reducerCounter, dispatch] = useReducer(
        (state, action) => {
            switch (action.type){
                case "INCREMENT":
                    return state + 1;
                case "DECREMENT":
                    return state - 1;
                default:
                    return state;
            }
        }, 0
    )

    const onIncrease = () => dispatch({type: "INCREMENT"})
    const onDecrease = () => dispatch({type: "DECREMENT"})

  useEffect(() =>{
      if(turn > 0) {
          changeProcedure()
          check();
      }
  },[cell]);

  const changeProcedure = () => {
      if(player === "A") setPlayer("B");
      else setPlayer("A")
  }

  const onChangeCell = (index) => {
      const resultCell = {...cell}

      if(resultCell[index]==="x" || resultCell[index]==="o")
      {
        alert("이미 선택된 셀")
        return
      }

      if(player ==="A"){
          resultCell[index] = "o"
      }else{
          resultCell[index] = "x"
      }

      setTurn(turn + 1)

      setcell(resultCell)
  }

  const check = () =>
  {
    if( (cell[0] === "o" && cell[1] === "o" && cell[2] === "o" ) || (cell[0] === "x" && cell[1] === "x" && cell[2] === "x" ) )
    {
      alert("플레이어" + player + " 승리")
      resetgame()
        setScore()
    }
    else if( (cell[3] === "o" && cell[4] === "o" && cell[5] === "o" ) || (cell[3] === "x" && cell[4] === "x" && cell[5] === "x" ) )
    {
        alert("플레이어" + player + " 승리")
        resetgame()
        setScore()

    }
    else if( (cell[6] === "o" && cell[7] === "o" && cell[8] === "o" ) || (cell[6] === "x" && cell[7] === "x" && cell[8] === "x" ) )
    {
      alert("플레이어"+player+" 승리")
      resetgame()
        setScore()

    }
    else if( (cell[0] === "o" && cell[3] === "o" && cell[6] === "o" ) || (cell[0] === "x" && cell[3] === "x" && cell[6] === "x" ) )
    {
      alert("플레이어"+player+" 승리")
      resetgame()
        setScore()
    }
    else if( (cell[1] === "o" && cell[4] === "o" && cell[7] === "o" ) || (cell[1] === "x" && cell[4] === "x" && cell[7] === "x" ) )
    {
      alert("플레이어"+player+" 승리")
      resetgame()
        setScore()
    }
    else if( (cell[2] === "o" && cell[5] === "o" && cell[8] === "o" ) || (cell[2] === "x" && cell[5] === "x" && cell[8] === "x" ) )
    {
      alert("플레이어"+player+" 승리")
      resetgame()
        setScore()
    }
    else if( (cell[0] === "o" && cell[4] === "o" && cell[8] === "o" ) || (cell[0] === "x" && cell[4] === "x" && cell[8] === "x" ) )
    {
      alert("플레이어"+player+" 승리")
      resetgame()
        setScore()
    }
    else if( (cell[2] === "o" && cell[4] === "o" && cell[6] === "o" ) || (cell[2] === "x" && cell[4] === "x" && cell[6] === "x" ) )
    {
      alert("플레이어"+player+" 승리")
      resetgame()
        setScore()
    }
    else
    {
      for(let j = 0; j<9; j++)
      {
        if(cell[j]!=="x" || cell[j]!=="o")
        {
          return;
        }
      }
      alert("무승부")
      resetgame()
    }
  }

  const resetgame =() =>
  {
    const resultcell = {...cell}
    for(let i=0; i<9; i++)
    {
      resultcell[i] = "-"
    }
    setcell(resultcell)
    setPlayer("A")

      setTurn(0)
  }

  return (
    <div className="App">
        <div>
            <div onClick={onDecrease}>-</div>
            {reducerCounter}
            <div onClick={onIncrease}>+</div>
        </div>
      <div>
        <h1>틱택토 플레이어 : {player}</h1>
          <h2>{score.A}:{score.B}</h2>
      </div>
      <div>
        <button onClick={() => onChangeCell(0)}>{cell[0] ?? "-"}</button>
        <button onClick={() => onChangeCell(1)}>{cell[1] ?? "-"}</button>
        <button onClick={() => onChangeCell(2)}>{cell[2] ?? "-"}</button>
      </div>
      <div>
        <button onClick={() => onChangeCell(3)}>{cell[3] ?? "-"}</button>
        <button onClick={() => onChangeCell(4)}>{cell[4] ?? "-"}</button>
        <button onClick={() => onChangeCell(5)}>{cell[5] ?? "-"}</button>
      </div>
      <div>
        <button onClick={() => onChangeCell(6)}>{cell[6] ?? "-"}</button>
        <button onClick={() => onChangeCell(7)}>{cell[7] ?? "-"}</button>
        <button onClick={() => onChangeCell(8)}>{cell[8] ?? "-"}</button>
      </div>
      <div>
        <button onClick={() => resetgame()}>초기화</button>
      </div>
    </div>
  );
}

export default App;
