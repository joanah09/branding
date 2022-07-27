import NavbarLinks from "../Navbar/navbarLinks"
import data from "../../data"

function Footer() {
    const links = data.navbar.map(item => {
        return (
          <NavbarLinks key={item.name} {...item}/>
          
        )
      })

    return(
        <section className="bg-orange-50 mt-0 xl:mt-16 mx-auto text-center">
        <article className="sm:container mx-auto py-16 px-10 xl:px-40 xl:flex flex-row">
            <div className="basis-full">
                <h1>LOGO</h1>
                <ul className="mt-5">
                    {links}
                </ul>
                <div>
                <p className="mt-10">©2022 Branding. Nisl pretium fusce id velit ut. Placerat duis ultricies lacus sed turpis tincidunt. Id interdum velit laoreet id donec ultrices.</p>
                </div>
            </div>
        </article>
    </section>
    )
}

export default Footer