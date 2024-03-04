import { useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

import { CheckboxCellRenderer } from 'ag-grid-community';

function ToDoListApp(){
    const [todo, setTodo]=useState({
        description:'',
        priority:'',
        date:''
    });

    const[todos, setTodos]=useState([]);
    const gridRef = useRef();

    /*const handleDelete =() => {
        return <button onClick={()=>setTodos(todos.filter((todo, i) => i!=+ props))}>Detele</button>
        
    };*/

    const handleDelete =()=>{
        if(gridRef.current.getSelectedNodes().length > 0)
            setTodos(todos.filter((todo, index)=>
            index != gridRef.current.getSelectedNodes()[0].id));
        else
            alert('Please select a row first!');
    }

    const[colDefs, setColDefs] = useState([
        { field: 'description', sortable: true, filter: true, checkboxSelection: true},
        { field: 'priority', sortable: true,  filter: true, editable: true, 
            //cellEditor:'agSelectCellEditor', 
            //cellEditorParams:{values:['High','Medium','Low']},
            cellStyle: params => params.value === 'High'? {color: 'Red'}: {color:'Black'}},
        { field: 'date', sortable: true,  filter: true},
        //{field: 'delete', cellRenderer: handleDelete}
    ]);

    const[defaultColDef, setDefaulColDef] = useState({
        flex: 1, 
        minWidth: 150, 
        floatingFilter: true,
        animateRows: true
    });

    const handleAdd = ()=>{
        if (todo.description === ''&& todo.date === '' && todo.priority ==='')
            alert('Please input todo details first!')
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
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div className="ag-theme-material" style={{ height: 600, width: 650 }}>
                <AgGridReact 
                    rowData={todos}
                    defaultColDef={defaultColDef}
                    columnDefs={colDefs}
                    rowSelection='single'
                    ref={gridRef}
                    onGridReady={ params => gridRef.current = params. api}
                />
            </div>
        </div>

        </>
    )
}

export default ToDoListApp;