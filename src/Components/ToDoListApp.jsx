import { useState } from 'react';

function ToDoListApp(){
    const [todo, setTodo]=useState({
        description:'',
        date:''
    });

    const[todos, setTodos]=useState([]);

    const handleClick = ()=>{
        if (todo.description === ''&& todo.date === '')
            alert('Please input todo description and date first!')
        else
            setTodos([...todos, todo])
            setTodo({
                description:'',
                date:''
            });
        
    }

    return (
        <>
        <div className="header"> 
            <h3>Simple Todolist</h3>
        </div>

        <div className="AddTodoContainer">
            <div className="add-todo">
                <label>Add todo:</label>
            </div>
            <div className='content'>
                <label>Description:
                    <input value={todo.description} onChange={e => setTodo({...todo, description:e.target.value})} />
                </label>
                <label>Date:
                    <input value={todo.date} onChange={e => setTodo({...todo, date:e.target.value})} />
                </label>
                <button onClick={handleClick}>Add</button>
            </div>
        </div>

        {todos.length>0? (
            <table>
                <tbody>
                    <tr><th>Date</th><th>Description</th></tr>
                    {todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.description}</td>
                        </tr>
                        
                    )}
                </tbody>
            </table>): null}
        </>
    )
}

export default ToDoListApp