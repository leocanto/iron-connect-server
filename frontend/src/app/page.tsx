
export default function Home() {
  return (
    <main className="h-screen bg-zinc-50 flex items-center justify-center">
      <form className="flex flex-col gap4 w-full max-w-xs">
        <div className="flex flex-col gap-1">
          <label htmlFor="">Login</label>
          <input
          type="login"
          name="login"
          className="border border-gray-300 shadow-sm rounded h-10 px-3"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input 
          type="password"
          name="password"
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
  )
}
