import { useState } from 'react';


function TodoList(){
    const [todo, setTodo] = useState({
        description:'',
        date:''
    });
    const[todos, setTodos] = useState([]);

    const handleClick = ()=>{
        if(todo.description === '' && todo.date ==='')
            alert('Please input description and date first!')
        else
            setTodos([...todos, todo]);
            setTodo({
            description:'',
            date:''
            });
    }


    return(
        <>
           <input 
           placeholder='Description' 
           value={todo.description}
           onChange={ e => setTodo({...todo, description:e.target.value})}
           />
           <input type='date'
            value={todo.date}
            onChange={e => setTodo({...todo, date:e.target.value})}
            />
           <button onClick={handleClick}>Add Todo</button>

           <table>
                <tbody>
                    {
                        todos.map((todo, index) => 
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                        </tr>
                        )
                    }
                </tbody>
           </table>
        </>
    );
}

export default TodoList;