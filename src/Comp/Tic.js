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

          win(0,1,2,'x');
          win(0,3,6,'x');
          win(0,4,8,'x');
          win(1,4,7,'x');
          win(2,4,6,'x');
          win(2,5,8,'x');
          win(3,4,5,'x');
          win(6,7,8,'x');

          win(0,1,2,'o');
          win(0,3,6,'o');
          win(0,4,8,'o');
          win(1,4,7,'o');
          win(2,4,6,'o');
          win(2,5,8,'o');
          win(3,4,5,'o');
          win(6,7,8,'o');
          
     }
     const win = (p1,p2,p3,sign) => {
          if(btn[p1]==sign&&btn[p2]==sign&&btn[p3]==sign){
               if(sign == 'x'){
                    alert("X Win");
               }else{
                    alert("O Win");
               }
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