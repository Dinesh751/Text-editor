import React from "react";


export default function About(props){
    
  let myStyle={
      color:props.mode==="dark"?"white":"#042743",
      backgroundColor:props.mode==="dark"?"#042743":"white"
    }
   
    
    return (
    <>
   <div className="container my-2" style={myStyle}>
    <h1>About Us</h1>
   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
     TextUtils gives you a way to analyze your text an quickly
     and efficiently. Be it word count, character count
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a free character counter tool that provides instant character count and word count
        for a given text. Reports the no.of words and characters. Thus it is 
        suitable for writing text with word/ character limit
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong> Browser Compatible </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        this word counter software work in any web browser such as Chrome,Firefox,Internet Explorer
        ,safari and opera.It suits to count charecter in Facebook,blog,books ,excel,pdf document,essays,etc
      </div>
    </div>
  </div>
</div>

   </div>
    </>
    )
}