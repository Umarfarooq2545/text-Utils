import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase","success")
    }

    const handleLoClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase","success")
    }
    
    const handleClearClick = ()=>{
        let newtext = '';
        setText(newtext);
        props.showAlert("Text Cleared","success")
    }
    
    const handleExtraSpaces= ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra Spaces are removed","success")
    }
    
    const handleCopyText = ()=>{
        var copyText = document.getElementById("exampleFormControlTextarea1");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text Copied","success")
    }
    
    
    
    const handleOnChange = (event)=>{      
        setText(event.target.value);
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className="mb-3" id='mainArea' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <textarea id="exampleFormControlTextarea1" placeholder="Enter text here" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'
        }} rows="10" className="form-control"></textarea><br></br>
        <button className="btn btn-primary mx-1 my-1" id="convertToUpperCase" onClick={handleUpClick}>Convert to UpperCase</button>
        <button type='button' className="btn btn-primary mx-1 my-1" id="convertToLowerCase" onClick={handleLoClick}>Convert to LowerCase</button>
        <button type='button' className="btn btn-primary mx-1 my-1" id="clearText" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" id="copyText" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" id="handleExtraSpaces" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Summary:</h2>
        <p className='wordCount'>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes to read.</p>
        <h2>Preview</h2>
        <p className='preview'>{text.length>0?text:"Enter text to preview it here."}</p>
    </div>
    </>

  )
}
