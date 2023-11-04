
import { useState } from 'react';
import './App.css';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Tooltip from '@mui/material/Tooltip';
import Clock from 'react-clock'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';


function App() {
  
  const [newVal,setNew]=useState(0);

  const inc=()=>{
    setNew(newVal+1);
  }
  const dec=()=>{
    setNew(newVal-1);
  }
  return (
  <>
    <Clock/>
  <h1>{newVal}</h1>
  <Tooltip title="Add">
  <button onClick={inc}><AddIcon /> 
 
  </button>
  </Tooltip>
  <Tooltip title="Delete">
  <button onClick={dec}><RemoveCircleOutlineIcon /></button>
  
  </Tooltip>
  <Button>
    +
  </Button>




  </>
  );
}

export default App;
