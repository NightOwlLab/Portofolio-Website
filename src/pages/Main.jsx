import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import MainSection from "../components/MainSection";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import CertificateSection from "../components/CertificateSection";

const Main = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            delay: 200,
            offset: 0,
            easing: 'ease-in-back'
        });
        AOS.refresh();
    }, []);

    return <>
        <MainSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
        <CertificateSection />
    </>
}

export default Main;