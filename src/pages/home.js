import { useEffect, useState } from "react"
import Banner from "../components/bannerComponent/bannerComponent"
import Navbar from "../components/Navbar/navbarComponent"
import image from "../assets/images/home/vid-placeholder.jpg"
import bgBlue from "../assets/images/home/bg-blue.jpg"
import QuoteImg from "../assets/images/home/quote.jpg"
import data from "../data"
import Lists from "../components/homepageComponents/lists"
import Services from "../components/homepageComponents/servicesComponent"
import Footer from "../components/footer/footer"
import MovieComponent from "../components/movieComponent/movieComponent"
import TrendingComponent from "../components/trendingComponent/trendingComponent"

function Home() { 
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    useEffect(() => {
        function handleWidth() {
            setScreenSize(window.innerWidth)
        }
        window.addEventListener("resize", handleWidth)
        return () => {
            window.removeEventListener("resize", handleWidth)
        }
    }, [])
 
    const list = data.homepage.lists.map((item, id) => {
        return (
            <Lists key={id} {...item} />
        )
    })

    const services = data.homepage.services.map((item, id) => {
        return (
            <Services key={id} {...item}/>
        )
    })

    return (
        <>
            <Navbar />
            <Banner />
            <main className="home">
                <section className="sm:container mx-auto py-16 px-10 xl:px-40 text-slate-800 text-center grid flex">
                    <h2 className="font-bold text-3xl xl:text-5xl pb-5 xl:pb-14 text-center">Header Title</h2>
                    <p className="font-normal text-justify text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <img className="h-auto w-auto py-5 xl:py-10 mx-auto" src={image} alt="hero"/>
                </section>

                <section className="bg-orange-50">
                    <article className="sm:container mx-auto py-16 px-10 xl:px-40 xl:flex flex-row">
                        <div className="basis-full md:basis-2/6">
                            <h2 className="text-3xl xl:text-5xl font-light xl:pt-0 pb-5 xl:pb-10">Sed ut perspiciatis unde omnis iste</h2>
                            <a href="#" className="rounded-full transition-all ease-in-out hover:opacity-75 bg-slate-700 text-slate-50 px-14 py-2 xl:py-3">More Info</a>
                        </div>
                        <div className="basis-full md:basis-4/6">
                            <p className="pt-5 xl:pt-0">omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,  adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit </p>
                        </div>
                    </article>
                </section>

                <section className="bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${bgBlue})`}}>
                    <article className="sm:container mx-auto py-16 px-10 lg:px-40">
                        <h2 className="text-3xl xl:text-5xl text-center text-orange-300 font-light xl:pt-28 pb-10">At vero eos et accusamus et iusto odio dignissimos </h2>
                        <ul className="h-auto xl:h-96 list-disc grid grid-cols-2 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
                            {list}
                        </ul>
                    </article>
                </section>

                <section>
                    <article className="sm:container text-center mx-auto py-16 xl:px-40">
                        <span className="text-1xl xl:text-2xl italic font-normal text-orange-300">sed quia non numquam</span>
                        <h2 className="text-3xl xl:text-5xl font-bold xl:pt-4 pb-10">Quis autem vel eum iure </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8">
                            {services}
                        </div>
                    </article>
                </section>

                <TrendingComponent />                
                <MovieComponent />

                <section className="bg-blue-900 xl:bg-white">
                    <article className="sm:container mx-auto bg-no-repeat bg-blue-900 md:bg-none md:bg-cover px-10 py-16 md:px-24 md:p-24 mb-0 xl:mb-16" style={{backgroundImage: screenSize > 1280 ? `url(${QuoteImg})` : "" }}>
                        <div className="w-full lg:w-5/12 2xl:w-2/5 pr-0  2xl:pr-16">
                            <span className="text-1xl xl:text-2xl italic font-normal text-orange-300">sed quia non numquam</span>
                            <h2 className="text-3xl xl:text-5xl font-semibold text-white xl:pt-4 pb-10">Can’t find an active role that suits you?</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p className="text-white pt-5 mb-10 font-semibold">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a className="bg-orange-300 transition-all ease-in-out hover:bg-orange-100 font-semibold rounded-full py-3 px-7 h-24" href="#">Join Talent Community</a>
                        </div>
                    </article> 
                </section>
                
            </main>
            <Footer />
        </>
    )
}

export default Home