import './App.css';
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TicTaeToe from "./pages/TicTaeToe";
import Todo from "./pages/Todo";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/tic-tae-toe" element={<TicTaeToe />}></Route>
                <Route path="/todo" element={<Todo />}></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App;
