import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Web3 from 'web3';
import '../index.css'
import { ConnectBtn, SignUpButton } from './Button'
import ContractJson from '../Healthcare.json'
import SignIn from './PatientsSign';

function PRegister() {



  return (
<main className="flex justify-center items-center">
  <form action="" className=" bg-purple-background-form text-border-form  m-4 mr-10 p-10 h-2/6 rounded-3xl shadow-2xl shadow-purple-button-first sm:max sm:m-36">
  <div className='flex justify-center items-center font-extralight p-10 sm:p-5 md:p-7 lg:p-10 xl:p-14 flex-col'>
      <h3 className="text-4xl font-bold mb-px">Patients SignUp</h3>
    </div>
    <div className='flex flex-col items-center  sm:flex-row sm:items-end sm:gap-3'>
      <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col'>
      <input className=" rounded-lg border-hidden h-8 w-80 p-4 text-left" type="text" placeholder='0x000 addr'/>
       <ConnectBtn/>
        </div><br />
        <div className='flex justify-center items-center flex-col gap-10 sm:flex-row'>
        <div className='flex flex-col'>
          <label htmlFor="" >First Name:</label>
          <input className=" rounded-lg h-8 w-80 p-4 text-left" type="text" placeholder='Enter first name'/>
          <label htmlFor="">D.O.B</label>
          <input className=" rounded-lg h-8 w-80 p-4 text-left" type='date' />
          <label htmlFor="">City</label>
          <input className=" rounded-lg h-8 w-80 p-4 text-left"  type="text" placeholder='Enter city'/>
          <label htmlFor="">Password</label>
          <input className=" rounded-lg h-8 w-80 p-4 text-left" type="password" placeholder='enter password'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Second Name:</label>
          <input className=" rounded-lg h-8 w-80 p-4 text-left" type="text" placeholder='Enter second name'/>
          <label htmlFor="">Mobile Number</label>
          <input className=" rounded-lg h-8 w-80 p-4 text-left" type="tel" placeholder='Enter mobile number'/>
          <label htmlFor="">State</label>
          <input className=" rounded-lg h-8 w-80 p-4 text-left" type="text" placeholder='Enter state'/>
          <label htmlFor="">Confirm Password</label>
          <input className=" rounded-lg h-8 w-80 p-4 text-left" type="password" placeholder='reenter password'/>
        </div>
        </div>
      
     </div> 
    </div>
    <div className='flex justify-center items-center'><SignUpButton buttonText="Sign Up" /></div>
    <div>
      <p className='text-center text-xs font-extralight'>Already have an account?<Link to={'/signin'}> Click Me</Link></p>
    {/* <span onClick={()=>{
      navigate('/signin')
    }}>Click Me</span> */}
    </div>
  </form>
</main>

  )
}

export default PRegister
