import React, { useState } from 'react'

const Puzzle = () => {

     let [btn1,setbtn1]=useState(1);
     let [btn2,setbtn2]=useState(2);
     let [btn3,setbtn3]=useState(3);
     let [btn4,setbtn4]=useState(4);
     let [btn5,setbtn5]=useState(5);
     let [btn6,setbtn6]=useState(6);
     let [btn7,setbtn7]=useState(7);
     let [btn8,setbtn8]=useState('');
     let [btn9,setbtn9]=useState(8);


     let b1 = () => {       
          if(btn2 == ''){
               setbtn2(btn1);
               setbtn1('');
          }
          if(btn4 == ''){
               setbtn4(btn1);
               setbtn1('');
          }
          win();
     }
     let b2 = () => {          
          if(btn1 == ''){
               setbtn1(btn2);
               setbtn2('');
          }
          if(btn3 == ''){
               setbtn3(btn2);
               setbtn2('');
          }
          if(btn5 == ''){
               setbtn5(btn2);
               setbtn2('');
          }
          win();
     }
     let b3 = () => {          
          if(btn2 == ''){
               setbtn2(btn3);
               setbtn3('');
          }
          if(btn6 == ''){
               setbtn6(btn3);
               setbtn3('');
          }
          win();
     }
     let b4 = () => {          
          if(btn1 == ''){
               setbtn1(btn4);
               setbtn4('');
          }
          if(btn5 == ''){
               setbtn5(btn4);
               setbtn4('');
          }
          if(btn7 == ''){
               setbtn7(btn4);
               setbtn4('');
          }
          win();
     }
     let b5 = () => {          
          if(btn2 == ''){
               setbtn2(btn5);
               setbtn5('');
          }
          if(btn4 == ''){
               setbtn4(btn5);
               setbtn5('');
          }
          if(btn6 == ''){
               setbtn6(btn5);
               setbtn5('');
          }
          if(btn8 == ''){
               setbtn8(btn5);
               setbtn5('');
          }
          win();
     }
     let b6 = () => {          
          if(btn3 == ''){
               setbtn3(btn6);
               setbtn6('');
          }
          if(btn5 == ''){
               setbtn5(btn6);
               setbtn6('');
          }
          if(btn9 == ''){
               setbtn9(btn6);
               setbtn6('');
          }
          win();
     }
     let b7 = () => {          
          if(btn4 == ''){
               setbtn4(btn7);
               setbtn7('');
          }
          if(btn8 == ''){
               setbtn8(btn7);
               setbtn7('');
          }
          win();
     }
     let b8 = () => {          
          if(btn7 == ''){
               setbtn7(btn8);
               setbtn8('');
          }
          if(btn5 == ''){
               setbtn5(btn8);
               setbtn8('');
          }
          if(btn9 == ''){
               setbtn9(btn8);
               setbtn8('');
          }
          win();
     }
     let b9 = () => {          
          if(btn6 == ''){
               setbtn6(btn9);
               setbtn9('');
          }
          if(btn8 == ''){
               setbtn8(btn9);
               setbtn9('');
          }
          win();
     }

     let win = () => {
          if(btn1 == '1' && btn2 == '2' && btn3 == '3' && btn4 == '4' && btn5 == '5' && btn6 == '6' && btn7 == '7' && btn8 == '8' && btn9 == ''){
               alert('You Win');
          }
     }

     return (
    <>
          <table align='center'>
               <tr>
                    <td><input type="button" value={btn1} onClick={(e1) => b1(e1.target.value)} /></td>
                    <td><input type="button" value={btn2} onClick={(e2) => b2(e2.target.value)} /></td>
                    <td><input type="button" value={btn3} onClick={(e1) => b3(e1.target.value)} /></td>
               </tr>
               <tr>
                    <td><input type="button" value={btn4} onClick={(e4) => b4(e4.target.value)} /></td>
                    <td><input type="button" value={btn5} onClick={(e1) => b5(e1.target.value)} /></td>
                    <td><input type="button" value={btn6} onClick={(e1) => b6(e1.target.value)} /></td>
               </tr>
               <tr>
                    <td><input type="button" value={btn7} onClick={(e1) => b7(e1.target.value)} /></td>
                    <td><input type="button" value={btn8} onClick={(e1) => b8(e1.target.value)} /></td>
                    <td><input type="button" value={btn9} onClick={(e1) => b9(e1.target.value)} /></td>
               </tr>
          </table>
    </>
  )
}

export default Puzzle