import { Link } from "react-router-dom"
import Banner from "../components/bannerComponent/bannerComponent"
import Footer from "../components/footer/footer"
import Navbar from "../components/Navbar/navbarComponent"

function Missing() {
    return (
        <>
            <Navbar /> 
            <Banner />
            <section className="sm:container mx-auto py-16 px-10 xl:px-40 text-slate-800 text-center grid flex">
                    <h2 className="font-bold text-3xl xl:text-5xl pb-5 xl:pb-14 text-center">404 Page Not Found</h2>
                    <p className="pt-5 mb-10 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h3 className="rounded-full transition-all ease-in-out hover:opacity-75 bg-slate-700 text-slate-50 px-14 py-2 xl:py-3 w-64 mx-auto"><Link to="/">Back to Home</Link></h3>
                    
                </section>
            <Footer />
        </>
    )
}

export default Missing