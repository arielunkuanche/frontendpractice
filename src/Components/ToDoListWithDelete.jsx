import { useState } from 'react';
import TodoTable from './TodoTable';

function ToDoListWithDelete(){
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

    const handleDelete = (index)=>{
        const updateTodoList = todos.filter((todo, i) => i!== index);
        setTodos(updateTodoList);

        //setTodos(todos.filter((todo, i)=> i!= index)); - is more simple and neat//
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
        <TodoTable todos={todos} handleDelete={handleDelete}/>

        </>
        )
    }

export default ToDoListWithDelete;