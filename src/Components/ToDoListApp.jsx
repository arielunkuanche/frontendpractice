import { useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function ToDoListApp(){
    const [todo, setTodo]=useState({
        description:'',
        priority:'',
        date:''
    });

    const[todos, setTodos]= useState([]);
    const gridRef = useRef();

    const[colDefs, setColDefs] = useState([
        { field: 'description', checkboxSelection: true},
        { field: 'priority', editable: true, 
            cellStyle: params => params.value === 'High'? {color: 'Red'}: {color:'Black'}},
        { field: 'date'},
    ]);

    const[defaultColDef, setDefaulColDef] = useState({
        flex: 1, 
        minWidth: 150, 
        floatingFilter: true,
        filter: true, 
        sortable: true,
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
    
    const handleDelete =()=>{
        console.log(gridRef.current.getSelectedNodes()[0].id);
        if(gridRef.current.getSelectedNodes().length > 0)
            setTodos(todos.filter((todo,index)=> 
            index != gridRef.current.getSelectedNodes()[0].id));
        else
            alert('Please select a row first!');
    }

    return (
        <>
        <div className="AddTodoContainer">
            <div className="add-todo">
                <label>Add todo:</label>
            </div>
            <div className='content'>
                <Stack direction='row' spacing={2} mt={2} justifyContent='center' alignItems='center'>
                    <TextField label='Description' value={todo.description} onChange={e => setTodo({...todo, description:e.target.value})} />
                    <TextField  label='Priority'value={todo.priority} onChange={e => setTodo({...todo, priority:e.target.value})} />
                    <TextField label='date' value={todo.date} onChange={e => setTodo({...todo, date:e.target.value})} />
        
                    <Button variant='contained' onClick={handleAdd}>Add</Button>
                    <Button variant='contained' color='error' onClick={handleDelete}>Delete</Button>
                </Stack>  
            </div>
            <div className="ag-theme-material" style={{ height: 600, width: 650 }}>
                <AgGridReact 
                    rowData={todos}
                    defaultColDef={defaultColDef}
                    columnDefs={colDefs}
                    rowSelection='single'
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                />
            </div>
        </div>

        </>
    )
}

export default ToDoListApp;