import BudiUtama from '/education/budiutama.png';
import Uajy from '/education/uajy.png';

const EducationSection = () => {

    const education_data = [
        {
            name: "Budi Utama High School",
            description: "Math & Science (2019 - 2022)",
            image: BudiUtama,
            link: "https://budiutama-jogja.sch.id/profil?level=sma&lang=id",
        },
        {
            name: "Atma Jaya Yogyakarta University",
            description: "Computer Science (2022 - Present)",
            image: Uajy,
            link: "https://uajy.ac.id/",
        },

    ];
    
    return <>
        <section id='education-section' className='mt-5 px-md-5 px-3' >
            <h1 className='fw-bold mb-5' data-aos="fade-zoom-in">Education</h1>
            <div className="row row-cols-xl-2 row-cols-1">
                {
                    education_data.map((data, i) => 
                        <div key={i} className="col mb-3" data-aos="fade-zoom-in">
                            <div key={i} className="card shadow h-100 rounded overflow-hidden">
                                <div className="row g-0 h-100">
                                    <div className="col-3 h-100 d-flex align-items-center justify-content-center px-2" style={{ backgroundColor:'white'}}>
                                        <img loading="lazy" src={data.image} className="card-img-top object-fit-contain " alt="budiutama-logo" style={{ backgroundColor:'white'}}/>
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body">
                                            <h5 className="card-title fw-semibold">{data.name}</h5>
                                            <p className="card-text">{data.description}</p>
                                            <a target='_blank' href={data.link} className={`btn btn-custom`}>Visit Website</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    </>
}

export default EducationSection;