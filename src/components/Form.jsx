import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Form({ type, id }) {
    console.log(id, "Haha")
    const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaM9z2Crf5aEDYpFp1Bj18o3cQ690URe_ow&s"
    const navigate = useNavigate()
    const [data, setData] = useState({
        personStatus: "single",
        personGender: "male"
    })
    const fetchPerson = async () => {
        const response = await axios.get("http://localhost:3000/person/" + id)
        if (response.status === 200) {
            setData(response.data.data)
        }
    }

    useEffect(() => {
        if (type === "edit") {
            fetchPerson()
        }
    }, [])

    const handleChange = (e) => {
        // console.log(e.target.value)
        const { value, name } = e.target
        setData({
            ...data,
            [name]: name === "personImage" ? e.target.files[0] : value
        })
    }
    console.log(data)

    const createPerson = async (e) => {
        e.preventDefault()
        if (type === "create") {
            const response = await axios.post("http://localhost:3000/person", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if (response.status === 200) {
                navigate('/')
            } else {
                alert("Fail to create new profile.")
            }
        } else {
            const response = await axios.patch("http://localhost:3000/person" + id, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            if (response.status === 200) {
                navigate('/person/' + id)
            } else {
                alert("Failed to edit the profile.")
            }
        }
    }

    const cancelEdit = () => {
        if((type === "edit")){
            navigate(`/person/${id}`)
        }else{
            navigate('/')
        }
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen px-4 py-8">
                <div className="w-full max-w-4xl bg-red-200 p-6 rounded-lg shadow-lg">
                    <form onSubmit={createPerson}>
                        <div className="space-y-8">
                            <div className="border-b border-gray-900/10 pb-8">
                                {/* <h2 className="text-lg font-semibold leading-7 text-gray-900">Edit Information</h2> */}
                                {/* <p className="mt-1 text-sm leading-6 text-gray-600">Your information is completely secure—no need to worry!</p> */}
                                <div className="flex flex-col items-center">
                                    {/* <div className="mt-2 flex items-center gap-x-3"> */}
                                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={type === 'create' ? defaultImage : data.personImage} alt="Bonnie image" />
                                    {/* </div> */}
                                </div>

                                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
                                    <div className="md:col-span-1">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="personName"
                                                id="personName"
                                                // autoComplete="username"
                                                className="block w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                placeholder="Saroj sir"
                                                onChange={handleChange}
                                                value={data.personName}
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-1">
                                        <label htmlFor="personProfession" className="block text-sm font-medium leading-6 text-gray-900">Profession</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="personProfession"
                                                id="personProfession"
                                                autoComplete="personProfession"
                                                className="block w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                placeholder="Student"
                                                onChange={handleChange}
                                                value={data.personProfession}
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-1">
                                        <label htmlFor="personAge" className="block text-sm font-medium leading-6 text-gray-900">Age</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="personAge"
                                                id="personAge"
                                                autoComplete="personAge"
                                                className="block w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                placeholder="21"
                                                onChange={handleChange}
                                                value={data.personAge}
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-1">
                                        <label htmlFor="personHobbies" className="block text-sm font-medium leading-6 text-gray-900">Hobbies</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="personHobbies"
                                                id="personHobbies"
                                                autoComplete="personHobbies"
                                                className="block w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                placeholder="singing,coding and playing"
                                                onChange={handleChange}
                                                value={data.personHobbies}
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-1">
                                        <label htmlFor="personGender" className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                                        <div className="mt-2">
                                            <select
                                                name="personGender"
                                                id="personGender"
                                                className="block w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                onChange={handleChange}
                                                value={data.personGender}
                                            >
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="md:col-span-1">
                                        <label htmlFor="personStatus" className="block text-sm font-medium leading-6 text-gray-900">Marital Status</label>
                                        <div className="mt-2">
                                            {/* <input
                                                type="text"
                                                name="personStatus"
                                                id="personStatus"
                                                autoComplete="personStatus"
                                                className="block w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                placeholder="Single"
                                                onChange={handleChange}
                                                value={data.personStatus}
                                            /> */}
                                            <select
                                                name="personStatus"
                                                id="personStatus"
                                                className="block w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                onChange={handleChange}
                                                value={data.personStatus}
                                            >
                                                <option value="Single">Single</option>
                                                <option value="In relationship">In relationship</option>
                                                <option value="Married">Married</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="md:col-span-1">
                                        <label htmlFor="personImage" className="block text-sm font-medium leading-6 text-gray-900">Image</label>
                                        <div className="mt-2">
                                            <input
                                                type="file"
                                                name="personImage"
                                                id="personImage"
                                                autoComplete="personImage"
                                                className="block w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                onChange={handleChange}
                                            // value={data.personImage}
                                            />
                                            <p className="mt-1 text-sm text-red-600">
                                                Please upload a photo with a file size less than 1 MB.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:col-span-1">
                                        <label htmlFor="personLink" className="block text-sm font-medium leading-6 text-gray-900">Social Media Link</label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="personLink"
                                                id="personLink"
                                                autoComplete="personLink"
                                                className="block w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                placeholder="https://www.facebook.com/saroj.rondarousy"
                                                onChange={handleChange}
                                                value={data.personLink}
                                            />
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label htmlFor="personMoto" className="block text-sm font-medium leading-6 text-gray-900">Moto</label>
                                        <div className="mt-2">
                                            <textarea
                                                id="personMoto"
                                                name="personMoto"
                                                rows="3"
                                                placeholder="By day, I teach; by night, I learn  . . . ."
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 p-3 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                                onChange={handleChange}
                                                value={data.personMoto}
                                            ></textarea>
                                        </div>
                                    </div>


                                    {/* <div className="md:col-span-2">
                                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div className="text-center">
                                                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                                </svg>
                                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={cancelEdit}>Cancel</button>
                            <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{type}</button>
                        </div>

                    </form>
                </div>
            </div>
        </>

    );
}

export default Form