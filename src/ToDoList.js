import React, { useState } from 'react';
function ToDoList(){    
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
      <table>
        <tbody>
          <tr><th>Description</th><th>Day</th></tr>
          {todos.map((desc,index) => 
           <tr key={index}>
              <td>{desc.description}</td>
              <td>{desc.day}</td>
              <td><button onClick={()=>deleteButton(index)}>Delete</button></td>
           </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default ToDoList;
