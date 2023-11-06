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

  const Cell = ({index}) => {
      return (
          <button style={{width: 40, height: 40}} onClick={() => onChangeCell(index)}>{cell[index] ?? "-"}</button>
      )
  }

  const CellRowStyle = {
      gap: 10,
      display: 'flex'
  }

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: 'center'
    }}>
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            fontSize: 40
        }}>
            <div style={{}} onClick={onDecrease}>-</div>
            {reducerCounter}
            <div onClick={onIncrease}>+</div>
        </div>
      <div style={{color: "gray", padding: 20, backgroundColor: "yellow", alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
        <h1 >틱택토 플레이어 : {player}</h1>
          <h2>{score.A}:{score.B}</h2>
      </div>
        <div style={{gap: 10, display: "flex", flexDirection: 'column'}}>
          <div style={CellRowStyle}>
              <Cell index={0} />
              <Cell index={1} />
              <Cell index={2} />
          </div>
            <div style={CellRowStyle}>
              <Cell index={3} />
              <Cell index={4} />
              <Cell index={5} />
          </div>
            <div style={CellRowStyle}>
              <Cell index={6} />
              <Cell index={7} />
              <Cell index={8} />
          </div>
        </div>
      <div>
        <button style={{paddingTop: 10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20}} onClick={() => resetgame()}>초기화</button>
      </div>

        <div style={{display: "flex", flexDirection: 'row', backgroundColor: 'yellow', width: 400, height: 400, gap: 20, padding: 20}}>
            <div style={{display: "flex", backgroundColor: 'yellow', flex: 1, flexDirection: 'column', gap: 20}}>
                <div style={{display: "flex", backgroundColor: 'red', flex: 1, flexDirection: 'column'}}></div>
                <div style={{display: "flex", backgroundColor: 'red', flex: 1, flexDirection: 'column'}}></div>
                <div style={{display: "flex", backgroundColor: 'red', flex: 1, flexDirection: 'column'}}></div>
            </div>
            <div style={{display: "flex", backgroundColor: 'yellow', flex: 2, flexDirection: 'column', gap: 20}}>
                <div style={{display: "flex", backgroundColor: 'red', flex: 1, flexDirection: 'column'}}></div>
                <div style={{display: "flex", backgroundColor: 'yellow', flex: 2, flexDirection: 'row', gap: 20}}>
                    <div style={{display: "flex", backgroundColor: 'red', flex: 1, flexDirection: 'column'}}></div>
                    <div style={{display: "flex", backgroundColor: 'yellow', flex: 1.5, flexDirection: 'column', gap: 20}}>
                        <div style={{display: "flex", backgroundColor: 'red', flex: 1, flexDirection: 'column'}}></div>
                        <div style={{display: "flex", backgroundColor: 'red', flex: 1, flexDirection: 'column'}}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
