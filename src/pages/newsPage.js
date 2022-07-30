import Footer from "../components/footer/footer";
import Navbar from "../components/Navbar/navbarComponent";
import News from "../components/trendingComponent/news";

function NewsPage() {

    return(
        <>
        <Navbar />
            <div className="flex flex-col h-full">
                <div className="grid grid-cols-1 h-5/6">
                    <News />
                </div>
            </div>
        <Footer />
        </>
    )
}

export default NewsPage