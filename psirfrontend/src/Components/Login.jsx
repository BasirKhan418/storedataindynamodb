import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Toaster,toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const Login = ({setisTake}) => {
    const [loading,setLoading] = useState(false)
    const router = useNavigate()
    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(form.email === '' || form.password === ''){
            toast.error('Please fill all the fields')
        }
        else{
            setLoading(true)
            const resdata = await fetch('https://1mf6xipdr6.execute-api.ap-south-1.amazonaws.com/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(form)
            })
            const data = await resdata.json()
            setLoading(false)
            
            if(data.success){
                toast.success(data.message)
                localStorage.setItem('dptoken',data.token)
                setTimeout(()=>{
                    router('/protfollio')
                 },2000)
                 setisTake(true)

                
                console.log(data)
            }
            else{
                toast.error(data.error)
            }
        }
    }
  return (
      <div className=" min-h-screen">
        <Toaster position='top-center'/>
  {/* Hero */}
  <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent ">
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
      {/* Grid */}
      <div className="flex justify-center items-center">
       
        {/* End Col */}
        <div>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
              {/* Card */}
              <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Login Now !
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    Not have an account?
                    <Link
                      className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500 mx-2"
                      to="/"
                    >
                      Create Now
                    </Link>
                  </p>
                </div>
                <div className="mt-5">
                 
                  <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700 ">
                    
                  </div>
                  {/* Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    
                    <div className="relative col-span-full lg:w-96 md:w-96 w-72">
                      {/* Floating Input */}
                      <div className="relative">
                        <input
                          type="email"
                          name='email'
                            onChange={handleChange}
                            value={form.email}
                          id="hs-hero-signup-form-floating-input-new-password"
                          className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 border-2
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                          placeholder="you@example.com"
                        />
                        <label
                          htmlFor="hs-hero-signup-form-floating-input-new-password"
                          className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:scale-90
                  peer-focus:translate-x-0.5
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                  peer-[:not(:placeholder-shown)]:scale-90
                  peer-[:not(:placeholder-shown)]:translate-x-0.5
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                        >
                          Email
                        </label>
                      </div>
                      {/* End Floating Input */}
                      <div
                        id="hs-strong-password-popover"
                        className="hidden absolute z-10 w-full bg-gray-100 rounded-lg p-4 dark:bg-neutral-950"
                      >
                       
                        
                      </div>
                    </div>
                    {/* End Input Group */}
                    {/* Input Group */}
                    <div className="col-span-full">
                      {/* Floating Input */}
                      <div className="relative">
                        <input
                          type="password"
                          name='password'
                            onChange={handleChange}
                            value={form.password}
                          id="hs-hero-signup-form-floating-input-current-password"
                          className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 border-2
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2"
                          placeholder="********"
                        />
                        <label
                          htmlFor="hs-hero-signup-form-floating-input-current-password"
                          className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:scale-90
                  peer-focus:translate-x-0.5
                  peer-focus:-translate-y-1.5
                  peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                  peer-[:not(:placeholder-shown)]:scale-90
                  peer-[:not(:placeholder-shown)]:translate-x-0.5
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                        >
                          Password
                        </label>
                      </div>
                      {/* End Floating Input */}
                    </div>
                    {/* End Input Group */}
                  </div>
                  {/* End Grid */}
                  {/* Checkbox */}
                  <div className="mt-5 flex items-center">
                   
                  </div>
                  {/* End Checkbox */}
                  <div className="mt-5">
                    <button
                      type="submit"
                      
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                    {loading ? 'Loading...' : 'Login'}
                    </button>
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
          </form>
          {/* End Form */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
      {/* Clients Section */}
     
      {/* End Clients */}
    </div>
    {/* End Clients Section */}
  </div>
  {/* End Hero */}
</div>

    
  )
}

export default Login
