import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function ToDoListApp(){
    const [todo, setTodo]=useState({
        description:'',
        priority:'',
        date:''
    });

    const[todos, setTodos]=useState([]);

    const[colDefs, setColDefs] = useState([
        { field: 'description', sortable: true, filter: true},
        { field: 'priority', sortable: true,  filter: true,
            cellStyle: params => params.value === 'High'? {color: 'Red'}: {color:'Black'}},
        { field: 'date', sortable: true,  filter: true}
    ]);

    const handleClick = ()=>{
        if (todo.description === ''&& todo.date === '' && todo.priority ==='')
            alert('Please input todo description and date first!')
        else
            setTodos([...todos, todo])
            setTodo({
                description:'',
                priority:'',
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

                <label>Priority:
                    <input value={todo.priority} onChange={e => setTodo({...todo, priority:e.target.value})} />
                </label>

                <label>Date:
                    <input type='date' value={todo.date} onChange={e => setTodo({...todo, date:e.target.value})} />
                </label>
                <button onClick={handleClick}>Add</button>
            </div>
            <div className="ag-theme-material" style={{ height: 600, width: 650 }}>
                <AgGridReact 
                    rowData={todos}
                    columnDefs={colDefs}
                />
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

export default ToDoListApp;