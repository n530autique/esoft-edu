import { Card } from './components/Card'
import { data } from './data'
import './App.css'

import { useState } from 'react';

function App() {
  const [data1, setValue] = useState(data)
  const [isShown, setIsShown] = useState(true)
  const [btnText, setBtnText] = useState("Показать все")
  
  const showHide = () => {
    if (!isShown){
      setBtnText('Скрыть все')
      setIsShown(true)
      setValue(data.filter(item => item.progress > 0))
    } 
    else {
      setBtnText('Показать все')
      setIsShown(false)
      setValue(data.filter(item => item.progress === -1))
    }
    
  }
  const showMore50 = () => {
    setValue(data.filter(item => item.progress >= 50))
  }

  const showLess50 = () => {
    setValue(data.filter(item => item.progress < 50))
  }


  return (

    <div className="App">
      <div className="container">
        <button onClick={showHide}>{btnText}</button>
        <button onClick={showMore50}>от 50 до 100</button>
        <button onClick={showLess50}>до 50</button>

      </div>



      {data1.map(item => (
      <div key={item.id}>
        <Card props={ item }></Card>
      </div>
    ))}
    {/* {
      data.filter((item) => item.progress > value ).map(
        item => (
          <div key={item.id}>
            <Card props={ item }></Card>
          </div>
        )
      )
    } */}
    </div>
  );
}

export default App;
