import { SignUpButton } from './Button'
 
function DoctorSign () {
      return (
        <main className='flex justify-center items-center m-4 mr-10 p-10 bg-purple-background-body'>
            <form action="" className=' bg-purple-background-form rounded-3xl shadow-2xl shadow-purple-button-first'> 
            <div className='flex justify-center items-center font-extralight p-10 sm:p-5 md:p-7 lg:p-10 xl:p-14 flex-col'>
      <h3 className="text-4xl font-bold mb-px">Doctors Login</h3>
    </div>
            <div className="flex justify-center items-center m-4 mr-10 p-10 sm:flex-row sm:items-end sm:gap-3 "> 
              <div className="flex flex-col-reverse gap-5 sm:flex-row">
                    <div className="flex flex-col justify-center items-center sm: -mt-20">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder="0x0000" className=" rounded-lg h-8 w-80 p-4 text-left"/><br /><br />
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="password" className=" rounded-lg h-8 w-80 p-4 text-left"/>
                        <SignUpButton buttonText="login In" />
                    </div>
                <div>
                <img src="./public/Frame 1000002382.png" alt="" className=' max-w-md mb-16 h-1/3 sm:w-screen sm:h-4/6 '/>
                </div>
             </div>
            </div>
                   
            </form>
       </main>
      )
}
export default DoctorSign;