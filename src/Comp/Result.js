import { useState } from 'react'

const Result = () => {

     let [detail,setdetail]=useState([]);
     let [roll,setroll]=useState('');
     let [name,setname]=useState('');
     let [sub1,setsub1]=useState('');
     let [sub2,setsub2]=useState('');
     let [sub3,setsub3]=useState('');
     let [sub4,setsub4]=useState('');
     let [sub5,setsub5]=useState('');
     let [total,settotal]=useState('');
     let [per,setper]=useState('');

     let result = () => {

          settotal(parseInt(sub1)+parseInt(sub2)+parseInt(sub3)+parseInt(sub4)+parseInt(sub5));
          setper((total/5)+"%");
          
          setdetail([
               ...detail,
               { roll: roll,
                 name: name,
                 sub1: sub1,
                 sub2: sub2,
                 sub3: sub3,
                 sub4: sub4,
                 sub5: sub5, 
                 total: total,                
                 per: per                
               }
          ]);
          
     }

     
  return (
    <>
          <div className="result">
               <table width="70%" align='' border={1}>
                    <tbody>
                         <tr>
                              <td>Roll No.</td>
                              <td>
                                   <input type="text" name="" id="" onChange={(a) => setroll(a.target.value)} />
                              </td>
                         </tr>
                         <tr>
                              <td>Stu. Name</td>
                              <td>
                                   <input type="text" name="" id="" onChange={(b) => setname(b.target.value)}/>
                              </td>
                         </tr>
                         <tr>
                              <td>Sub 1</td>
                              <td>
                                   <input type="text" name="" id="" onChange={(c) => setsub1(c.target.value)}/>
                              </td>
                         </tr>
                         <tr>
                              <td>Sub 2</td>
                              <td>
                                   <input type="text" name="" id="" onChange={(d) => setsub2(d.target.value)}/>
                              </td>
                         </tr>
                         <tr>
                              <td>Sub 3</td>
                              <td>
                                   <input type="text" name="" id="" onChange={(e) => setsub3(e.target.value)}/>
                              </td>
                         </tr>
                         <tr>
                              <td>Sub 4</td>
                              <td>
                                   <input type="text" name="" id="" onChange={(f) => setsub4(f.target.value)}/>
                              </td>
                         </tr>
                         <tr>
                              <td>Sub 5</td>
                              <td>
                                   <input type="text" name="" id="" onChange={(g) => setsub5(g.target.value)}/>
                              </td>
                         </tr>
                         <tr>
                              <td colSpan={2} align='center'>
                                   <input type="button" value="Submit" onClick={result} />
                              </td>
                         </tr>
                    </tbody>
               </table>
          </div>

          <div className="print">
               <table width="80%">
                    <thead>
                         <tr>
                              <th>Roll No.</th>
                              <th>Student Name</th>
                              <th>Sub 1</th>
                              <th>Sub 2</th>
                              <th>Sub 3</th>
                              <th>Sub 4</th>
                              <th>Sub 5</th>
                              <th>Total</th>
                              <th>Per</th>
                         </tr>
                    </thead>
                    <tbody>
                    
                    {
                         detail.map(item => (
                              <tr>
                                   <td>{item.roll}</td>
                                   <td>{item.name}</td>
                                   <td>{item.sub1}</td>
                                   <td>{item.sub2}</td>
                                   <td>{item.sub3}</td>
                                   <td>{item.sub4}</td>
                                   <td>{item.sub5}</td>
                                   <td>{item.total}</td>
                                   <td>{item.per}</td>
                              </tr>
                         ))
                    }
                    </tbody>
               </table>
          </div>
    </>
  )
}

export default Result