import React, {Component} from "react";
import NewsDetail from "../../pages/newsDetail";

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
        return (
            <>
              <section className="bg-slate-50">
                <article className="sm:container mx-auto py-16 px-10 xl:px-40">
                    <h2 className="text-3xl xl:text-5xl font-bold xl:pt-4 pb-10">Trending Anime</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      { this.state.items &&
                          this.state.items.map((item) => 
                          <NewsDetail 
                          key={item.id} 
                          item={item}
                          />
                          )
                      }
                    </div>                      
                </article> 
              </section>
            </>
        )
    }
  }

  export default News