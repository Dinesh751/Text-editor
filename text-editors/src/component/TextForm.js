import React,{useState} from "react";

export default function TextForm(props){

    const [text,setText]=useState("Enter text here");

   const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Text is coverted to uppercase","success")
    //   console.log("you clicked on convert to uppercase");
    }
    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text is coverted to lowercase","success")
    }
    const handleClearText=()=>{
        setText("");
        props.showAlert("Text is cleared","success")
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
         text.select();
         navigator.clipboard.writeText(text.value);
         props.showAlert("Text is copied to clipboard","success")
    }
    const handleRemoveSpace=()=>{
      
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success")
    }
    
         
    
    return(
        <>
        <div className="container-md" >
        <div className="container" style={{color: props.mode === 'light' ? '#042743': 'white'}} >
         <h3  >{props.heading}</h3>
        <div className=" mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#1d2329':'white',color:props.mode==='light' ? '#042743': 'white'}} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpace}>Remove ExtraSpaces</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'light' ? '#042743': 'white'}} >
            <h4>your text summary</h4>
            <p>Your text has {text.split(/\s+/).filter((Element)=>{
                
                    return Element.length >0;
                
            }).length} words and {text.length} characters</p>
            <h4>preview</h4>
            <p>{text.length>0?text:"Nothing to preview"}</p>

        </div>

        </div>
        
        </>
    )
}