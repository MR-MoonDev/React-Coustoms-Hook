import React from 'react'
import {useName}  from '../useMyCustomHook'
const MyHook = () => {
    const name = useName();
  return (
    <>
     <h1>My Hook1</h1> 
     <h2>{name}</h2>
    </>
  )
}
export default MyHook;
