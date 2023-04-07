import React, { useState } from 'react';
import Alert from './Alert';
import './App.css';

export default function TextField(props) {
    const [alert,setAlert] = useState(null);

    const showAlert = (message,type)=>{
         setAlert({
            mes:message,
            type:type,
         })
        setTimeout(() => {
                setAlert(null);
        }, 1500);
    }
    const [prompt, settext]= useState("Enter text here ...")
       const handlesubmit=(e)=>{
         let temp;
          if(e === 1)
          {
            temp = prompt.toUpperCase();
            showAlert("Converted ","success");
           }
          else if(e === 2)
           {
             temp = prompt.toLowerCase();
            showAlert("Converted ","success");
           }
           else
           {
            temp =  prompt.split('').reverse().join('');
              showAlert("Converted ","success");
            }
            if(temp[0] === '$')
            showAlert("error occured ","warning");

          settext(temp)
       }

    const display = (event)=>{   //this will disply the context 
       settext(event.target.value)
    };
    const [mode, setMode] = useState(
        {
            color: "white",
            backgroundColor: "black",
        }
    )
    const [btnmode ,setbtnMode] = useState("Enable Light Mode")
    const ChangeMode = ()=>{
        if(mode.color === "white"){
            setMode({
                color: "black",
                backgroundColor: "white",
            })
            setbtnMode("Enable dark Mode")
            showAlert("Light mode enabled ","success");
        }
        else{
            setMode({
                color: "white",
                backgroundColor: "black",
            })
            setbtnMode("Enable light Mode")
            showAlert("Dark mode enable ","success");
        }
    }
    return(
        
        <div style={mode}  className="textfield-div">
            <Alert alert={alert}/>
            <h1 style={mode} className="promsHeading">{props.heading}</h1>
            <textarea style={mode} className="textarea" value={prompt} onChange={display} rows="8"></textarea>
            <div className='btn-div'>
                <button style={mode} className="btn btn-success" onClick={() => handlesubmit(1)}>{props.bt1}</button>
                <button style={mode} className="btn btn-success" onClick={() =>handlesubmit(2)}>{props.bt2}</button>
                <button style={mode} className="btn btn-success" onClick={() =>handlesubmit(3)}>{props.bt3}</button>
           </div>
           <div className='modes-btn-div' >
            <button  style={mode} onClick={ChangeMode} className="btn btn-success">{btnmode}</button>
             </div>
        </div>

    )
};



