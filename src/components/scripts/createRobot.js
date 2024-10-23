import React from 'react';
import '../styles/createRobot.css'
const CreateRobot = ({first,last,email,push,firstValue,lastValue,emailValue,keyPress}) => {
    return (
        <div className='tc '>
            <h1 className='f2'>Create Your Own Robots</h1>
            <div className='container'>
              <input type='text' placeholder='Enter your first name' value={firstValue} onChange={first} required className='font' onKeyUp={keyPress}></input>
              <input type='text' placeholder='Enter your last name' value={lastValue} onChange={last}  required className='font' onKeyUp={keyPress}></input>
             <input type='email' placeholder='Enter your email' value={emailValue} onChange={email}  required className='font' onKeyUp={keyPress}></input>
            </div>
            <button className='button_top' onClick={push} >SUBMIT</button>
        </div>
        
    )
}

export default CreateRobot;