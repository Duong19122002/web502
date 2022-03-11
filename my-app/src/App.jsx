import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'


const ShowInfo = (props) => {
  return <div>Show {props.name}</div>
}

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useSate("green");
  const [myStatus, setMySate] = useSate(false);
  const [products, setProducts] = useSate([{ id: 1, name: "A" }, { id: 2, name: "B" }]);
  return <div>
    Number: {count}<br />
    String <div style={{ backgroud: color, width: 100, height: 100 }}> Content</div>
    Boolean: {myStatus ? "Da ket hon" : "Chua ket hon"}<br/>
    <hr/>
    Number: {count}<br/><button onclick={changeCount}>Click count</button>
  </div>
}



export default App
