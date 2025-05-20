import Image1 from '/about/1.jpg';
import Image2 from '/about/2.jpg';
import Image3 from '/about/3.jpeg';
import Image4 from '/about/4.jpg';
import Image5 from '/about/5.png';
import Image6 from '/about/6.jpeg';

const AboutSection = () => {
    return <>
        <section id='about-section' className="mt-5 px-md-5 px-3">
            <h1 className="fw-bold mb-3" data-aos="fade-zoom-in">About Me</h1>
            <div className="row">
                <div className="col">
                    <p className="fs-4" style={{ textAlign: 'justify' }} data-aos="fade-zoom-in">An enthusiastic third-year Computer Science student with a strong passion for software development and technology. I am a dedicated hard worker, a reliable team player, and someone who never gives up. Committed to continuous learning and growth in the tech industry. </p>
                    <div className="row mb-2" data-aos="fade-zoom-in">
                        <div className="col-4 px-1"><img loading="lazy" className='w-100 object-fit-cover' src={Image1} alt="image-about" style={{ aspectRatio: '16/9'}} /></div>
                        <div className="col-4 px-1"><img loading="lazy" className='w-100 object-fit-cover' src={Image2} alt="image-about" style={{ aspectRatio: '16/9'}} /></div>
                        <div className="col-4 px-1"><img loading="lazy" className='w-100 object-fit-cover' src={Image3} alt="image-about" style={{ aspectRatio: '16/9'}} /></div>
                    </div>
                    <div className="row" data-aos="fade-zoom-in">
                        <div className="col-3 px-1"><img loading="lazy" className='w-100 object-fit-cover' src={Image4} alt="image-about" style={{ aspectRatio: '4/5'}} /></div>
                        <div className="col-6 px-1"><img loading="lazy" className='w-100 object-fit-cover' src={Image5} alt="image-about" style={{ aspectRatio: '16/10'}} /></div>
                        <div className="col-3 px-1"><img loading="lazy" className='w-100 object-fit-cover' src={Image6} alt="image-about" style={{ aspectRatio: '4/5'}} /></div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default AboutSection;