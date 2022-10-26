import React from 'react';
import './App.css';
import Todotable from './components/ToDoList';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import {Stack} from '@mui/system';
import { Button } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS
import { grid } from '@mui/system';
import TextField from'@mui/material/TextField';
import Tabs from'@mui/material/Tabs';
import Tab from'@mui/material/Tab';
import { Delete } from '@mui/icons-material';
import { Add } from '@mui/icons-material';
function App(){    
    const[desc, setDesc] = React.useState({description: "", day: "", priority:"" });
    const[todos, setTodos] = React.useState([]);
    const gridRef = React.useRef(); 
    const [value, setValue] = React.useState('Home');
    const columns = [
    {field:"description", sortable:true, filter:true, floatingFilter:true},
    {field:"day",sortable:true, filter:true, floatingFilter:true},
    {field:"priority",sortable:true, filter:true, floatingFilter:true,  cellStyle: params => params.value === "High" ? {color:'red'}:{color:'black'}}
  ]
  const addToDo = (event) => {
    setTodos([desc, ...todos]);
    setDesc({description: "", day: "", priority:"" })
  };
  const syoteKayttaja = (event) => {
    setDesc({...desc, [event.target.name]: event.target.value});
  };
  const handleChange = (event, value) => {
    setValue(value);
  };
  const deleteButton=()=>{
    if(gridRef.current.getSelectedNodes().length > 0){
      setTodos(todos.filter((desc,index)=>
      gridRef.current.getSelectedNodes()[0].childIndex !==index))
    }else{
      alert('Select row first')
    }

  }
  
  return (
    <div className="App">
      <Tabs value={value} onChange={handleChange}>
                <Tab value="Home" label="HOME" />
                <Tab value="Todos" label="TODOS" />
      </Tabs>
      {value === 'Home' && <div>Welcome to page</div>}
      {value === 'Todos' && <div>
      <h1>Add to do:</h1>
      <Stack spacing={2} direction='row' justifyContent="center" alignItems="center"> 
      
        <TextField label="Description" variant='standard' name='description' onChange={syoteKayttaja}/>
        <TextField
          id="date"
          label="Date"
          type="date"
          
          InputLabelProps={{
            shrink: true,
          }}
          name='day'
          onChange={syoteKayttaja}
        />
        <TextField label="Priority" variant='standard' name='priority' onChange={syoteKayttaja}/>
          <Button startIcon={<Add></Add>} variant='contained' onClick={addToDo}>Add</Button>  
          <Button startIcon={<Delete></Delete>} variant='contained' color='error' onClick={deleteButton}>Delete</Button>  
        </Stack>

        <div className="ag-theme-material" style ={{height:'800px', width:'40%', margin:'auto'}}>
          <AgGridReact 
          columnDefs={columns} 
          rowData={todos} 
          rowSelection="single" 
          ref={gridRef} 
          animateRows="true"
          onGridReady={params => gridRef.current = params.api}
          >
          </AgGridReact>
        </div>
        </div>}
      
        
    </div>
  );
};
export default App;
