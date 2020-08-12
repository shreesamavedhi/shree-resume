import React from 'react';
import './App.css';
import profile from './assets/profile.jpg'
import { Link } from "react-scroll";
import { FaReact, FaNpm, FaJava, FaGitlab, FaGitSquare, FaLinux, FaConfluence, FaNode, FaKaggle, FaGithub, FaRegSmileBeam, FaLinkedinIn } from 'react-icons/fa';
import { DiVisualstudio, DiPython, DiWindows,DiMsqlServer, DiScrum, DiJira, DiJavascript1 } from "react-icons/di";
import { Fragment } from 'react';


function App() {
  return (
      <Fragment>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Shree Samavedhi</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="" /></span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li></Link>
                    <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-70} duration={500}>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li></Link>
                    <Link activeClass="active" to="education" spy={true} smooth={true} offset={-70} duration={500}>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li></Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li></Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></li></Link>
                    <Link activeClass="active" to="interests" spy={true} smooth={true} offset={-70} duration={500}>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li></Link>
                    <Link activeClass="active" to="awards" spy={true} smooth={true} offset={-70} duration={500}>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li></Link>
                </ul>
            </div>
        </nav>
        
        <div class="container-fluid p-0">
            
            <section class="resume-section-first" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        Shree
                        <span class="text-primary">Samavedhi</span>
                    </h1>
                    <div class="subheading">
                        302 East John Street, Apt 0802 · Champaign, IL 61820 · (314) 757-3678 ·
                        <a href="mailto:name@email.com">shreesamavedhi114@gmail.com</a>
                    </div>
                    <p class="lead">Hi! I'm an undergraduate student excited to learn new technology skills and create interesting projects. Currently, I'm looking for an internship for the 2021 Summer. Dont hestitate to contact me- I'd love to chat! <FaRegSmileBeam /></p>
                    <div class="social-icons">
                        <a class="social-icon" href="https://www.linkedin.com/in/shree-samavedhi-bb784619a/"><i class="fa"><FaLinkedinIn /></i></a>
                        <a class="social-icon" href="https://github.com/shreesamavedhi"><i class="fa"><FaGithub /></i></a>
                        <a class="social-icon" href="https://www.youtube.com/channel/UC1T8l0DdLCgat-NNoy0ZfVQ?view_as=subscriber"><i class="fa fa-youtube"></i></a>
                        <a class="social-icon" href="https://www.kaggle.com/shreefastai"><i class="fa"><FaKaggle /></i></a>
                    </div>
                </div>
            </section>
            <hr class="m-0" />

            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experience</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0"> Part-Time Intern - ITS Application Infrastructure</h3>
                            <div class="subheading mb-3">Federal Reserve Bank of STL</div>
                            <p>- Joined the official Emerging Technologies ITS team</p>
                            <p>- Using Gitlab as part of the Scrum framework</p>
                            <p>- Currently using React and Node.js to create a webpage for Blue Prism process demos</p>
                            <p>- Working towards using Python for more Machine Learning projects, and AWS for IOT data analytics</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-second">August 2020 - Present</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0"> Full-Time Intern - ITS Application Infrastructure</h3>
                            <div class="subheading mb-3">Federal Reserve Bank of STL</div>
                            <p>- Worked in the intern Emerging Technologies sector: includes Robotic Process Automation, AI, and Machine Learning</p>
                            <p>- Used Agile mindset and Scrum framework: fluent in the use of JIRA, Confluence, and Scrum events</p>
                            <p>- Created Blue Prism fileshare applications and showcased Machine Learning research</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-second">June 2020 - August 2020</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Research Assistant - Image Processing </h3>
                            <div class="subheading mb-3">University of Missouri St. Louis</div>
                            <p>- Developed code in C++ for the Unsharp Mask algorithm</p>
                            <p>- Wrote a research paper on “Enhanced Unsharp Mask Filtering” to reduce the halo effect created during the image filtering process</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-second">June 2018 - July 2018</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Project Manager</h3>
                            <div class="subheading mb-3">FIRST Tech Challenge</div>
                            <p>- Led the team to win the FTC Motivate and Connect Award, taking us to the semi-finals at state-level competition.</p>
                            <p>- Managed and oversaw the robot build, programming, and outreach events.</p>
                            <p>- Empowered the team by organizing educational resources for members to learn valuable skills (coding, designing, documentation)</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-second">August 2015 - August 2018</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Hostess</h3>
                            <div class="subheading mb-3">Applebees</div>
                            <p>- Communicated effectively with managers, staff, and customers in a productive manner</p>
                            <p>- Addressed people and their complaints with respect</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-second">July 2017 - February 2018</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
           
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University of Illinois at Urbana-Champaign</h3>
                            <div class="subheading mb-3">Bachelor of Science</div>
                            <div>Electrical Engineering</div>
                            <div>James Scholar</div>
                            <p>GPA: 3.73/4.00</p>
                            <div>Relevant Coursework:</div>
                            <p>Intro to Electronics, Intro to Computing, Discrete Structure, Differential Equations Plus</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-second">August 2019 - May 2023</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Lafayette High School</h3>
                            <div class="subheading mb-3">Rockwood School District</div>
                            <div>Senior Class Secretary</div>
                            <p>GPA: 4.58/4.00</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-second">August 2015 - May 2019</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><FaJava /></li>
                        <li class="list-inline-item"><DiJavascript1 /></li>
                        <li class="list-inline-item"><DiPython /></li>
                        <li class="list-inline-item"><img alt="C"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAFDklEQVRYhe2YaUxUVxTH/+cxOC4MA2WvrcywVMWtoBTsZmIbNSEpQYo1Ma1xCVXqoJVqSZkmmDJR61IUaKpJMdFEmgyG+sEPbTQxNbFqFbXGVkEZIRHByg6GAeadfiC04Ltv5s2S9ov/j+ece87v3Xffvec+4Ln8EwUq0dYvbDHy8NMyBsukY2vF7t1/BSKv34B5eXlBsabkQ8zYBFDQqJVdAGramxs32O32of8NsLDIapGJ9wCYKvIzMEiMXZUHbHt8reETYMEO6wpJlqtBFKdxSCcDG6v22+q8reUV4IZPi5OmBAX9AGCht4UAgAiNsiTlVO396rbmMVqCLBZLKOsNxxjIIZBfy4IBJuCcbmQgr7y8vNtfQNqy07qLXVxMhGBRgCFkGubMnoXIiHCEGUMBAN09vXjS0Ynbf95FX/+AWu4RMKrbWxoK7Ha7y2vAT4pK1hLoMIhDRf5EswlZy5ciKcEMUplUZkbjfQfO/HQOTQ+aVSrxACR5Z+XXe77VBFhUUhI/5KRfGDxDNECv12PNqhykzp+rUlCs+pu3cNJeB6dTbdfhFr2e3j5gs014Et2zYUODOM8khgsPM2LT+o/wYlyMV3AAkLZgHmKio3Ck+gS6unsEfDRjcJDPAkgeb5YUcWDh1qHXT8LH6z/0CW5M0+NiUbBxLSZP1iudBJBELz1rVgCqac2qlZgeF+sz3JhiY6KxemW25njFKxYp0Wxyu+buNTlw+eoNtD1+DAIhJjoKGYtSkZRgUsT29vahsckBIgIzBwYwa/lSoX1kZAQ1tT/iyrUbE+yO5hZc+u0aMhalYnVuNnQ6HVwuFy5cvIIzP5/F4KBTS1ltgAZDCJISzEKfCG68Ll+9DgB4dd4c1J4+g47OLs1gmgFTZr4i3OfuNTncwo2HHAP1RR4/kujICJXCnuECIY+ARqNBaH/U1h5wGJE8Aqp9aP61DGrFlCebR8De3j6hPTbG9w3bG3kEfPykQ2jPWJSquYhaM6FFHgH/uHMXsiwr7EkJJk2QmelpKLJsUt2q/Abs6x/AvaYHQt/q3Gy3kJnpafhg5XuIf3k6tm7egC356xAX693SCHrW8Nrrb1lBNGF/7OjsRGa6ssuXJAnz56ZgZnICiAjBumCEhxmRMisZudlZWPLmYkjSv3MQGfEC3shMhzHUgDsNjaKjznXl4oWy8QZNR919RzPqb95C2oJ5Qn+i2YREs0lLKkiShMl6PVwu5bIRxissKgv6pL0ODx+1aUrqTg9b21Bz6rTQx0SKKRWsQaoXDXY6h3Ck+oRfkA9b2/Bd9XEMDYm7agmsOJ4UgOTUrSDgBADFO+jq7sE3VUdx7frvXoExM67W38TBqqPo7ukVhcgAHZ9Cw8sUPGpJC4u+XCgTHwB4ichvNs1A1rJ3kJxonvAhTKgqy/9cmhzNLeJChEvM8vaq/bt/Fbs9yPKZ9V0GHwKQIvKHTJuGObNnIjIiHOFhRgCjMz167WxA/4DqtbMRhJLKfbZaAKqdq6YtPj8/P3iSIWodCGUAorSMcaMuBu+VnH3lFRUVHjtXr86gzcXF4boR3ecM3gZAcPNxq2EQjpFO9urXnE+HZOEOa7LMbAOQp3HIWQ6StnnzT2ZMfjVNlu0lmSzRQYAXq4TUA1RUub/svK81AtHV0ZYdJe+DsQ9A/KiJW8G0q72l4Xt3/13+K0AAQH5p6dTgvuFcABg2BJ86Wlr6NFC5n8sf/Q3W6bq3DEA/BQAAAABJRU5ErkJggg=="></img></li>
                        <li class="list-inline-item"><img alt="C++"src="data:image/png;base64,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"></img></li>
                        <li class="list-inline-item"><img alt="C#"src="data:image/png;base64,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"></img></li>
                        <li class="list-inline-item"><DiVisualstudio /></li>
                        <li class="list-inline-item"><DiMsqlServer /></li>
                        <li class="list-inline-item"><FaReact /></li>
                        <li class="list-inline-item"><FaNode /></li>
                        <li class="list-inline-item"><FaNpm /></li>
                        <li class="list-inline-item"><FaGitSquare /></li>
                        <li class="list-inline-item"><DiWindows /></li>
                        <li class="list-inline-item"><FaLinux /></li>
                        <li class="list-inline-item"><DiScrum /></li>
                        <li class="list-inline-item"><FaGitlab /></li>
                        <li class="list-inline-item"><DiJira /></li>
                        <li class="list-inline-item"><FaConfluence /></li>
                    </ul>
                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fa fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span class="fa-li"><i class="fa fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span class="fa-li"><i class="fa fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span class="fa-li"><i class="fa fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />

            <section class="resume-section" id="projects">
                <div class="resume-section-content">
                    <h2 class="mb-5">Projects</h2>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="interests">
                <div class="resume-section-content">
                    <h2 class="mb-5">Interests</h2>
                    <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                    <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="awards">
                <div class="resume-section-content">
                    <h2 class="mb-5">Awards</h2>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fa fa-trophy text-warning"></i></span>
                            2
                            <sup>nd </sup>
                            Place - UIUC Pulse Visions - Hardware Hackathon 2020
                        </li>
                        <li>
                            <span class="fa-li"><i class="fa fa-trophy text-warning"></i></span>
                            William C. Kerchner Scholarship - UIUC ECE Department 
                        </li>
                        <li>
                            <span class="fa-li"><i class="fa fa-trophy text-warning"></i></span>
                            1
                            <sup>st </sup>
                            Place - Connect Award - FIRST Tech Challenge 2017-2018
                        </li>
                        <li>
                            <span class="fa-li"><i class="fa fa-trophy text-warning"></i></span>
                            1
                            <sup>st </sup>
                            Place - Motivate Award - FIRST Tech Challenge 2016-2017
                        </li>
                        <li>
                            <span class="fa-li"><i class="fa fa-trophy text-warning"></i></span>
                            3
                            <sup>rd </sup>
                            Place - Think Award - FIRST Tech Challenge 2016-2017
                        </li>
                        <li>
                            <span class="fa-li"><i class="fa fa-trophy text-warning"></i></span>
                            Academic Top Ten - Lafayette High School 2015-2019
                        </li>
                        <li>
                            <span class="fa-li"><i class="fa fa-trophy text-warning"></i></span>
                            Superintendent Award - Lafayette High School 2018
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <footer>
            <a href="https://icons8.com/icon/">C/C++/C# icons by Icons8</a>
        </footer>
        </div>
        </Fragment>
  );
}

export default App;
