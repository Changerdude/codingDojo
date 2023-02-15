import { useState } from "react";

const TodoList = props =>{
    const [todoList,setTodoList] = useState([]);
    const [todoText,setTodoText] = useState("");
    const [idCounter, setIdCounter] = useState(0);

    const removeItem = (item) => {
        const newList = todoList.filter((todo) => todo.id !== item.id);
        setTodoList(newList);
    }

    const updateDone = (item) => {
        const newList = todoList.map((todo) => {
            if(todo.id === item.id){
                todo.isDone = !todo.isDone;
            }
            return todo;
        })
        setTodoList(newList);
    }
    const addItem = () => {
        setTodoList([...todoList, {id:idCounter,text:todoText,isDone:false}]);
        setIdCounter(idCounter+1);
        setTodoText("");
    }

    return(
        <>
            <div className="mb gap" style={{marginTop: "10px"}}>
                <label htmlFor="text">ToDo:</label>
                <input type="text" name="text" id="text" onChange={(e) => setTodoText(e.target.value)} value={todoText}/>
            </div>
            <button className="mb"onClick={() => addItem()}>Add</button>
            <hr />
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                {
                    todoList.map((todo ,i) => {
                        return(
                            <div className="gap mb border"key={i}>
                                <span style={todo.isDone ? {textDecoration: "line-through"} : null}>{todo.text}</span>
                                <input type="checkbox" name="isDone" id="isDone" checked={todo.isDone ? "checked" : null } onClick={() => {updateDone(todo)}} value="isDone"/>
                                <button onClick={() => {removeItem(todo)}}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TodoList;