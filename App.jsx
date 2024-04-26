import Nav from './comp/Nav.jsx'
import { useState } from 'react'

function App() {
  const [name, setName] = useState("AliJeeRaza")
  function changeName() {
    setName("Kainat is here")
  }
  const [num, setNum] = useState(1)
  function changeNum() {
    setNum(14)
  }
  const [num1 , setNum1] = useState(1)
  function add () {
  setNum1(num1+1)
  }

  function del (){
    setNum1(num1-1)
  }
 
 
  function reset (){
    setNum1(1)
  }
 

  



  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
      <h2>{num}</h2>
      <button onClick={changeNum}>Change Value</button>
      <h3>{num1}</h3>
      <button onClick={add}>Add Value</button>
      <button onClick={del}>Del Value</button>
      <button onClick={reset}>Reset Value</button>
      <Nav name="Alijee" age={24} />
      <Nav name="Hassan" age={25} />
      <Nav name="Raza" age={26} />

    </div>
  )
}
export default App