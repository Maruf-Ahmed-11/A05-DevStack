import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 w-full">
            <div className="flex justify-between items-center container mx-auto py-4 px-6">
                {/* Logo */}
                <div>
                    <img src={Logo} alt="DevStack Logo" className="h-8 cursor-pointer" />
                </div>

                {/* Navigation Links (Centered) */}
                <ul className='flex gap-8 items-center text-gray-600 font-medium'>
                    <li><a href="#" className="text-pink-600 font-semibold">Home</a></li>
                    <li><a href="#" className="hover:text-pink-600 transition-colors">Technologies</a></li>
                    <li><a href="#" className="hover:text-pink-600 transition-colors">Projects</a></li>
                    <li><a href="#" className="hover:text-pink-600 transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-pink-600 transition-colors">Contact</a></li>
                </ul>

                {/* Sign In / Sign Up Buttons */}
                <div className="flex items-center gap-6">
                    <button className="text-gray-700 font-medium hover:text-pink-600 transition-colors">
                        Sign In
                    </button>
                    <button className="bg-pink-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-pink-700 transition-colors">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;