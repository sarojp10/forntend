import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function SingleProduct() {
    const { id } = useParams()
    console.log("This is id",id)
    const [person, setPerson] = useState({})
    const navigate = useNavigate()
    const fetchPerson = async () => {
        const response = await axios.get("https://mern3-0-node-profilecard.onrender.com/person/" + id)
        console.log(response)
        if (response.status === 200) {
            setPerson(response.data.data)
        }
    }

    const deletePerson = async () => {
        const response = await axios.delete("https://mern3-0-node-profilecard.onrender.com/person/" + id)
        console.log(response)
        if (response.status === 200) {
            navigate('/')
        } else {
            alert("Fail to delete the file !")
        }
    }

    useEffect(() => {
        fetchPerson()
    }, [])


    return (
        <>
        <Navbar />
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={person.personImage} alt="Product Image" />
                            </div>
                            <div className="flex flex-wrap -mx-2 mb-4">
                                {/* <div className="w-1/2 px-2 mb-4">
                                    <Link to="">
                                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add friend</button>
                                    </Link>
                                </div> */}
                                <div className="w-1/2 px-2 mb-2">
                                    <Link to={`/edit/${id}`} >
                                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit Details</button>
                                    </Link>
                                </div>
                                <div className="w-1/2 px-2 mb-2">
                                    <button onClick={deletePerson} className="w-full bg-red-900 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full font-bold hover:bg-red-800 dark:hover:bg-gray-600">Delete Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{person.personName}</h2>
                            <p className="text-gray-600 font-semibold italic dark:text-gray-300 text-sm mb-4">
                                - {person.personMoto}
                            </p>
                            <div className="flex flex-col mb-0">
                                <div className="flex flex-wrap">
                                    <div className="mr-4 mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Age: </span>
                                        <span className="text-gray-600 font-semibold text-sm dark:text-gray-300">{person.personAge}</span>
                                    </div>
                                    <div className="mr-4 mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Gender: </span>
                                        <span className="text-gray-600 font-semibold text-sm dark:text-gray-300">{person.personGender}</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="mr-4 mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Marital Status: </span>
                                        <span className="text-gray-600 font-semibold text-sm dark:text-gray-300">{person.personStatus}</span>
                                    </div>
                                    <div className="mr-4 mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Profession: </span>
                                        <span className="text-gray-600 font-semibold text-sm dark:text-gray-300">{person.personProfession}</span>
                                    </div>
                                </div>
                                <div className="mr-4 mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Hobbies: </span>
                                    <span className="text-gray-600 font-semibold text-sm dark:text-gray-300">{person.personHobbies}</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Skills:</span>
                                <div className="flex flex-wrap gap-2 items-center mt-2">
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">Communication</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">Teamwork</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">Problem-solving</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">Adaptability</button>
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">Time Management</button>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Short Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {person.personName} is a {person.personAge}-year-old {person.personProfession} driven by the motto “{person.personMoto}.” Known for {person.personGender === 'male' ? 'his' : 'her'} exceptional communication, teamwork, problem-solving, adaptability, and time management skills, {person.personGender === 'male' ? 'He' : 'She'} thrives in both personal and professional environments. With a passion for {person.personHobbies}, {person.personGender === 'male' ? 'he' : 'she'} is constantly seeking new opportunities to learn, grow, and make an impact.


                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SingleProduct