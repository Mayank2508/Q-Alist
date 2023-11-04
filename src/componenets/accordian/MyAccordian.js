import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Tooltip from '@mui/material/Tooltip';

const MyAccordian=({question,answer})=>{


    const [show,setShow]=useState(false);


    return (
    <>
      <div className="main-heading">
       
        <h3>{question}</h3>
        <p onClick={()=>setShow(!show)}>{show? <Tooltip title="hide"> <IndeterminateCheckBoxIcon/> </Tooltip>:<Tooltip title="answer"><AddIcon/></Tooltip> }</p>
    </div>
      {
        show && <p className="answers">{answer}</p>
      }
      
        </>
    )
}
export default MyAccordian;