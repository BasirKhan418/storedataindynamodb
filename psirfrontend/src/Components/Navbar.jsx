import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = ({istake}) => {
    const router = useNavigate()
    const [istoken,setIstoken] = useState(false)
    useEffect(()=>{
if(localStorage.getItem('dptoken')){
    setIstoken(true)
}
else{
    router('/')
    setIstoken(false)
}
    },[istake])
  return (
    <div className=' '>
      <>
  {/* ========== HEADER ========== */}
  <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
    <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto ">
      <div className="md:col-span-3 ">
        {/* Logo */}
        <a
          className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          href="/"
          aria-label="Preline"
        >
          <h1 className='text-black text-2xl font-bold  dark:text-white'> DeployLite</h1>
        </a>
        {/* End Logo */}
      </div>
      {/* Button Group */}
      {!istoken&&<div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white"
          onClick={()=>{
          router('/login')
          
          }}
        >
          Login
        </button>
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
          onClick={()=>{
            router("/")
          }}
        >
          Create
        </button>
        
       
      </div>}
      {istoken&&<div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white"
          onClick={()=>{
          localStorage.removeItem('dptoken')
            setIstoken(false)
            router('/login')

          
          }}
        >
          Logout
        </button>
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
          onClick={()=>{
            router("/protfollio")
          }}
        >
          Protfollio
        </button>
        
       
      </div>}
      {/* End Button Group */}
      {/* Collapse */}
      <div
        id="hs-navbar-hcail"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        aria-labelledby="hs-navbar-hcail-collapse"
      >
        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
          <div>
            <a
              className="relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white"
              href="#"
              aria-current="page"
            >
              Deploy
            </a>
          </div>
          <div>
            <a
              className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
              href="#"
            >
              Storage
            </a>
          </div>
          <div>
            <a
              className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-white dark:hover:text-neutral-300 dark:focus:text-neutral-300"
              href="#"
            >
              About
            </a>
          </div>
         
         
        </div>
      </div>
      {/* End Collapse */}
    </nav>
  </header>
  {/* ========== END HEADER ========== */}
</>

    </div>
  )
}

export default Navbar
