import { SignUpButton } from './Button'
 
function SignIn() {
      return (
       <div className="container"><h3>Doctors Signin</h3>
           <form action="" >
             <div className="flex flex-col gap-5 sm:flex-row">
               <div>
                   <div className="flex flex-col">
                       <label htmlFor="">Address</label>
                       <input type="text" placeholder="0x0000" />
                       <label htmlFor="">Password</label>
                       <input type="password" placeholder="password" />
                   </div>
               </div>
               <div>
               <img src="./public/Frame 1000002382.png" alt="" className=' max-w-md mb-10 sm:w-screen sm:h-3/5 '/>
               </div>
           </div>
               <div className=' -mt-3.5'>
                   <SignUpButton buttonText="login In" />
               </div>
           </form>

       </div>
      )
}
export default SignIn;