import React from 'react';
import './App.css';
import Todotable from './components/ToDoList';
function App(){    
    const[desc, setDesc] = React.useState({description: "", day: "" });
    const[todos, setTodos] = React.useState([]);

  const addToDo = (event) => {
    setTodos([desc, ...todos]);
    setDesc({description: "", day: "" })
  };
  const syoteKayttaja = (event) => {
    setDesc({...desc, [event.target.name]: event.target.value});
  };
  function deleteButton(index){
    const filtered = todos.filter((desc, i) => i !== index);
    
    setTodos(filtered);
  }
  
  return (
    <div className="App">
      <h1>Add to do:</h1>
        <input placeholder="Description" type="description" name="description" value={desc.description} onChange={syoteKayttaja}/>
        <input placeholder="Date:" type="day" value={desc.day} name="day" onChange={syoteKayttaja}/>
        <button onClick={addToDo}>Add</button>  
        <Todotable todos={todos} deleteButton={deleteButton}/>
    </div>
  );
};
export default App;
