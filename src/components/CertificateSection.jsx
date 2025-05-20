import CSCU from '/certificate/ECC-CSCU.jpg';
import SololearnCIntermediate from '/certificate/Sololearn - C Intermediate.jpg';
import SololearnJavaIntermediate from '/certificate/Sololearn - Java Intermediate.jpg';
import SololearnPythonDeveloper from '/certificate/Sololearn - Python Developer.jpg';
import SololearnWebDevelopment from '/certificate/Sololearn - Web Development.jpg';
import SololearnSQLIntermediate from '/certificate/Sololearn - SQL Intermediate.jpg';
import CertificateModal from './CertificateModal';
import { useState } from 'react';

const CertificateSection = () => {

    const certificates = [
        {
            id: "ECC5241908376",
            name: "Certified Secure Computer User V2",
            organization: "EC-Council",
            date: "June 2023",
            image: CSCU,
        },
        {
            id: "CC-ZBLQHFGC",
            name: "Web Development Course",
            organization: "Sololearn",
            date: "March 2025",
            image: SololearnWebDevelopment,
        },
        {
            id: "CC-ML0XN52O",
            name: "C Intermediate Course",
            organization: "Sololearn",
            date: "March 2025",
            image: SololearnCIntermediate,
        },
        {
            id: "CC-SDH9L49K",
            name: "Java Intermediate Course",
            organization: "Sololearn",
            date: "March 2025",
            image: SololearnJavaIntermediate,
        },
        {
            id: "CC-OQBSKMMX",
            name: "SQL Intermediate Course",
            organization: "Sololearn",
            date: "April 2025",
            image: SololearnSQLIntermediate,
        },
        {
            id: "CC-GGSZNSAU",
            name: "Python Developer Course",
            organization: "Sololearn",
            date: "April 2025",
            image: SololearnPythonDeveloper,
        }
    ];

    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return <>
        <section id='certificate-section' className="mt-5 px-md-5 px-3 mb-5" >
            <h1 className="fw-bold mb-5" data-aos="fade-zoom-in">Certificate</h1>
            <div className="row row-cols-xl-2 row-cols-1">
                {
                    certificates?.map((data, i) =>
                        <div key={i} className="col mb-3" data-aos="fade-zoom-in">
                            <div className="card shadow h-100 overflow-hidden">
                                <div className="row g-0 h-100">
                                    <div className="col-3 ">
                                        <img loading="lazy" src={data?.image} className="card-img-top object-fit-cover border rounded-0 m-0 h-100" alt="experience-picture"/>
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body">
                                            <h5 className="card-title fw-semibold">{data?.organization} - {data?.name}</h5>
                                            <p className="card-text">{data?.id} </p>
                                            <p className='card-text'>{data?.date}</p>
                                            <div className="d-flex w-100 flex-row justify-content-end">
                                                <button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#certificate-modal" onClick={() => {setSelectedCertificate(data)}}>
                                                    View Certificate
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <CertificateModal image={selectedCertificate?.image} />
        </section>
    </>
}

export default CertificateSection;