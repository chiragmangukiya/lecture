import { useState } from 'react'

const Tic = () => {

     const [val,setval]=useState(true);
     const [btn,setbtn]=useState(['','','','','','','','','']);

     const game = (i) => {

          if(btn[i]){
               return;
          }
          const cnt=btn.slice();
          if(val){
               cnt[i]="x";
          }else{
               cnt[i]="o";
          }

          setbtn(cnt);
          setval(!val);

          win();
          
     }
     const win = () => {
          if(btn[0]=='x'&&btn[1]=='x'&&btn[2]=='x'){
               alert("X Win");
          }
     }

  return (
    <>
          <table align='center'>
               <tr>
                    <td><input type="button" value={btn[0]} onClick={() => {game(0)}} /></td>
                    <td><input type="button" value={btn[1]} onClick={() => {game(1)}} /></td>
                    <td><input type="button" value={btn[2]} onClick={() => {game(2)}} /></td>
               </tr>
               <tr>
                    <td><input type="button" value={btn[3]} onClick={() => {game(3)}} /></td>
                    <td><input type="button" value={btn[4]} onClick={() => {game(4)}} /></td>
                    <td><input type="button" value={btn[5]} onClick={() => {game(5)}} /></td>
               </tr>
               <tr>
                    <td><input type="button" value={btn[6]} onClick={() => {game(6)}} /></td>
                    <td><input type="button" value={btn[7]} onClick={() => {game(7)}} /></td>
                    <td><input type="button" value={btn[8]} onClick={() => {game(8)}} /></td>
               </tr>
          </table>
    </>
  )
}

export default Tic