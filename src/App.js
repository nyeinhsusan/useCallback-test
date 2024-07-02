import React, { useCallback, useState } from 'react'
import Lists from './Lists'

const App = () => {
  const [items, setItem] = useState(
    ['Wash dishes',
      'fix error',
      'Do exercise',
    ]
  )
  // const addItem = () => {
  //   setItem([...items,'Add New Item'])
  // }

  //with use Call back 
  const addItem = useCallback(()=>{
    setItem([...items,'Add new Item'])
  },[items])
  //that will render when list component change 

const[count,setCount] = useState(0);

  return (
    <div>
      <h1>Use Call Back</h1>
      <Lists items={items} addItem={addItem} />
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default App
