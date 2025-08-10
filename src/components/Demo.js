import React from 'react'
import { useState , useEffect } from 'react'
import "./Demo.css"
function Demo() {

  const [productName , setProductName] = useState();
  const [bgStyle , setbgStyle] = useState('');

  useEffect(()=> {
    setProductName("Samsung Tv");
    setbgStyle("bg-warning");

  },[]);

  return (
   <>
  <div className = "container-fluid">
    <h2 className={`text-center text-danger ${bgStyle}`}> Data Binding</h2>
    <dl>
      <dt> Name</dt>
      <dd> {productName}</dd>
    </dl>
  </div>
   </>
  )
}

export default Demo