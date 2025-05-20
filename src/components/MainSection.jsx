import Picture from '/profile picture/ivan.png';
import Carousel1 from '/carousel/Carousel1-compressed.mp4';
import Carousel2 from '/carousel/Carousel2-compressed.mp4';
import Carousel3 from '/carousel/Carousel3-compressed.mp4';

const MainSection = () => {
  return (
    <section id="main-section" className='z-1' style={{ height: '100vh'}} >
      <div className="position-relative w-100 h-100 z-2">
        <div id="carouselExampleInterval" className="carousel slide carousel-fade h-100 z-1" data-bs-ride="carousel">
          <div className="carousel-inner h-100">
            <div className="carousel-item h-100 active" data-bs-interval="3000" loading="lazy">
              <video loading="lazy" src={Carousel1} autoPlay loop playsInline className="d-block w-100 object-fit-cover h-100"/>
            </div>
            <div className="carousel-item h-100" data-bs-interval="3000" loading="lazy">
              <video loading="lazy" src={Carousel2} autoPlay loop playsInline className="d-block w-100 object-fit-cover h-100"/>
            </div>
            <div className="carousel-item h-100" data-bs-interval="3000" loading="lazy">
              <video loading="lazy" src={Carousel3} autoPlay loop playsInline className="d-block w-100 object-fit-cover h-100"/>
            </div>
          </div>
        </div>

        <div id='main-profile' className="w-100 z-3">
          <div className="row align-items-center justify-content-center w-100 p-0 mx-0">
            <div className="col-md-4 text-md-end text-center">
              <img src={Picture} alt="profile" className="rounded-circle mb-3" style={{ width: '50%', minWidth: '300px' }} data-aos="fade-zoom-in" />
            </div>
            <div className="col-md-8 text-center" data-aos="fade-zoom-in">
              <h1 className='text-shadow fw-bold'>Hello, I'm Ivan Tjandra</h1>
              <p className='text-shadow fs-4 fw-semibold'>Computer Science Student</p>
              <div className="sosmed-list d-flex flex-row gap-3 justify-content-center">
                <a id='linkedin' target="_blank" href="https://www.linkedin.com/in/ivan-tjandra-01b209288/" className='text-reset sosial-media-icon fs-3'><i className="text-shadow bi bi-linkedin"></i></a>
                <a id='instagram' target="_blank" href="https://www.instagram.com/ivantjandra18/" className='text-reset sosial-media-icon fs-3'><i className="text-shadow bi bi-instagram"></i></a>
                <a id='email' target="_blank" href="mailto:ivantjandra18@gmail.com" className='text-reset sosial-media-icon fs-3'><i className="text-shadow bi bi-envelope"></i></a>
                <a id='github1' target="_blank" href="https://github.com/NightOwlLab" className='text-reset sosial-media-icon fs-3'><i className="text-shadow bi bi-github"></i></a>
                <a id='github2' target="_blank" href="https://github.com/AmateurLinuxUser" className='text-reset sosial-media-icon fs-3'><i className="text-shadow bi bi-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
