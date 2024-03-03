import { useState } from 'react';
import TodoTable from './TodoTable';

function ToDoListWithDelete(){
    const [todo, setTodo]= useState ({
        description:'',
        date:''
    });

    const[todos, setTodos]= useState([]);
    const[showTable, setShowTable]= useState(false);

    const handleClick = ()=>{
        if (todo.description === ''&& todo.date === '')
            alert('Please input todo description and date first!')
        else
            setTodos([...todos, todo])
            setTodo({
                description:'',
                date:''
            });
            setShowTable(true);
        
    }

    const handleDelete = (index)=>{
        const updateTodoList = todos.filter((todo, i) => i!== index);
        setTodos(updateTodoList);

        // to make codes more simple and neat no need for another constant variable defined
        // setTodos(todos.filter((todo, i) => i!= index ));
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
                    <input placeholder='description' value={todo.description} onChange={e => setTodo({...todo, description:e.target.value})} />
                </label>
                <label>Date:
                    <input type='date' value={todo.date} onChange={e => setTodo({...todo, date:e.target.value})} />
                </label>
                <button onClick={handleClick}>Add</button>
            </div>
        </div>
        {showTable == true && <TodoTable todos={todos} handleDelete={handleDelete}/>}

        </>
        )
    }

export default ToDoListWithDelete;