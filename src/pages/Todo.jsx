import {useState} from "react";


const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [content, setContent] = useState("")

    const onRegister = () => {
        setTodo([...todo, {
            title: content,
            isComplete: false
        }]);
        setContent("")
    }

    const onComplete = (index) => {
        let temptList = [...todo];
        temptList[index] = {...temptList[index], isComplete: true}
        setTodo(temptList)
    }

    const onDelete = (index) => {
        let temptList = [...todo];
        const deletedArray = temptList.splice(index,1);
        setTodo(temptList);
    }

    return (
        <div style={{height: "100vh", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: "lightblue"}}>
            <div style={{backgroundColor: "white", padding: 50, display: 'flex', borderRadius: 20, flexDirection: "column"}}>
            <div style={{fontSize: 40}}>To Do List</div>
            <div>
                <input
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />
                <button onClick={onRegister}>등록</button>
            </div>
            {
                todo.map((item, index) => {
                    return (
                        <div style={{
                            textDecoration: item.isComplete ? "line-through" : "none",
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <div>
                                {item.title}
                            </div>
                            {
                                item.isComplete ||
                                    <div>
                                        <button onClick={() => onComplete(index)}>완료</button>
                                    </div>
                            }
                            <div>
                                <button onClick={() => onDelete(index)}>삭제</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}


export default Todo;
