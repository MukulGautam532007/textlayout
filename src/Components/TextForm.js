import React from "react";
import { useState } from "react";
import "../Css/TextForm.css";
import'../App'

// import swal from 'sweetalert';

export default function TextArea(props) {
    const [text, setText] = useState('');
    
// Functions



const UpperCase = async () =>{
  props.setProgress(30)
  await
  props.setProgress(75)
  let newText = await text.toUpperCase();
  setText(newText)
  props.setProgress(100)
}
const LowerCase = async () =>{
  props.setProgress(10)
  await
  props.setProgress(70)
  let newText = text.toLowerCase();
  setText(await newText)
  props.setProgress(100)
}
const CopyText = async () =>{
  props.setProgress(75)
    await navigator.clipboard.writeText(text)
  props.setProgress(100)
}
const ClearText = async () =>{
  props.setProgress(10)
  await
  props.setProgress(50)
    let newText = await '';
    setText(newText)
  props.setProgress(100)

}
const Capitalze = async () =>{
  props.setProgress(10)
  const lower = text.toLowerCase();
  await
  props.setProgress(50)
  let newText = await lower.charAt(0).toUpperCase() + lower.slice(1);
  setText(newText)
  props.setProgress(100)

}
// const Bold = () =>{
//     let newText = text;
//     setText(newText)
    
// }
// const Italic = () =>{
//     let newText = text.italics();
//     setText(newText)
// }
const handleOnChange = (event) => {
    setText(event.target.value)
}

// let button = document.getElementsByClassName('text_form_button')




  return (
    <>
      <div className="text-form">
        <div className="heading">
          <h1>Format Here</h1>
        </div>

        <textarea value={text} className="textarea" onChange={handleOnChange}></textarea>

        <div className="text_form_buttons">
          <button type="button" setProgress={props.setProgress} disabled={text.length===0} onClick={UpperCase} className="text_form_button">
            UpperCase
          </button>
          <button type="button" disabled={text.length===0} setProgress={props.setProgress} onClick={Capitalze} className="text_form_button">
            Capitalize
          </button>
          <button type="button" disabled={text.length===0} setProgress={props.setProgress} onClick={LowerCase} className="text_form_button">
            LowerCase
          </button>
          <button type="button" disabled={text.length===0} setProgress={props.setProgress} onClick={CopyText} className="text_form_button">
            Copy Text
          </button>
          <button type="button" disabled={text.length===0} setProgress={props.setProgress} onClick={ClearText} className="text_form_button">
            Clear Text
          </button>
          {/* <button type="button" style={styles.bold} onClick={Bold} className="text_form_button">
            Bold
          </button> */}
          {/* <button type="button" onClick={Italic} className="text_form_button">
            Italic
          </button> */}

        </div>
          <h1 className="output_preview">Preview</h1>
          <p className="nothing_to_preview">{text.length>0?text:'Nothing to Preview.'}</p>
      </div>
    </>
  );
}
