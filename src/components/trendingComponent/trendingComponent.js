import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsDetail from "../../pages/newsDetail";

class NewsComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://kitsu.io/api/edge/trending/anime")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.data,
            });
            // console.log(result.data)
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
        const { items } = this.state;
        const newsSlider = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 2000,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                }
                },
            ]
        };
    
        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div className="sm:container">Loading...</div>;
        // } else 
        
        return (

            <section className="bg-slate-50">
            <article className="sm:container mx-auto py-16 px-10 xl:px-40">
            <span className="text-1xl xl:text-2xl italic font-normal text-orange-300">Our Updates</span>
                <h2 className="text-3xl xl:text-5xl font-bold xl:pt-4 pb-10">Trending Anime</h2>
                <Slider className="flex" {...newsSlider}>
                {
                    items.map(item => 
                    <NewsDetail 
                    key={item.id}
                    item={item}
                    />
                    )
                }
                </Slider>
                <div className="mt-10 text-center">
                <a href="/news" className="rounded-full transition-all ease-in-out hover:opacity-75 bg-slate-700 text-slate-50 px-14 py-2 xl:py-3">See More</a>
                </div>
            </article> 

        </section>

        )
      
    }
  }

  export default NewsComponent