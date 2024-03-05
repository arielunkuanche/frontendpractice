import ToDoListApp from './Components/ToDoListApp'
import ToDoListWithDelete from'./Components/ToDoListWithDelete'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
      {/* <ToDoListWithDelete /> */}
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>My Todos</Typography>
        </Toolbar>
      </AppBar>
      <ToDoListApp />
    </>
  )
}

export default App
