import banner from '../../assets/images/home/banner.jpg';

function Banner() {
    return (
        <section className="banner">
            <div className="h-64 md:h-96 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
            </div>
        </section>
    )
}

export default Banner