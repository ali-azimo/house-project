import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';





const Header = () => {
    return (
        <div>
            <header className='bg-slate-200 shadow-md'>
                <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                    <Link to='/'>
                    <h1 className='font-bold text-sm: text-xl flex-wrap'>
                        <span className="text-slate-500">Ali</span>
                        <span className="text-slate-700">Azimo</span>
                    </h1>
                    </Link>
                    <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                        <input type=
                            "text" placeholder='Search...'
                            className='bg-transparent
                            outline-none
                            w-24 sm:w-64'
                        />
                        <FaSearch className='text-slate-500' />
                    </form>
                    <ul className='flex gap-4'>
                        <Link to='/'>
                        <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
                        </Link>
                        <Link to='/about-page'>
                        <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
                        </Link>
                        <Link to='/sign-in'>
                        <li className="sm:inline text-slate-700 hover:underline">Log In</li>

                        </Link>
                    </ul>
                </div>
            </header>
      </div>
  )
}

export default Header;