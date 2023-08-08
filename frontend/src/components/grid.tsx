'use client'

const GridComponent = ({ clients, setClients, setOnEdit }: any) => {
    const handleEdit = (item: any) => {
        setOnEdit(item);
    };



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


