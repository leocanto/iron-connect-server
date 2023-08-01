export default function DashboardPage() {
    return <>
        <div className="bg-gradient-to-r from-black p-10 to-blue-500 flex items-center justify-center">
            <div className="bg-gray-100 dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden flex md:flex-row justify-between">
                <form className="flex items-start justify-start md:space-x-1 p-4">
                    <div className="relative w-full">
                        <label>Nome</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:border-primary-500 block h-10 w-full p-2 dark:bg-gray-700 dark:border-gray-600
                               dark:text-white  dark:focus:border-primary-500" placeholder="Nome" required />
                    </div>
                    <div className="relative w-full">
                        <label>E-mail</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:border-primary-500 block h-10 w-full p-2 dark:bg-gray-700 dark:border-gray-600
                               dark:text-white  dark:focus:border-primary-500" placeholder="Email" required />
                    </div>
                    <div className="relative w-full">
                        <label>Telefone</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:border-primary-500 block h-10 w-full p-2 dark:bg-gray-700 dark:border-gray-600
                               dark:text-white  dark:focus:border-primary-500" placeholder="Telefone" required />
                    </div>
                    <div className=" w-full">
                        <label>Data de nascimento</label>
                        <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:border-primary-500 block w-full h-10 p-2 dark:bg-gray-700 dark:border-gray-600
                               dark:text-white  dark:focus:border-primary-500" placeholder="Date" required />

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