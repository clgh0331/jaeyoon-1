import {useState} from "react";
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';



const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [content, setContent] = useState("")
    const [Calendarinstance, onChange] = useState("")

    const caldate = new Date()

    const onRegister = () => {
        setTodo([...todo, {
            title: content,
            cdate: Calendarinstance,
            isComplete: false
        }]);
        console.log("item.cdate",Calendarinstance);
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
            
            <div>
            <Calendar onChange={onChange} value={Calendarinstance} />
            </div>

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

                    
                    console.log(item.title, moment(Calendarinstance).format("YYYYMMDD") ,"/",moment(item.cdate).format("YYYYMMDD"));

                    if(moment(item.cdate).format("YYYYMMDD") === moment(Calendarinstance).format("YYYYMMDD")) 
                    {
                        return (
                            <div style={{
                                textDecoration: item.isComplete ? "line-through" : "none",
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <div style={{display: 'flex', flexDirection: 'row'}}>
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
                            </div>

                        )
                    }
                    else
                    {
                        return
                    }



                })
            }
            </div>
        </div>
    )
}


export default Todo;
