import C from '/tech/c.png';
import Cpp from '/tech/cpp.png';
import Java from '/tech/java.png';
import Kotlin from '/tech/kotlin.png';
import Python from '/tech/python.png';
import Dart from '/tech/dart.png';

import MySQL from '/tech/mysql.png';
import MariaDB from '/tech/mariadb.png';
import MongoDB from '/tech/MongoDB.png';

import html from '/tech/html.png';
import css from '/tech/css.png';
import js from '/tech/javascript.png';

import php from '/tech/php.png';
import Laravel from '/tech/laravel.png';
import ExpressJS from '/tech/expressjs.png';
import NodeJS from '/tech/node.png';

import ReactJS from '/tech/reactjs.png';
import bootstrap from '/tech/bootstrap.png';
import tailwind from '/tech/tailwind.png';
import reactBootstrap from '/tech/react-bootstrap.png';

import Flutter from '/tech/flutter.png';

import PyGame from '/tech/pygame.png';

import VSCode from '/tech/vscode.png';
import AndroidStudio from '/tech/android-studio.png';
import XAMPP from '/tech/xampp.png';
import Git from '/tech/git.png';
import Github from '/tech/github.png';
import Postman from '/tech/postman.png';
import Figma from '/tech/figma.png';
import Firebase from '/tech/firebase.png';
import Vercel from '/tech/Vercel.png';
import IntelijIdea from '/tech/intelij-idea.png';
import Netbeans from '/tech/netbeans.png';
import NPM from '/tech/npm.png';
import Composer from '/tech/Composer.png';
import VirtualBox from '/tech/virtualbox.png';
import VMWare from '/tech/vmware.png';
import PacketTracer from '/tech/packet-tracer.png';
import Codeblocks from '/tech/codeblocks.png';
import Sublimetext from '/tech/sublimetext.png';
import Selenium from '/tech/Selenium.png';
import Filezilla from '/tech/filezilla.png';
import Cpanel from '/tech/cpanel.png';

import ArchLinux from '/tech/arch-linux.png';
import Ubuntu from '/tech/ubuntu.png';
import KaliLinux from '/tech/kali-linux.png';

import Unity from '/tech/unity.png';
import Csharp from '/tech/Csharp.png';
import Azure from '/tech/Azure.png';

