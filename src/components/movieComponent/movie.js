function Movie(props) {
    // console.log("MOVIE SINGLE PAGE", props)

    return (  
        <section className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-x-8">
            <article className="px- py-1 col-span-2">
                <h3 className="text-2xl font-semibold">{props.title}</h3>
                <div className="pt-3">
                    <p>{props.original_title} / {props.original_title_romanised}</p>
                    <p>Producer: {props.producer}</p>
                    <p>Director: {props.director}</p>
                    <p>Release Date: {props.release_date}</p>
                    <p>Running Time: {props.running_time}</p>
                    <p>Ratings: {props.rt_score}</p>
                </div>
                <p className="text-base italic py-4">{props.description}</p>
                <p>Credits to Studio Ghibli API</p>
                {/* <Link id="movie" to={`/movie/${props.id}`} state={props}> MOVIE </Link> */}
                
            </article>
            <article className="col-span-1 order-first md:order-last">
                <img className="object-cover h-96 mx-auto pb-5" src={props.image} />
            </article>
        </section>
    
    )
}

export default Movie