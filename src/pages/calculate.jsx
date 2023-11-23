import {useEffect, useReducer, useState} from "react";


const Calculate = () => {

    const [value, setValue] = useState(0);

    const [reducerCounter, dispatch] = useReducer(
        (state, action) => {
            switch (action.type){
                case "INCREMENT":
                    return state + 1;
                case "DECREMENT":
                    return state - 1;
                case "INITIALIZE":
                    return 0;
                default:
                    return state;
            }
        }, 0
    )


    useEffect(() => {
        console.log("변화 감지", value)
    }, [value])

    const up = () => {
        // setValue(value+1);
        dispatch({type: "INCREMENT"})
    }

    const down = () => {
        // setValue(value - 1);
        dispatch({type: "DECREMENT"})
    }

    const initialize = () => {
        dispatch({type: "INITIALIZE"})
    }

    return (
        <div style={{display: "flex", width: '100%', height: '100vh', alignItems: 'center', justifyContent: 'center', gap: 20, flexDirection: "column"}}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div onClick={up}>+</div>
                <div>{reducerCounter}</div>
                <div onClick={down}>-</div>
            </div>
            <div>
                <div onClick={initialize}>초기화</div>
            </div>
        </div>
    )
}

export default Calculate;
