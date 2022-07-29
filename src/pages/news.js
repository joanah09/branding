import React, {Component} from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/Navbar/navbarComponent";
import Trending from "../components/trendingComponent/trending";

class News extends Component {
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
        
        return (
            <>
                <Navbar />
                <section className="bg-slate-50">
                <article className="sm:container mx-auto py-16 px-10 xl:px-40">
                    <h2 className="text-3xl xl:text-5xl font-bold xl:pt-4 pb-10">Trending Anime</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                    {
                        items.map(item => 
                        <Trending 
                        key={item.id} 
                        type={item.type}
                        image={item.attributes.posterImage}
                        title={item.attributes.titles}
                        attr={item.attributes}   
                        />
                        )
                    }
                    </div>
                </article> 
                </section>
                <Footer />
            </>
        )
    }
  }

  export default News