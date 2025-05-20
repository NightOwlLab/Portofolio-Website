import { useEffect, useState } from "react";

const Header = () => {
  const [activeHeader, setActiveHeader] = useState("main-section");
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const setUIMode = () => {
    const html = document.querySelector("html");

    if(darkMode) {
      html.setAttribute("data-bs-theme", "light");
    } else {
      html.setAttribute("data-bs-theme", "dark");
    }

    setDarkMode(!darkMode);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
        const hash = window.location.hash.replace('#', '');
        setActiveHeader(hash || "main-section");
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
        window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg border-body position-fixed top-0 start-0 end-0
        ${darkMode ? "bg-dark" : "bg-light"} 
        ${scrolled || isOpen ? "navbar-solid border-bottom" : "navbar-transparent"}`} style={{ zIndex: '999' }} >
        <div className="container-fluid">
          <a className={`navbar-brand fw-bold ${scrolled || isOpen ? "" : "text-shadow-inherit"}`} href="#">
            Ivan's portfolio
          </a>
          <button
            className={`navbar-toggler border-0 ${(!scrolled && !isOpen) ? 'toggler-white' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {setIsOpen(!isOpen)}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-1">
              <li className="nav-item text-center mx-3">
                <a className={`nav-link ${scrolled || isOpen ? "" : "text-shadow-inherit"} ${activeHeader === 'main-section' ? 'active' : ''}`} href="#main-section" onClick={() => setActiveHeader('main-section')}>
                  Main
                </a>
              </li>
              <li className="nav-item text-center mx-3">
                <a className={`nav-link ${scrolled || isOpen ? "" : "text-shadow-inherit"} ${activeHeader === 'about-section' ? 'active' : ''}`} href="#about-section" onClick={() => setActiveHeader('about-section')}>
                  About Me
                </a>
              </li>
              <li className="nav-item text-center mx-3">
                <a className={`nav-link ${scrolled || isOpen ? "" : "text-shadow-inherit"} ${activeHeader === 'education-section' ? 'active' : ''}`} href="#education-section" onClick={() => setActiveHeader('education-section')}>
                  Education
                </a>
              </li>
              <li className="nav-item text-center mx-3">
                <a className={`nav-link ${scrolled || isOpen ? "" : "text-shadow-inherit"} ${activeHeader === 'experience-section' ? 'active' : ''}`} href="#experience-section" onClick={() => setActiveHeader('experience-section')}>
                  Experience
                </a>
              </li>
              <li className="nav-item text-center mx-3">
                <a className={`nav-link ${scrolled || isOpen ? "" : "text-shadow-inherit"} ${activeHeader === 'skill-section' ? 'active' : ''}`} href="#skill-section" onClick={() => setActiveHeader('skill-section')}>
                  Skills
                </a>
              </li>
              <li className="nav-item text-center mx-3">
                <a className={`nav-link ${scrolled || isOpen ? "" : "text-shadow-inherit"} ${activeHeader === 'project-section' ? 'active' : ''}`} href="#project-section" onClick={() => setActiveHeader('project-section')}>
                  Project
                </a>
              </li>
              <li className="nav-item text-center mx-3">
                <a className={`nav-link ${scrolled || isOpen ? "" : "text-shadow-inherit"} ${activeHeader === 'certificate-section' ? 'active' : ''}`} href="#certificate-section" onClick={() => setActiveHeader('certificate-section')}>
                  Certificate
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <button className={`btn toogle-mode ${scrolled || isOpen ? "" : "text-shadow-inherit"}`} onClick={() => setUIMode()}>
                {darkMode ? <><i className="bi bi-moon-fill"></i> Dark mode</> : <><i className="bi bi-brightness-high-fill"></i> Light mode</>}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
