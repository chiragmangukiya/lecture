import React, { useState } from 'react'

const Calc = () => {

     let [no1,setno1]=useState();
     let [no2,setno2]=useState();
     let [ans,setans]=useState();

     const calc = (sign) => {
          
          
          if(sign == '+'){
               setans(parseInt(no1)+parseInt(no2));
          }
          if(sign == '-'){
               setans(parseInt(no1)-parseInt(no2));
          }
          if(sign == '*'){
               setans(parseInt(no1)*parseInt(no2));
          }
          if(sign == '/'){
               setans(parseInt(no1)/parseInt(no2));
          }

     }

  return (
    <>

     No1 : <input type="text" name="" onChange={(e) => {setno1(e.target.value)}}></input>
     <br></br>
     <br></br>
     No2 : <input type="text" name="" onChange={(e) => {setno2(e.target.value)}}></input>
     <br></br>
     <br></br>
     <input type="button" value="+" onClick={(s) => {calc(s.target.value)}}></input>
     <input type="button" value="-" onClick={(s) => {calc(s.target.value)}}></input>
     <input type="button" value="*" onClick={(s) => {calc(s.target.value)}}></input>
     <input type="button" value="/" onClick={(s) => {calc(s.target.value)}}></input>
     <br></br>
     <br></br>
     <h1>{ans}</h1>


    </>
  )
}

export default Calc