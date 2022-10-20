import { useState } from 'react';
import './App.css';

function App() {
const [form, setForm] = useState({firstName:'', suname:'', age:'', transport:''})
const [list, setList] = useState([]);

const handleChange = (e) => {
setForm({...form,[e.target.name]:e.target.value});
}

const handleSubmit = (e) => {
  e.preventDefaulta();

}


  return (
    <div className="App">
      <form>
      <h1> Form</h1>
      <div>
        <input type="text" name="firstName" placeholder='Name' onChange={handleChange} />
      </div>

      <div>
        <input type="text" name="surname" placeholder='Surname' onChange={handleChange}/>
      </div>

      <div>
        <input type="number" name="age" placeholder='Age' onChange={handleChange}/>
      </div>
      </form>

    <div>
      <p>Do you have transport:</p>
      <div>
      <input type="checkbox" onChange={handleChange} checked={form.transport === "yes"} />
      <label>Yes</label>
      <input type="checkbox" onChange={handleChange} checked={form.transport === "no"} />
      <label>No</label>
      </div>
      </div>
     <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
