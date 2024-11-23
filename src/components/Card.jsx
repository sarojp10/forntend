import { Link } from "react-router-dom"

function Card({ person }) {
    const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaM9z2Crf5aEDYpFp1Bj18o3cQ690URe_ow&s"
    return (
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                        <span className="sr-only">Open dropdown</span>
                        {/* <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg> */}
                    </button>
                </div>
                <div className="flex flex-col items-center pb-10 px-4">
                    <div className="relative">
                    <div
                        className="absolute w-24 h-24 mb-3 rounded-full outline-2 md:outline-2 outline-double outline-gray-400 animate-rotating duration-1000 ease-out hover:animate-none cursor-pointer dark:outline-white">
                    </div>
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg cursor-pointer" src={person.personImage === "" ? defaultImage : person.personImage} alt="Profile Image Not Found" />
                    </div>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{person.personName}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{person.personProfession}</span>
                    {/* <div classNameName="mt-2 px-5">
                            <p classNameName="text- text-gray-600 dark:text-gray-500">
                                {person.personDescription}
                            </p>
                        </div> */}
                    <div className="flex mt-6 md:mt-6">
                        <Link to={person.personLink} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</Link>
                        <Link to={`/person/${person._id}`} className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn More</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card