'use client'

import { ChangeEvent, useState } from 'react'

import { useRouter } from 'next/navigation'


export default function Home() {

  const [formData, setFormData] = useState({
    login: '',
    password: ''
  })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleFormEdit = (e: any, name: any) => {
    setFormData({
      ...formData,
      [name]: e.target.value
    })

  }

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault()

      const response = await fetch('http://localhost:8000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })


      try {
        const json = await response.json()
        if(response.status == 200) 
        console.log(json)
        console.log(response.status)
        router.push('/dashboard')

      }catch (err: any) {
        console.log(err.message)
        console.log(response.status)
      }

    } catch (err: any) {
      console.log(err.message)
    }
  }

  return (
    <main className="h-screen bg-zinc-50 flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
              Username
            </label>
            <input
              type="login"
              value={formData.login}
              required onChange={(e) => handleFormEdit(e, 'login')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              required onChange={(e) => handleFormEdit(e, 'password')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Acme Corp. All rights reserved.
        </p>
      </div>
    </main>
  )


  /* return (
     <main className="h-screen bg-zinc-50 flex items-center justify-center">
       <form onSubmit={handleSubmit} className="flex flex-col gap4 w-full max-w-xs">
         <div className="flex flex-col gap-1">
           <label htmlFor="">Login</label>
           <input
             type="login"
             name="login"
             value={formData.login}
             required onChange={(e) => handleFormEdit(e, 'login')}
             className="border border-gray-300 shadow-sm rounded h-10 px-3"
           />
         </div>
 
         <div className="flex flex-col gap-1">
           <label htmlFor="">Password</label>
           <input
             type="password"
             name="password"
             value={formData.password}
             required onChange={(e) => handleFormEdit(e, 'password')}
             className="border border-gray-300 shadow-sm rounded h-10 mb-3 px-3"
           />
         </div>
 
         <button
           type="submit"
           className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600"
         >
           Sign In
         </button>
       </form>
 
     </main>
   )*/
}
