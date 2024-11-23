import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Form from "../../components/Form"
import Navbar from "../../components/Navbar"

function EditProduct(){
    const {id} = useParams()
    console.log(id)

    return(
        <>
        <Navbar />

        <Form type="edit" id={id} />

        <Footer />
        </>
    )
}

export default EditProduct