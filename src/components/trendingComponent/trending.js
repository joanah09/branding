import { Link, } from "react-router-dom";
import NewsDetail from "../../pages/newsDetail";

function Trending(props) {
    // console.log("TRENDING PAGE", props.item)
    

    return (
        <div className="mb-1 flex flex-col h-full">
        <figure className="bg-white m-3 flex-1">
            <img className="object-cover h-60 w-full" src= {props.item.attributes.posterImage.original} alt={props.item.attributes.titles.en_jp}/>
                <figcaption className="px-4 py-5">
                    <div className="grid grid-cols-1 h-5/6">
                        <h3 className="text-1xl font-semibold">{props.item.attributes.titles.en_jp}</h3>
                        <span className="text-1xl font-normal mb-3">{props.item.attributes.titles.ja_jp}</span>
                        <span>Type: {props.item.attributes.showType}</span>
                        <span>Episodes: {props.item.attributes.episodeCount}</span>
                        <span>Ratings: {props.item.attributes.ageRating}</span>
                        <span>Status: {props.item.attributes.status}</span>
     
         
                    </div>
                </figcaption>
        </figure>
        </div>
    )
}

export default Trending