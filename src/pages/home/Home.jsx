import axios from "axios"
import Card from "../../components/Card"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"

function Home() {
    const [persons,setPersons] = useState([])
    const fetchPersons = async ()=>{
        const response = await axios.get("http://localhost:3300/person")
        // console.log(response.data)
        if(response.status === 200){
            setPersons(response.data.data)
        }
    }
    useEffect(()=>{
        fetchPersons()
    },[])

    console.log(persons)
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                {/* Project Name Heading */}
                <header className="text-center mt-10 mb-5">
                    <h1 className="text-5xl font-extrabold text-gray-800 md:text-6xl lg:text-7xl">
                        You & Me
                    </h1>
                    <p className="mt-3 text-lg text-gray-600 md:text-xl">
                        A platform to connect, explore, and share.
                    </p>
                </header>

                <main className="flex-1 flex flex-wrap justify-center items-center gap-5 mt-5 mx-2 md:flex-row">
                    {
                        persons.map((person)=>{
                            return(
                                <Card person={person} fetchPersons={fetchPersons}/>
                            )
                        })
                    }
                </main>

                <Footer />
                
            </div>
        </>
    )
}

export default Home