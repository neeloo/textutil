import React, { useState } from 'react'
export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log(" uppercase was clicked :"  + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAtert("convert to uppercase","success");

    };

    const handleLpClick = () => {
        // console.log(" Lowercase was clicked :"  + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAtert("convert to lowercase","success");

    };
    //clear text*************
    const handleclearClick = () => {
        let newtext = '';
        setText(newtext);
        props.showAtert("clear text","success");
    }
    // dowanload text**********
    // const downloadTxtFile = () => {
    //     const newtext = document.createnewtext("a");
    //     const file = new Blob([document.getnewtextById('myInput').value], {type: 'text/plain'});
    //     newtext.href = URL.createObjectURL(file);
    //     newtext.download = "myFile.txt";
    //     document.body.appendChild(newtext); // Required for this to work in FireFox
    //     newtext.click();
    //     setText(newtext);
    //   }

    // repalce the world*************
    const handleReplaceClick = () => {
        let newtext = text.replaceAll();
        setText(newtext);

    };
    // reverse the text**************
    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
        props.showAtert("reverse text","success");
    };


    // removes whitespace from the string including newlines
    const WhiteSpace = () => {
        let newtext = text.replace(/\s/g, '')
        setText(newtext)
        props.showAtert("remove space","success");

    };

    // to encode text to base64
    const base64Encod = () => {
        setText(btoa(text));
        props.showAtert("convert to base64encode","success");
    };

    // to decode base64 to text
    // const base64Decode =() => {
    //     setText(atob(text));
    // };

    // copy yhe text**********************
    const handlecopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAtert("copy text","success");
    }


    const handleOnchange = (event) => {
        // console.log(" uppercase was change");
        setText(event.target.value);

    };

    const [text, setText] = useState('');
    // text="new text" ; // worng way to change  text
    // setText("new text");   //correct way to  change text

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange}
                        style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8" ></textarea>
                </div>
                <button className="btn btn-dark " onClick={handleUpClick}> Convert to UpperCase</button>
                <button className="btn btn-dark mx-2" onClick={handleLpClick}> Convert to LowerCase</button>
                <button className="btn btn-dark mx-2" onClick={handleclearClick}> Clear text</button>
                <button className="btn btn-dark mx-2" onClick={handleReplaceClick}> Replace world</button>
                <button className="btn btn-dark mx-2" onClick={handleReverse}> Reverse the text</button>
                <button className="btn btn-dark mx-2" onClick={WhiteSpace}> remove whitespace</button>
                <button className="btn btn-dark mx-2" onClick={base64Encod}>Encode base</button>
                {/* <button className="btn btn-dark mx-2" onClick={base64Decode}>Decode base</button> */}
                {/* <button className="btn btn-dark mx-2" onClick={downloadTxtFile}>Dowanload txt</button> */}
                <button className="btn btn-dark mx-2" onClick={handlecopy}>copy text</button>


            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>your text summery</h2>
                <p>{text.split(" ").length} words ans {text.length} charcter</p>
                <p>{0.008 * text.split(" ").length} minute read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ?text:"Enter somthing preview hear"}</p>
            </div>
        </>
    )
};
