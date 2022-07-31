import { useEffect, useState } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from "../movieComponent/movie"

function MovieComponent() {
    const [movieData, setMovieData] = useState([])     
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://ghibliapi.herokuapp.com/films")
            const data = await res.json()
            setMovieData(data)
        }
        getData()
    }, [])

    const movie = movieData.map((item, id) => {
        return <Movie key={id} 
        {...item} /> 
     })
     
    const movieSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: false,
                autoplay: true,
                autoplaySpeed: 3000
              }
            },
        ]
      };
    return(
        <section className="bg-white">
            <article className="sm:container mx-auto py-16 px-10 xl:px-40">
                <Slider {...movieSlider}>
                    {movie}
                </Slider>  
            </article> 
        </section>
    ) 
}

export default MovieComponent