import { Link } from 'react-router-dom';

function Navbar() {
    const defaultImage = "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"

    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center animate-rotating">
                                <Link to="/">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png"
                                        alt="Logo"
                                    />
                                </Link>
                            </div>

                            {/* Always visible "+ Create Card" button */}
                                <div className="ml-4 my-4 sm:ml-6">
                                    <Link
                                        to="/create"
                                        className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                        aria-current="page"
                                    >
                                        + Create Profile
                                    </Link>
                                </div>
                                <div className="ml-4 my-4 sm:ml-6">
                                    <Link
                                        to="/contact"
                                        className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                        aria-current="page"
                                    >
                                        Contact
                                    </Link>
                                </div>
                        </div>

                        {/* User Profile Button */}
                        <div>
                            <Link to="https://github.com/sarojp10">
                                <button
                                    type="button"
                                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                >
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://avatars.githubusercontent.com/u/188076158?s=400&u=f710b373dbaa1f498d960f969d37fa1a36e47ec1&v=4"
                                        onError={(e) => (e.target.src = defaultImage)}
                                        alt=""
                                    />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;