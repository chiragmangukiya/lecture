import React from 'react'
import { FaUserEdit, FaTruckMoving } from "react-icons/fa";
import logo from './logo.svg';
import title from './demo.module.css';

var obj={
     color:'blue'
}

const Lec2 = () => {
  return (
    <>
          <h1 style={{backgroundColor:'yellow'}}>Creative</h1>
          <h1 style={obj}>Design</h1>
          <h1 className="demo">Multimedia</h1>
          <h1 className="test">Institute</h1>
          <h1 className={title.name}>Institute</h1>

          <img src={logo} width="50%" alt="" />
          <img src={require('./img/girl.jpg')} width="20%" alt="" />

          <FaUserEdit className='icon'></FaUserEdit>
          <FaTruckMoving></FaTruckMoving>
    </>
  )
}

export default Lec2