function News(props) {
    console.log(props)
    return(
        <div className="mb-10">
            <figure className="bg-white m-3">
                <img className="object-cover h-60 w-full" src={props.thumbnail} alt={props.title}/>
                <figcaption className="px-4 py-5">
                    <h3 className="text-2xl font-semibold">{props.title}</h3>
                    <p className="text-base py-4">{props.short_description}</p>
                    <a className="text-base underline underline-offset-4 font-semibold" href={props.game_url}>{props.game_url}</a>
                </figcaption>
            </figure>
        </div>
    )
}

export default News