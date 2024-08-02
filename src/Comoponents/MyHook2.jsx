import React from 'react'
import {useName}  from '../useMyCustomHook'
const MyHook2 = () => {
    const name = useName();
  return (
    <>
     <h1>My Hook 2 </h1> 
     <h2>{name}</h2>
    </>
  )
}
export default MyHook2
