import React, { useState } from 'react'

const State = () => {
  
  let [val,setval]=useState("Creative");
  let [data,setdata]=useState();

  const test = () => {
     setval("Helloo");
  }

  const getData = () => {

     // console.log(data);

  }

  return (
    <>
          <h1>{val}</h1>
          <button onClick={test}>Click To Action</button>

          <br></br>
          <br></br>

          <input type="text" name="" onChange={(e) => {setdata(e.target.value)}} />

          <button onClick={getData}>Click</button>

          <h1>{data}</h1>

    </>
  )
}

export default State