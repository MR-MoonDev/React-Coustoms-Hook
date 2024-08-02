import React from 'react'
import { useName } from '../useMyCustomHook'
const MyHook3 = () => {
    const name = useName();
  return (
    <>
     <h1>My Hook 3</h1> 
     <h2>{name}</h2>
            
    </>
  )
}

export default MyHook3
