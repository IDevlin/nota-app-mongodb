import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {

  const [data, setData] = useState([])
  console.log(data)

  useEffect(()=>{
    fetch('/index').then(res=> res.json()).then(data => setData(data))
  },[fetch])
 

  return (
    <div className="App">

      <h1>App</h1>
      <ul>
      { data.map((num) => <li>{num}</li>) }
      </ul>
    </div>
  )
}

export default App
