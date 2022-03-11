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
    String <div> style={}</div>
  </div>
}



export default App
