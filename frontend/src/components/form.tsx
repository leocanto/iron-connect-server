'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'


const FormComponent = ({ onEdit, setOnEdit, getClients }: any) => {
    
    const [formData, setFormData] = useState({
        name: '',
        birth_date: '',
        phone: '',
        email: ''
    })
    const router = useRouter()

    const handleFormEdit = (e: any, name: any) => {
        setFormData({
            ...formData,
            [name]: e.target.value
        })

    }

    useEffect(() => {
        if (onEdit) {
            setFormData(onEdit)
        }
    }, [onEdit]);

    const handleSubmit = async (event: any) => {
        try {
            event.preventDefault()

            const response = await fetch('http://localhost:8080/client/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            console.log(response.json())

            const json = await response.json()
            if (response.status !== 201) throw new Error(json.message)

        } catch (err: any) {
            console.log(err.message)
        }
        getClients();
        setOnEdit(null);
    }


    return <>
        <div className=" p-10 flex items-center justify-center">
            <div className="bg-gray-100 dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden flex md:flex-row justify-between">
                <form onSubmit={handleSubmit} className="flex items-start justify-start md:space-x-1 p-4">
                    <div className="relative w-full">
                        <label>Nome</label>
                        <input
                            type="name"
                            value={formData.name}
                            required onChange={(e) => handleFormEdit(e, 'name')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                          focus:border-primary-500 block h-10 w-full p-2 dark:bg-gray-700 dark:border-gray-600
                           dark:text-white  dark:focus:border-primary-500"
                            placeholder="Nome"
                        />
                    </div>
                    <div className="relative w-full">
                        <label>E-mail</label>
                        <input
                            type="email"
                            value={formData.email}
                            required onChange={(e) => handleFormEdit(e, 'email')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                          focus:border-primary-500 block h-10 w-full p-2 dark:bg-gray-700 dark:border-gray-600
                           dark:text-white  dark:focus:border-primary-500"
                            placeholder="Email"
                        />
                    </div>
                    <div className="relative w-full">
                        <label>Telefone</label>
                        <input
                            type="phone"
                            value={formData.phone}
                            required onChange={(e) => handleFormEdit(e, 'phone')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                          focus:border-primary-500 block h-10 w-full p-2 dark:bg-gray-700 dark:border-gray-600
                           dark:text-white  dark:focus:border-primary-500"
                            placeholder="Telefone"
                        />
                    </div>
                    <div className=" w-full">
                        <label>Data de nascimento</label>
                        <input
                            type="date"
                            value={formData.birth_date}
                            required onChange={(e) => handleFormEdit(e, 'birth_date')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                          focus:border-primary-500 block w-full h-10 p-2 dark:bg-gray-700 dark:border-gray-600
                           dark:text-white  dark:focus:border-primary-500"
                            placeholder="Date"
                        />
                    </div>
                    <button className="my-6 h-10 bg-gradient-to-r from-black to-blue-500 hover:from-blue-800 hover:to-blue-500 text-white font-bold py-1.5 px-6 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Save
                    </button>
                </form>
            </div>
        </div>
    </>
}

export default FormComponent;