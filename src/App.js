import React from 'react';
import './App.css';
import Todotable from './components/ToDoList';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import {Stack} from '@mui/system';
import { Button } from '@mui/material';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS
import { grid } from '@mui/system';
function App(){    
    const[desc, setDesc] = React.useState({description: "", day: "", priority:"" });
    const[todos, setTodos] = React.useState([]);
    const gridRef = React.useRef(); 
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
      <h1>Add to do:</h1>
      <Stack spacing={2} direction='row' justifyContent="center" alignItems="center"> 
      
        Description: {" "}<input placeholder="Description" type="description" name="description" value={desc.description} onChange={syoteKayttaja}/>
        Date: {" "}<input placeholder="Date:" type="date" value={desc.day} name="day" onChange={syoteKayttaja}/>
        Priority: {" "}<input placeholder="Priority:" type="text" value={desc.priority} name="priority" onChange={syoteKayttaja}/>
               
          <Button variant='contained' onClick={addToDo}>Add</Button>  
          <Button variant='contained' color='error' onClick={deleteButton}>Delete</Button>  
        </Stack>

        <Todotable todos={todos} deleteButton={deleteButton}/>

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
        
    </div>
  );
};
export default App;
