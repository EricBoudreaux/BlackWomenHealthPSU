import React, { useState, useRef } from 'react'
import 'animate.css';
import { firestore } from '../Firebase'
import { addDoc, collection } from '@firebase/firestore'



import background from '../assets/bwh_bg.png'
import logo from '../assets/bwh_logo_alt.png'


export default function Home() {

const [screen, setScreen] = useState("home")

const messageRef = useRef()
const ref = collection(firestore, "messages")


const handleSave = async(e) => {
  e.preventDefault();
  
  let data = {
    message : messageRef.current.value,

  }

  try {
    addDoc(ref,data)
  } catch(e){
    console.log(e)
  }

}

  return (



    <div className=' background'>

{/* Home Page */}
    { screen == 'home' ? (
      <div className={screen === 'home' ? 'animate__animated animate__slideInLeft' : 'animate__animated animate__slideInRight'}>
        <div className='z-50 w-full pb-12 sm:h-screen  relative '>
            <img className='max-w-[450px] mx-auto z-50' src={logo} alt='/' />

        <div className='max-w-[800px] mx-auto mt-8 px-12 flex flex-col justify-center'>
            <p className='text-white text-center text-xl'>
                A safe space for Black women to share their untold stories 
                of mistreatment in healthcare anonymously. Together, let’s raise
                our voices and work towards a future where Black women receive
                the healthcare they deserve.        
            </p>
            <button onClick={() => setScreen('chat')} className='rounded-sm py-4 max-w-[400px] mx-auto mt-8 text-black hover:bg-[var(--orange)] hover:text-white duration-500 ease-in-out px-10 text-lg bg-[#E1E1E1] text-center'>SHARE YOUR STORY</button> 
            </div>  
        </div>
        </div>
)   
      
      : null }

{/* Chat Page */}
  { screen === 'chat' ? (
      <div className='z-50 w-full pb-12 flex-row md:flex-cols relative p-4 animate__animated animate__slideInRight'>
          <div>
            <img onClick={() => setScreen('home')} className='max-w-[250px] z-50 mx-auto lg:mx-0 ' src={logo} alt='/' />

          </div>
          <div className='w-full px-8 mx-auto '>
            <textarea ref={messageRef} rows={15} className='w-full rounded bg-[var(--white)] outline-none p-2'></textarea>
   
            <button onClick={handleSave} className='rounded-sm py-4 mx-auto mt-4 text-black hover:bg-[var(--orange)] hover:text-white duration-500 ease-in-out px-14 text-lg bg-[#E1E1E1] text-center'>SEND</button> 
   
          </div>

        </div>
)
      : null }
  
    </div>
  )
}
