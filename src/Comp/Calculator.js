import React, { useState } from 'react'
import '../App.css';


const Calculator = () => {

     let [no,setno]=useState('');
     let [fval,setfval]=useState('');
     let [sign,setsign]=useState('');
     let [erase,seterase]=useState('');

     const num = (n) => {
          setno(no+n);
     }
    
     const action = (a) => {
          setfval(no);
          setno('');
          setsign(a);
          if(a == 'C'){
               setno('');
          }
     }     
     const back = () => {
          seterase(no);
          setno(erase.substr(0,erase.length-1));
     }
     const ans = () => {
          if(sign == '+'){
               setno(parseInt(fval)+parseInt(no));
          }
          if(sign == '-'){
               setno(parseInt(fval)-parseInt(no));
          }
          if(sign == 'x'){
               setno(parseInt(fval)*parseInt(no));
          }
          if(sign == '/'){
               setno(parseInt(fval)/parseInt(no));
          }
     }
     

  return (
    <>
     <table align="center" cellSpacing={0} cellPadding={10} width="25%"> 
          <tbody>
               <tr>
                    <td colSpan={4}>
                         <input type="text" name className="txt" value={no} />
                    </td>
               </tr>
               <tr>
                    <td>
                         <input type="button" value={7} onClick={(e) => {num(e.target.value)}}></input>
                    </td>
                    <td>
                         <input type="button" value={8} onClick={(e) => {num(e.target.value)}}></input>
                    </td>
                    <td>
                         <input type="button" value={9} onClick={(e) => {num(e.target.value)}}></input>
                    </td>
                    <td>
                         <input type="button" value={'+'} onClick={(a) => {action(a.target.value)}}></input>
                    </td>
               </tr>
               <tr>
                    <td>
                         <input type="button" value={4} onClick={(e) => {num(e.target.value)}}></input>
                    </td>
                    <td>
                         <input type="button" value={5} onClick={(e) => {num(e.target.value)}}></input>
                    </td>
                    <td>
                         <input type="button" value={6} onClick={(e) => {num(e.target.value)}}></input>
                    </td>
                    <td>
                         <input type="button" value={'-'} onClick={(a) => {action(a.target.value)}}></input>
                    </td>
               </tr>
               <tr>
                    <td>
                         <input type="button" value={1} onClick={(e) => {num(e.target.value)}}></input>
                    </td>
                    <td>
                         <input type="button" value={2} onClick={(e) => {num(e.target.value)}}></input>
                    </td>
                    <td>
                         <input type="button" value={3} onClick={(e) => {num(e.target.value)}}></input>
                    </td>
                    <td>
                         <input type="button" value={'x'} onClick={(a) => {action(a.target.value)}}></input>
                    </td>
               </tr>
               <tr>
                    <td>
                         <input type="button" value={0} onClick={(e) => {num(e.target.value)}}></input>
                    </td>
                    <td>
                         <input type="button" value={'C'} onClick={(a) => {action(a.target.value)}}></input>
                    </td>
                    <td>
                         <input type="button" value={'='} onClick={ans}></input>
                    </td>
                    <td>
                         <input type="button" value={'/'} onClick={(a) => {action(a.target.value)}}></input>
                    </td>
               </tr>
               <tr>
                    <td colSpan={4}>
                         <input type="button" value="Backspace" onClick={back} />
                    </td>
               </tr>
          </tbody>
     </table>

    </>
  )
}

export default Calculator