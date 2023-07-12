import './App.css';
import Login from './Components/Login';
import Demo from './Components/demo'
import { useState } from 'react';
function App() {
  const [value,setValue] = useState('')


  return (
    <div className="App">
   

    {/* <Login  /> */}
    {/* <Dashboard/> */}
    {/* <Demo/> */}
     <div>
        {value?<Demo/>:
      <Login setValue={(value)=>setValue(value)}/>
      
    }
    
      </div>


     </div>
  );
}

export default App;
