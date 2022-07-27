import { useEffect, useState } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../testimonialComponent/testimonial"

function TestimonialComponent() {
    const [testimonials, setTestimonails] = useState([]) 
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://testimonialapi.toolcarton.com/api")
            const data = await res.json()
            setTestimonails(data)
        }
        getData()
    }, [])

    const testi = testimonials.map((item, id) => {
        return <Testimonials key={id} 
        {...item} /> 
     })
    const testimonialsSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                <Slider {...testimonialsSlider}>
                    {testi}
                </Slider>
            </article> 
        </section>

    ) 
}

export default TestimonialComponent