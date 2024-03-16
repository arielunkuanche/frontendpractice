import ToDoListApp from './Components/ToDoListApp'
import ToDoListWithDelete from'./Components/ToDoListWithDelete'
import './App.css'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <AppBar position='static' sx={{backgroundColor:'black', height:110}}>
          <Toolbar>
            <Typography variant='h4' align='center'>Welcome to TodoList App with React Router</Typography>
          </Toolbar>
      </AppBar>

      {/* <ToDoListWithDelete /> */}
      <Box component='div'sx={{display:'inline', p:1, m:1, fontSize:'1rem'}}>
        <nav>
          <Link style={{padding: '0 20px'}} to={"/"} >Home</Link>
          <Link style={{padding: '0 20px'}} to={"/about"} >About</Link>
          <Link style={{padding: '0 20px'}} to={"/contact"} underline='hover'>Contact</Link>
        </nav>
      <Outlet />
      </Box>
      
    
    </>
  )
}

export default App
