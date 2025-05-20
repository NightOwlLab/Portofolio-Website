import FlappyBird from '/project/flappybird.png';
import AtmaLaundry from '/project/atma-laundry.png';
import AtmaCinema from '/project/atma-cinema.jpeg';
import Loopwear from '/project/loopwear.png';

const ProjectSection = () => {
    const projects = [
        {
            name: "Flappy Bird Pygame",
            date: "October 2022",
            description: "This is a project created in my free time to have fun and experiment with making games with the Python language.",
            tech: ["Python", "Pygame"],
            image: FlappyBird,
            links: [
                {
                    name: "Source Code",
                    link: "https://github.com/NightOwlLab/Flappy-Bird-Pygame.git"
                }
            ]
        },
        {
            name: "Atma Cinema",
            date: "September 2024 – December 2024",
            description: "This is a mobile application project that I created with my college friends for the final assignment of platform-based programming subjects. Using Laravel, Flutter, and MySQL in its creation.",
            tech: ["Laravel", "Flutter"],
            image: AtmaCinema,
            links: [
                {
                    name: "Source Code Frontend",
                    link: "https://github.com/Dayaszs/1_D_Bioskop.git"
                },
                {
                    name: "Source Code Backend",
                    link: "https://github.com/Vingorithm/1_D_Bioskop_Backend.git"
                }
            ]
        },
        {
            name: "Atma Laundry",
            date: "September 2024 – December 2024",
            description: "This is a laundry business website project that I created together with my college friends for my final assignment in website programming subject. Made using Laravel and MySQL.",
            tech: ["Laravel"],
            image: AtmaLaundry,
            links: [
                {
                    name: "Source Code",
                    link: "https://github.com/NataniaReginaCS/PW_E_9_LARAVEL.git"
                }
            ]
        },
        {
            name: "Loop Wear",
            date: "February 2025 – March 2025",
            description: "This is a second-hand clothing e-commerce website project that I created with my teammates for the Web Development Competition. Using ReactJS and Bootstrap in its creation.",
            tech: ["ReactJS"],
            image: Loopwear,
            links: [
                {
                    name: "Source Code",
                    link: "https://github.com/Vingorithm/wdc-loopwear-2025.git"
                }
            ]
        }
    ];

    return <>
        <section id='project-section' className="mt-5 px-md-5 px-3" >
            <h1 className="fw-bold mb-5" data-aos="fade-zoom-in">Project</h1>
                <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
                    {
                        projects?.map((data, i) => 
                            <div className="col my-3 mb-lg-0" key={i} data-aos="fade-zoom-in">
                                <div className="card shadow-lg h-100">
                                    <img loading="lazy" src={data?.image} className="card-img-top border-bottom object-fit-cover" alt="experience-picture" style={{ backgroundColor:'#545934', height:'15rem'}}/>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className='mb-2'>
                                            <h5 className="card-title fw-semibold">{data?.name}</h5>
                                            <p className="card-text">{data?.date}</p>
                                            <p className="card-text">{data?.description}</p>
                                            {data?.tech?.map((badge, i) => <span key={i} className="badge mb-4 me-2 tech-badge">{badge}</span> )}
                                        </div>
                                        <div className=''>
                                            <div className="d-flex flex-row gap-2 flex-wrap w-100 justify-content-center">
                                                {data?.links?.map((link, i) => <a key={i} target='_blank' href={link?.link} className={`btn btn-custom w-100`}>{link?.name}</a> )}
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

export default ProjectSection;