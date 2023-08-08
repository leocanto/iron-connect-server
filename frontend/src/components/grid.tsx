'use client'

const GridComponent = ({ clients, setClients, setOnEdit }: any) => {
    const handleEdit = (item: any) => {
        setOnEdit(item);
    };



    return (
        <div className="p-10 items-center justify-center">
            <div className="relative shadow-md sm:rounded-lg overflow-hidden flex-col space-y-4 justify-start">
                <table className="w-full">
                    <thead>
                        <tr className="bg-blue-800 text-left text-xs font-semibold uppercase tracking-widest text-white">
                            <th className="px-5 py-3">Nome</th>
                            <th className="px-5 py-3">Email</th>
                            <th className="px-5 py-3">Telefone</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-500">
                        {clients.map((cli: any, index: number) => (
                            <tr key={index}>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">{cli.name}</p>
                                </td>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">{cli.email}</p>
                                </td>
                                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">{cli.phone}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GridComponent;


