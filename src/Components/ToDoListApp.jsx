import { useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';


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
            cellStyle: params => params.value === 'High'? {color: 'Red'}: {color:'Black'},},
        { field: 'date', valueFormatter: params => params.value.format('DD.MM.YYYY')},
    ]);
        /* valueFormatter: params => params.dayjs(value).format('DD.MM.YYYY') */
        /* after we get the value from DataPicker, AG-Grid Column definition valueFormatter is for further value formatting */

    const[defaultColDef, setDefaulColDef] = useState({
        flex: 1, 
        minWidth: 150, 
        floatingFilter: true,
        filter: true, 
        sortable: true,
    });

    const handleAdd = ()=>{
        // console.log(todo);
        if (todo.description === ''|| todo.priority ==='' || todo.date === '')
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
                <Typography variant='body1'>Add todo:</Typography>
            </div>
            <div className='content'>
                <Stack direction='row' spacing={2} mt={2} justifyContent='center' alignItems='center'>
                    <TextField label='Description' value={todo.description} onChange={e => setTodo({...todo, description:e.target.value})} />
                    <TextField  label='Priority' value={todo.priority} onChange={e => setTodo({...todo, priority:e.target.value})} />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker  label='Date' format='DD.MM.YYYY' value={todo.date} onChange={value => setTodo({...todo, date:value})}  />
                    </LocalizationProvider>
                    {/* save the whole value get from the DatePicker value={todo.value} onChange={value=>setTodo({...todo, date:value})} 
                        then use the column formatter to format the String*/}
                    {/* Here the format attribute in the DatePicker define the Date to be a String  */}
        
                    <Button variant='outlined' color='primary' endIcon={<AddBoxIcon />} onClick={handleAdd}>Add</Button>
                    <Button variant='outlined' color='error' endIcon={<DeleteOutlineIcon />} onClick={handleDelete}>Delete</Button>
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