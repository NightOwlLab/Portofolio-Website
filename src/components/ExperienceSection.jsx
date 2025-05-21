import Ksl from '/experience/ksl.svg';
import KslMoment from '/experience/ksl-moment.jpg';
import Himaforka from '/experience/himaforka.jpg';
import HimaforkaMoment from '/experience/himaforka-moment.jpg';
import BasicMath from '/experience/basicmath.jpg';
import LinearAlgebra from '/experience/linearalgebra.jpg';
import Network from '/experience/network.jpg';

const ExperienceSection = () => {

    const experience_data = [
        {
            title: "Chairman - KSL UAJY",
            description: "September 2023 – June 2024",
            image: KslMoment,
            link: "https://ksl.himaforka-uajy.org/"
        },
        {
            title: "Member of APRES - HIMAFORKA UAJY",
            description: "September 2023 – June 2024",
            image: HimaforkaMoment,
            link: "https://v3.himaforka-uajy.org/"
        },
        {
            title: "Assistant Lecturer of Basic Mathematics Course",
            description: "September 2023 – December 2023",
            image: BasicMath,
            link: "https://www.linkedin.com/in/ivan-tjandra-01b209288/"
        },
        {
            title: "Assistant Lecturer of Linear Algebra Course",
            description: "February 2024 – June 2024",
            image: LinearAlgebra,
            link: "https://www.linkedin.com/in/ivan-tjandra-01b209288/"
        },
        {
            title: "Assistant Lecturer of Computer Networks Course",
            description: "September 2024 – December 2024",
            image: Network,
            link: "https://www.linkedin.com/in/ivan-tjandra-01b209288/"
        }
    ];

    return <>
        <section id='experience-section' className='mt-5 px-md-5 px-3' >
            <h1 className='fw-bold mb-5' data-aos="fade-zoom-in">Experience</h1>
            <div className="row row-cols-xl-5 row-cols-md-2 row-cols-1 justify-content-center">
                {
                    experience_data?.map((data, i) =>
                        <div key={i} className="col my-3 mb-lg-0 gap-2" data-aos="fade-zoom-in">
                            <div className="card shadow-lg h-100">
                                <img loading="lazy" src={data?.image} className="card-img-top border-bottom object-fit-cover" alt="experience-picture" style={{ backgroundColor:'white', height:'15rem'}}/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div className='mb-3'>
                                        <h5 className="card-title fw-semibold">{data?.title}</h5>
                                        <p className="card-text">{data?.description}</p>
                                    </div>
                                    <a target='_blank' href={data?.link} className={`btn btn-custom`}>See more</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    </>
}

export default ExperienceSection;