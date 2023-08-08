'use client'

import FormComponent from "@/components/form"
import GridComponent from "@/components/grid"
import { useEffect, useState } from "react"

export default function DashboardPage() {
    const [clients, setClients] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

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
            <FormComponent onEdit={onEdit} setOnEdit={setOnEdit} getClients={getClients}/>
            <GridComponent clients={clients} setOnEdit={setOnEdit} setClients={setClients}/>
        </>
    )
}