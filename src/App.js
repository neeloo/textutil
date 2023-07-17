// import logo from './logo.svg';
import './App.css';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
// import About from './Component/About';
import { useState } from 'react';

function App() {
  const[mode,setmode]=useState('light');

const[alert,setalert]=useState(null);

const showAtert=(message,type)=>{
     setalert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setalert(null);
     }, 1500);
}
  

  const togglemode =()=>{
    if(mode ==='light'){
      setmode ('dark');
      document.body.style.backgroundColor='grey';
      showAtert(" enable dark mode", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAtert("enable light mode", "success");
    }

  }
  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Nilu
    //     </a>
    //   </header>
    // </div>


//   start coding hear?*************************
    <>
  
{/*  1==adding Navbar.js ******************* */}

{/* <Navbar  title='TextUtil'/> */}

 {/*  2===change the name of titleand about   using prorpstype **************/}

 <Navbar  title='TextUtil'  About=' About us'  mode={mode} togglemode={togglemode}/>  

 {/* //adding ater.js***************** */}
 <Alert   alert={alert}/>   

{/*  3==for default proprs ************/} 
  {/* <Navbar/>     */}

  {/* adding textForm.js ***************************/}
  <div className="container  my-3" >
  <TextForm  showAtert ={showAtert} heading=" Enter the text to analyze" mode={mode}/>
  {/* //adding about js****************** */}
  {/* <About/> */}
  </div>
  


    </>
  );
}

export default App;
