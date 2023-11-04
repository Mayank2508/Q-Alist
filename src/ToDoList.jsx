import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListComp from "./ListComp";


const ToDoList=()=>{
const [item,setItem]=useState();
const [newItem,setNewItem]=useState([]);
const itemEvent=(event)=>{
setItem(event.target.value);
}
const listOfItems=()=>{
    setNewItem((preValue)=>{
        return [...preValue,item];
    })
    setItem('');
}

return(<>
<div>
    <div>
        <br/>
        <h1>ToDoList</h1>
        <br/>
        <input type="text" placeholder="add Items"
        onChange={itemEvent} value={item}
        />
        <Button onClick={listOfItems}>
            <AddIcon/>
            
            </Button> 
            <br/>
            <ol>
                
                {newItem.map((val,index)=>{
return <ListComp 
key={index}
text={val}/>
                })}
                </ol>      
    </div>
</div>


</>
)


}
export default ToDoList;