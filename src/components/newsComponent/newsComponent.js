import { useEffect, useState } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import News from "./news";

function NewsComponent() {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://www.mmobomb.com/api1/games", {
                headers: {
                    "Access-Control-Allow-Origin":"*",
                    "Access-Control-Allow-Methods": "HEAD, GET, POST, PUT, PATCH, DELETE",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                }
            })
            const data = await res.json()
            setNewsData(data)
        }
        getData()
    }, [])

    const news = newsData.map(item => {
        return <News key={item.id} 
        {...item} />
     })

    const newsSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000
            }
            },
        ]
    };


    return(
    <section className="bg-slate-50">
        <article className="sm:container mx-auto py-16 px-10 xl:px-40">
        <span className="text-1xl xl:text-2xl italic font-normal text-orange-300">Our Updates</span>
            <h2 className="text-3xl xl:text-5xl font-bold xl:pt-4 pb-10">News Articles</h2>
            <Slider {...newsSlider}>
                {news}
            </Slider>
        </article> 
    </section>
    )
}

export default NewsComponent