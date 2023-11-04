import React, { useState } from "react";
import { questions } from "./Api";
import "./Accordian.css";
import MyAccordian from './MyAccordian';

const Accordian=()=>{

    const [data,setData]=useState(questions);
    return(

        <>
        <section className="main_div">
            <h1>Ipl questions</h1>
       { data.map((curElem)=>{
        return <MyAccordian key={curElem.id}{...curElem}/>
       })
   
       
       
       
       }
           </section>
        
        </>
    )
}
export default Accordian;