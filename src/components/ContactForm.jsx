import { Link } from "react-router-dom"

function ContactForm() {
    return (
        <>

            <div className="my-6">
                <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
                    <div>
                        <h1 className="text-3xl font-extrabold">Let's Talk</h1>
                        <p className="text-sm text-gray-400 mt-3">Feel free to reach out ! Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you.</p>
                        <div className="mt-12">
                            <h2 className="text-lg font-extrabold">Email</h2>
                            <ul className="mt-3">
                                <li className="flex items-center">
                                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-256.png" width="20px" height="20px" fill='#007bff'
                                            viewBox="0 0 479.058 479.058">
                                        </img>
                                    </div>
                                    <Link to="/contact" className="text-[#007bff] text-sm ml-3">
                                        <small className="block">Mail</small>
                                        <strong>sarojt813@gmail.com</strong>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12">
                            <h2 className="text-lg font-extrabold">Socials</h2>
                            <ul className="flex mt-3 space-x-4">
                                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <Link to="https://github.com/sarojp10">
                                        <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png" width="20px" height="20px" fill='#007bff'
                                            viewBox="0 0 511 512">
                                        </img>
                                    </Link>
                                </li>
                               
                                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <Link to="https://www.facebook.com/saroj.rondarousy">
                                        <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" width="20px" height="20px" fill='#007bff' viewBox="0 0 24 24">
                                        </img>
                                    </Link>
                                </li>
                                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <Link to="https://www.instagram.com/sa65roj/">
                                        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/instagram_icon-instagram_buttoninstegram-256.png" width="20px" height="20px" fill='#007bff'
                                            viewBox="0 0 511 512">
                                        </img>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form className="ml-auo space-y-4">
                        <input type='text' placeholder='Name'
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                        <input type='email' placeholder='Email'
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                        <input type='text' placeholder='Subject'
                            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                        <textarea placeholder='Message' rows="6"
                            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
                        <button type='button'
                            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ContactForm