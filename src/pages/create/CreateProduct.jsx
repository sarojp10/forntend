import Footer from "../../components/Footer"
import Form from "../../components/Form"
import Navbar from "../../components/Navbar"


function CreateProduct(){
    return(
        <>
        <Navbar />

        <Form type="create" />
        
        <Footer />
        </>
    )
}

export default CreateProduct