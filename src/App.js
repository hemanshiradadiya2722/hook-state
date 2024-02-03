import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  let [val,setval]=useState("");
  let [val1,setval1]=useState("");
  let [ans,setans]=useState("");


       
    const getsum=()=>{
      setans(parseInt(val) + parseInt(val1));
    }
    const getsub=()=>{
      setans(parseInt(val) - parseInt(val1));
    }
    const getmul=()=>{
      setans(parseInt(val) * parseInt(val1));
    }
    const getdiv=()=>{
      setans(parseInt(val) / parseInt(val1));
    }


  return (
   <>

      <div className="App">

        
     <div className='main'>
     <input type='text' onChange={(e) => {setval(e.target.value)}}></input>
      <input type='text' onChange={(e) => {setval1(e.target.value)}}></input>
      <br></br>
      <input type='text' value={ans}></input>
      <br></br>
      <input type='button' value={"Sum"} onClick={getsum}></input>
      <input type='button' value={"Sub"} onClick={getsub}></input>
      <input type='button' value={"Mul"} onClick={getmul}></input>
      <input type='button' value={"Div"} onClick={getdiv}></input>
     </div>


      </div> 

   </>
  );
}

export default App;