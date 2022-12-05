import { LogoSvg } from "../components/icons";


function LoginPage() {
  return (
    <>
      <aside className="py-10 px-2 bg-black h-screen bg-gradient-to-b from-teal-900 to-black">
    
        <header className="sm:mx-auto sm:w-full sm:max-w-md ">
           <LogoSvg className="fill-cyan-50 h-12 mx-auto"/>
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-cyan-50">Sign in to your account</h1>
        </header>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
            <form className="space-y-8" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-black">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-emerald-500 py-2 px-4 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
    
      </aside>
    </>
  );
}

export default LoginPage;