'use client'

import { ChangeEvent, useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'

const GridComponent = () => {
    const handleEdit = (item: any) => {
        setOnEdit(item);
    };

    const [clients, setClients] = useState([]);
    const [onEdit, setOnEdit] = useState();
  
    const getClients = async () => {
      try {
        const response = await fetch("http://localhost:8080/client");

        setClients(await response.json());
        
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
        getClients();
    }, [setClients]);

    return (
        <>
            <div className="bg-gradient-to-r from-black p-10 to-blue-500 ">
                <div className="bg-gray-100 dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden flex-col space-y-4 justify-start">
                    {clients.map((cli: any, index: number) => (
                        <>
                            <div key={index} className='flex p-4 rounded space-x-4 justify-start' >
                                <p >{cli.name}</p>
                                <p>{cli.email}</p>
                                <p>{cli.phone}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>

        </>
    );
}

export default GridComponent;


