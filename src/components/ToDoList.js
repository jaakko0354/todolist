import React from 'react';

export default function ToDoList(props){
  return(<div>
      <table>
          <tbody>
            <tr><th>Description</th><th>Day</th></tr>
            {props.todos.map((desc,index) => 
            <tr key={index}>
                <td>{desc.description}</td>
                <td>{desc.day}</td>
                <td><button onClick={()=>props.deleteButton(index)}>Delete</button></td>
            </tr>
            )}
          </tbody>
        </table>
    </div>
    );
   
}