const SkillSection = () => {

    const programming_language = [
        {
            name: "C",
            image: C,
        },
        {
            name: "C++",
            image: Cpp
        },
        {
            name: "Java",
            image: Java
        },
        {
            name: "Kotlin",
            image: Kotlin
        },
        {
            name: "Python",
            image: Python
        },
        {
            name: "Dart",
            image: Dart
        }
    ];
    const website_development = [
        {
            name: "HTML",
            image: html
        },
        {
            name: "CSS",
            image: css
        },
        {
            name: "Javascript",
            image: js
        },
        {
            name: "PHP",
            image: php
        },
    ];
    const database = [
        {
            name: "MySQL",
            image: MySQL
        },
        {
            name: "MariaDB",
            image: MariaDB
        },
        {
            name: "MongoDB",
            image: MongoDB
        }
    ];
    const backend_development = [
        {
            name: "Laravel",
            image: Laravel
        },
        {
            name: "NodeJS",
            image: NodeJS,
        },
        {
            name: "ExpressJS",
            image: ExpressJS,
            whiteBg: true
        }
    ];
    const frontend_website_development = [
        {
            name: 'ReactJS',
            image: ReactJS
        },
        {
            name: "Laravel",
            image: Laravel
        },
        {
            name: "Bootstrap",
            image: bootstrap
        },
        {
            name: "Tailwind CSS",
            image: tailwind
        },
        {
            name: "React Bootstrap",
            image: reactBootstrap
        }
    ];
    const mobile_application_development = [
        {
            name: "Flutter",
            image: Flutter
        }
    ];
    const tools_development = [
        {
            name: "VS Code",
            image: VSCode
        },
        {
            name: "Android Studio",
            image: AndroidStudio
        },
        {
            name: "XAMPP",
            image: XAMPP
        },
        {
            name: "Git",
            image: Git
        },
        {
            name: "Github",
            image: Github,
            whiteBg: true
        },
        {
            name: "Postman",
            image:  Postman
        },
        {
            name: "Figma",
            image: Figma
        },
        {
            name: "Firebase",
            image: Firebase
        },
        {
            name: "Vercel",
            image: Vercel,
            whiteBg: true
        },
        {
            name: "InteliJ IDEA",
            image: IntelijIdea
        },
        {
            name: "Netbeans",
            image: Netbeans
        },
        {
            name: "NPM",
            image: NPM
        },
        {
            name: "Composer",
            image: Composer
        },
        {
            name: "Virtual Box",
            image: VirtualBox
        },
        {
            name: "VM Ware",
            image: VMWare
        },
        {
            name: "Packet Tracer",
            image: PacketTracer
        },
        {
            name: "Codeblocks",
            image: Codeblocks
        },
        {
            name: "Sublime Text",
            image: Sublimetext
        },
        {
            name: "Selenium",
            image: Selenium
        },
        {
            name: "Filezilla",
            image: Filezilla
        },
        {
            name: "Cpanel",
            image: Cpanel
        }
    ];
    const game_development = [
        {
            name: "PyGame",
            image: PyGame
        }
    ];
    const linux_distro = [
        {
            name: "Arch Linux",
            image: ArchLinux
        },
        {
            name: "Ubuntu",
            image: Ubuntu
        },
        {
            name: "Kali Linux",
            image: KaliLinux,
            whiteBg: true
        }
    ];
    const other_skill = [
        {
            name: "C#",
            image: Csharp
        },
        {
            name: "Unity",
            image: Unity,
            whiteBg: true
        },
        {
            name: "Azure",
            image: Azure
        }
    ];
    
    const skills = [
        {
            title: "Programming Language",
            datas: programming_language
        },
        {
            title: "Database",
            datas: database
        }, 
        {
            title: "Website Development",
            datas: website_development
        },
        {
            title: "Backend Development",
            datas: backend_development
        },
        {
            title: "Frontend Website Development",
            datas: frontend_website_development
        }, 
        {
            title: "Mobile Application Development",
            datas: mobile_application_development
        },
        {
            title: "Game Development",
            datas: game_development
        },
        {
            title: "Tools",
            datas: tools_development
        },
        {
            title: "Linux Distro",
            datas: linux_distro
        },
        {
            title: "In Progress",
            datas: other_skill
        },
    ];

    return <>
        <section id='skill-section' className="mt-5 px-md-5 px-3" >
            <h1 className="fw-bold" data-aos="fade-zoom-in">Skills</h1>
            <ul>
                {
                    skills?.map((skill, i) =>
                        <li className='mt-3' key={i} data-aos="fade-zoom-in">
                            <p className="fs-3 fw-semibold">{skill?.title}</p>
                            <div className="d-flex flex-row flex-wrap gap-3 justify-content-start">
                            {skill?.datas?.map((data, i) => 
                                <div key={i} className="skill-card rounded d-flex flex-column justify-content-start align-items-center p-3" style={{ width: '100px'}}>
                                    <img loading="lazy" className='w-100 rounded object-fit-scale' src={data?.image} alt='skill' style={{ filter: `${data.whiteBg ? "drop-shadow(1px 1px white) drop-shadow(-1px -1px white)" : ""}`, aspectRatio:'1/1' }} />
                                    <p className='text-center m-0 mt-2 fw-semibold' style={{ fontSize:'1rem'}}>{data?.name}</p>
                                </div>
                            )}
                            </div>
                        </li>
                    )
                }
            </ul>
        </section>
    </>
}

export default SkillSection;