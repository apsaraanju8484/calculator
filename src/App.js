
import './App.css';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useState } from 'react';



function App() {
  const [amount,setAmount]=useState(0)
  const [intrest,setIntrest]=useState(0)
  const [year,setYear]=useState(0)
  const [result,setResult]=useState(0)

const handleSubmit=(e)=>{
  e.preventDefault()
  if (amount==0 || intrest==0 || year==0) {
    alert("Please enter valid input")
  } else {
   let output = parseInt(amount)*parseInt(intrest)*parseInt(year)/100
   setResult(output)
  }
}

const handleResult = ()=>{
  setResult(0)
  window.location.reload()
}

  return (
    <div className="app">
     <div className="container">
      <div className="title_heading">
       <h1 className='title'>Simple Calculater</h1>
       <p className='title_para'>Calculate your Simple Intrest</p>
      </div>
      <div className="amount_card">
        <div className="card_text">
          <h3 className='total_amount' onChange={e=>setResult(e.target.value)}>₹ {result} </h3>
          <p className='total_para'>Total Simple Intrest</p>
        </div>
      </div>

<form >
  <div className="input_box">
  <TextField className="outlined-basic" label="₹ Principal Amount" variant="outlined" 
  onChange={e=>setAmount(e.target.value)} />
  </div>
  <div className="input_box">
  <TextField className="outlined-basic" label="₹ Intrest Amount" variant="outlined"
  onChange={e=>setIntrest(e.target.value)} />
  </div>
  <div className="input_box">
  <TextField className="outlined-basic" label="Year (y)" variant="outlined"
  onChange={e=>setYear(e.target.value)} />
  </div>

  <div className="btn_group ">
    <Stack direction="row" spacing={8}>
    <Button  className='btn' onClick={e=>handleSubmit(e)} type='submit' variant="contained " style={{backgroundColor:'black' , color:'white'}}>Calculate</Button>
<Button  className='btn' onClick={handleResult}  variant="outlined">Reset</Button>
    </Stack>
  </div>
</form>




     </div>
    </div>
  );
}

export default App;
