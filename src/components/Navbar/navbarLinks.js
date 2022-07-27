function NavbarLinks(props) {
    return (
        <a className="py-2 text-base md:text-lg uppercase font-normal leading-snug text-black" href={props.link}>
            <span className="text-black hover:opacity-75 hover:underline transition-all ease-in-out underline-offset-4 my-4 text-1xl md:text-base md:my-0 md:ml-6 block md:inline-flex ">{props.name}</span>
        </a>
    )
}

export default NavbarLinks