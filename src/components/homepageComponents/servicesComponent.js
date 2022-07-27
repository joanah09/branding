function Services(props) {
    return (
        <div className="py-5 px-20 md:px-0 col-span-1">
            <img className="mx-auto" src={`../../assets/images/home/${props.image}`} alt={props.name} />
            <h3 className="text-xl font-bold py-3">{props.name}</h3>
            <p className="text-base text-slate-400">{props.desc}</p>
        </div>
    )
}

export default Services