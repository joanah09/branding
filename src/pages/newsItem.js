function NewsItem(props) {
    return(
        <div className="mb-10 flex flex-col h-full">
        <figure className="bg-white m-3 flex-1">
            
            <img className="object-cover h-60 w-full" src={props.image.original} alt={props.author}/>
                <figcaption className="px-4 py-5">
                    <div className="grid grid-cols-1 h-5/6">
                        <h3 className="text-1xl font-semibold">{props.title.en_jp}</h3>
                        <span className="text-1xl font-normal mb-3">{props.title.ja_jp}</span>
                  
                        <span>Type: {props.attr.showType}</span>
                        <span>Episodes: {props.attr.episodeCount}</span>
                        <span>Ratings: {props.attr.ageRating}</span>
                        <span>Status: {props.attr.status}</span>
                        <a className="text-base underline underline-offset-4 font-semibold" href={props.url}>Read More</a>
                    </div>
                </figcaption>
        </figure>
    </div>
    )
}

export default NewsItem