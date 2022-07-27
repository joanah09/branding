function Testimonials(props) {
    // console.log(props)
    return (
        <div className="">
        <section className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-x-8">
            <article className="px-4 py-5 col-span-2">
                <h3 className="text-2xl font-semibold">{props.name}</h3>
                <p className="text-base italic py-8">{props.message}</p>
                <div className="flex items-center">
                    <img className="h-14 rounded-full" src={props.avatar} alt={props.name} />
                    <div className="pl-5">
                        <p>{props.name}</p>
                        <p>{props.designation}</p>
                    </div>
                </div>
            </article>

            <article className="col-span-1">
                <img className="object-cover h-60 mx-auto" src={props.avatar} />
            </article>
        </section>
    </div>
    )
}

export default Testimonials