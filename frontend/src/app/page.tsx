'use client'

import { useState } from 'react'
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

      const response = await fetch('http://localhost:8080/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.status == 200) {
        router.push('/dashboard')
      }

    } catch (err: any) {
      console.log(err.message)
    }
  }

  return (
    <main className="h-screen bg-gradient-to-r from-black to-blue-600 flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
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
            <button className="bg-gradient-to-r from-black to-blue-500 hover:from-blue-800 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-black text-xs">
          &copy;2023 Leonardo Canto. All rights reserved.
        </p>
      </div>
    </main>
  )
}
