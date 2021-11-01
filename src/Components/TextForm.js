import React from "react";
import { useState } from "react";
import "../Css/TextForm.css";
import "../App";
import Footer from "./Footer";

// import swal from 'sweetalert';

export default function TextArea(props) {
  const [text, setText] = useState("");

  // Functions
  const UpperCase = async () => {
    props.setprogress(30);
    await props.setprogress(75);
    let newText = await text.toUpperCase();
    setText(newText);
    props.setprogress(100);
  };
  const LowerCase = async () => {
    props.setprogress(10);
    await props.setprogress(70);
    let newText = text.toLowerCase();
    setText(await newText);
    props.setprogress(100);
  };
  const CopyText = async () => {
    props.setprogress(75);
    await navigator.clipboard.writeText(text);
    props.setprogress(100);
  };
  const ClearText = async () => {
    props.setprogress(10);
    await props.setprogress(50);
    let newText = await "";
    setText(newText);
    props.setprogress(100);
  };
  const Capitalze = async () => {
    props.setprogress(10);
    const lower = text.toLowerCase();
    await props.setprogress(50);
    let newText = (await lower.charAt(0).toUpperCase()) + lower.slice(1);
    setText(newText);
    props.setprogress(100);
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="text-form">
        <div className="heading">
          <h1>Format Here</h1>
        </div>

        <textarea
          value={text}
          className="textarea"
          id="textarea"
          onChange={handleOnChange}
        ></textarea>

        <div className="text_form_buttons">
          <button
            type="button"
            setprogress={props.setprogress}
            disabled={text.length === 0}
            onClick={UpperCase}
            className="text_form_button"
          >
            UpperCase
          </button>
          <button
            type="button"
            disabled={text.length === 0}
            setprogress={props.setprogress}
            onClick={Capitalze}
            className="text_form_button"
          >
            Capitalize
          </button>
          <button
            type="button"
            disabled={text.length === 0}
            setprogress={props.setprogress}
            onClick={LowerCase}
            className="text_form_button"
          >
            LowerCase
          </button>
          <button
            type="button"
            disabled={text.length === 0}
            setprogress={props.setprogress}
            onClick={CopyText}
            className="text_form_button"
          >
            Copy Text
          </button>
          <button
            type="button"
            disabled={text.length === 0}
            setprogress={props.setprogress}
            onClick={ClearText}
            className="text_form_button"
          >
            Clear Text
          </button>
        </div>
        <h1 className="output_preview">Preview</h1>
        <p className="nothing_to_preview">
          {text.length > 0 ? text : "Nothing to Preview."}
        </p>
      </div>
      <Footer />
    </>
  );
}
