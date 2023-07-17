import { useEffect, useRef, useState } from "react";
import {
  software,
  frontend,
  research,
  document,
  instagram,
  resume,
  github,
  mail,
  linkedin,
  portrait,
  camera,
} from "./assets";
import "./App.css";

function App() {
  const ref1 = useRef(null);
  const isRef1Visible = useIsVisible(ref1);
  const ref2 = useRef(null);
  const isRef2Visible = useIsVisible(ref2);
  const ref3 = useRef(null);
  const isRef3Visible = useIsVisible(ref3);

  return (
    <>
      <section>
        <nav id="navbar" className="text z-50 w-full fixed top-0" style={{ backgroundColor: "#F4F3F1", borderBottom: "1px solid black", zIndex: 99 }}>
          <div className="flex items-center py-2 justify-between mx-auto width2">
            <ul>
              <li>
                <a href="#about" className="subheader">
                  SELINA LI
                </a>
              </li>
            </ul>
            <ul>
              <div className="flex justify-between gap-4">
                <li>
                  <a href="#skills" style={{ borderBottom: isRef2Visible ? "1px solid #6588ac" : undefined }}>
                    skills
                  </a>
                </li>
                <li>
                  <a href="#projects" style={{ borderBottom: isRef3Visible ? "1px solid #6588ac" : undefined }}>
                    projects
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </nav>
        {/* navbar for small screens */}
      </section>

      <main>
        {/* About Section */}
        <section ref={ref1} id="about" className="paddingtop snap-start snap-y">
          {/* Small devices about page*/}
          <div className="w-screens grid grid-rows-2 responsiveheight sm:hidden">
            <div className="w-full h-full">
              <img className="object-contain h-full w-full" src={portrait} alt="Selina Li" />
            </div>
            <div className="flex snap-mandatory snap-x h-full w-full overflow-hidden">
              <div className="snap-start shrink-0 w-full h-full bluebackground">
                <div className="w-full h-full flex flex-col overflow-y-auto">
                  <div className="w-full h-full flex-1 flex flex-col justify-center">
                    <div className="title inset">SELINA LI</div>
                    <div className="header2 inset" style={{ marginBottom: "5px" }}>
                      aspiring software developer
                    </div>
                    <div className="text1 inset overflow-auto">
                      I'm a self-proclaimed Red Bull connoisseur and an avid lover of fat raccoons. I'm currently a Sophomore at MIT majoring in course 6-3, Computer Science and Engineering. I am most passionate about exploring my interest in algorithms and data structures. When I am not doing school work or miscellaneous projects, chugging a Red Bull (sugar free), you can find me admiring the raccoons on my TikTok FYP or contributing to my losing streak in TFT.
                    </div>
                  </div>
                  <div className="w-full flex justify-center" style={{ paddingTop: "5px", opacity: 0.5 }}>
                    <div className="header2">swipe right!</div>
                  </div>
                </div>
              </div>
              <div className="snap-start shrink-0 w-full h-full beigebackground flex flex-col">
                <div className="w-full h-full flex" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div className="title1 inset">CONTACT ME</div>
                  <div className="header1 inset" style={{ marginBottom: "5px" }}>
                    get in touch
                  </div>
                  <div className="text2 inset">
                    If you want to get in touch, talk about anything, maybe raccoons, or just to say hi, feel free to reach out via any of my socials!
                  </div>
                  <div className="w-full flex justify-center gap-2">
                    <img className="icon" src={mail} alt="mail" />
                    <img className="icon" src={github} alt="github" />
                    <img className="icon" src={linkedin} alt="linkedin" />
                    <img className="icon" src={instagram} alt="instagram" />
                  </div>
                </div>
                <div className="w-full flex justify-center" style={{ paddingTop: "5px", opacity: 0.5 }}>
                  <div className="header1">swipe left!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium and larger devices about page*/}
          <div className="w-screen grid grid-cols-2 responsiveheight hidden sm:grid">
            <div className="flex items-center justify-center overflow-hidden">
              <img className="object-contain" src={portrait} alt="Selina Li" />
            </div>
            <main className="responsiveheight">
              <div className="snap-start snap-y w-full responsiveheight bluebackground flex flex-col ">
                <div className="w-full h-full flex flex-col justify-center items-center overflow-y-auto">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="title inset">SELINA LI</div>
                    <div className="header2 inset" style={{ marginBottom: "5px" }}>
                      aspiring software developer
                    </div>
                    <div className="text1 inset">
                      I'm a self-proclaimed Red Bull connoisseur and an avid lover of fat raccoons. I'm currently a Sophomore at MIT majoring in course 6-3, Computer Science and Engineering. I am most passionate about exploring my interest in algorithms and data structures. When I am not doing school work or miscellaneous projects, chugging a Red Bull (sugar free), you can find me admiring the raccoons on my TikTok FYP or contributing to my losing streak in TFT.
                    </div>
                  </div>
                  <div className="w-full flex justify-center" style={{ paddingTop: "5px", opacity: 0.5 }}>
                    <div className="header2">swipe down!</div>
                  </div>
                </div>
              </div>
              <div className="snap-start snap-y w-full responsiveheight beigebackground flex flex-col">
                <div className="w-full flex justify-center" style={{ paddingTop: "5px", opacity: 0.5 }}>
                  <div className="header1">swipe up!</div>
                </div>
                <div className="w-full h-full flex-1" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div className="title1 inset" style={{ marginBottom: "-5px" }}>
                    CONTACT ME
                  </div>
                  <div className="header1 inset" style={{ marginBottom: "5px" }}>
                    get in touch
                  </div>
                  <div className="text2 inset">
                    If you want to get in touch, talk about anything, maybe raccoons, or just to say hi, feel free to reach out via any of my socials!
                  </div>
                  <div className="w-full flex justify-center gap-2">
                    <a href="mailto:selina04@mit.edu">
                      <img className="icon" src={mail} alt="mail" />
                    </a>
                    <a href="https://github.com/selinali04">
                      <img className="icon" src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/selina-li-a2880617b">
                      <img className="icon" src={linkedin} alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/selinaisli/">
                      <img className="icon" src={instagram} alt="instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>

        <section ref={ref2} id="skills" className="paddingtop snap-start snap-y">
          {/* Medium and larger devices skills page*/}
          <div className="w-full responsiveheight p-10 hidden sm:grid overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col h-full">
              <div className="title1 w-full text-center pb-2.5" style={{ marginBottom: "5px", display: "block", marginTop: "-2.5vh" }}>
                MY SKILLS
              </div>

              <div className="grid grid-cols-2 gap-5 h-full">
                <div className="border-wrap h-full flex flex-col justify-center">
                  <div className="inset">
                    <span className="subheader1 bar">
                      <div className="my-icon">
                        <img src={software} alt="Software Icon" />
                      </div>

                      <div>
                        <span className="chunky-line">Software</span>
                        <br />
                        <span style={{ display: "block", marginTop: "-5px" }}>
                          Development
                        </span>
                      </div>
                    </span>

                    <div className="text1">
                      I am proficient in Python for application development, scripting, and data analysis. I also have experience in JavaScript, enabling me to create responsive user interfaces and interact with web APIs. Additionally, I have a solid grasp of C++ for tackling performance-critical applications.
                    </div>
                  </div>
                </div>

                <div className="border-wrap h-full flex flex-col justify-center">
                  <div className="inset">
                    <span className="subheader1 bar">
                      <div className="my-icon">
                        <img src={frontend} alt="Frontend Icon" />
                      </div>

                      <div>
                        <span className="chunky-line">Frontend</span>
                        <br />
                        <span style={{ display: "block", marginTop: "-5px" }}>
                          Development
                        </span>
                      </div>
                    </span>
                    <div className="text1">
                      Interested in UI/UX, I enjoy the creative process behind web development. Familiar with Node.js and React.js frameworks.
                    </div>
                  </div>
                </div>

                <div className="border-wrap h-full flex flex-col justify-center">
                  <div className="inset">
                    <span className="subheader1 bar">
                      <div className="my-icon">
                        <img src={research} alt="Software Icon" />
                      </div>

                      <div>
                        <span className="chunky-line">Research</span>
                        <br />
                        <span style={{ display: "block", marginTop: "-5px" }}>
                          Experience
                        </span>
                      </div>
                    </span>
                    <div className="text1">
                      I conducted in-depth research on the impact of physician-scientists on innovation. This involved extensive data analysis and interpretation. To manage the amount of information, I handled and organized various databases. Gained insight into machine learning and methodologies for training.
                    </div>
                  </div>
                </div>

                <div className="border-wrap h-full flex flex-col justify-center">
                  <div className="inset">
                    <span className="subheader1 bar">
                      <div className="my-icon">
                        <img src={document} alt="Frontend Icon" />
                      </div>

                      <div>
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                          <span className="chunky-line">Download</span>
                          <br />
                          <span style={{ display: "block", marginTop: "-5px" }}>
                            Resume
                          </span>
                        </a>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller devices skills page*/}
          <div className="w-full responsiveheight p-10 sm:hidden">
            <div className="flex flex-col h-full justify-center ">
              <div className="title1 w-full text-center pb-2.5" style={{ marginBottom: "5px", display: "block", marginTop: "-2.5vh" }}>
                MY SKILLS
              </div>

              <div className="w-full">
                <div className="slideshow">
                  <div className="border-wrap card">
                    <span className="subheader1 bar">
                      <div className="my-icon">
                        <img src={software} alt="Software Icon" />
                      </div>

                      <div>
                        <span className="chunky-line">Software</span>
                        <br />
                        <span style={{ display: "block", marginTop: "-5px" }}>
                          Development
                        </span>
                      </div>
                    </span>

                    <div className="text1 overflow-y-auto">
                      I am proficient in Python for application development, scripting, and data analysis. I also have experience in JavaScript, enabling me to create responsive user interfaces and interact with web APIs. Additionally, I have a solid grasp of C++ for tackling performance-critical applications.
                    </div>
                  </div>

                  <div className="border-wrap card">
                    <span className="subheader1 bar">
                      <div className="my-icon">
                        <img src={frontend} alt="Frontend Icon" />
                      </div>

                      <div>
                        <span className="chunky-line">Frontend</span>
                        <br />
                        <span style={{ display: "block", marginTop: "-5px" }}>
                          Development
                        </span>
                      </div>
                    </span>
                    <div className="text1">
                      Interested in UI/UX, I enjoy the creative process behind web development. Familiar with Node.js and React.js frameworks.
                    </div>
                  </div>

                  <div className="border-wrap card">
                    <span className="subheader1 bar">
                      <div className="my-icon">
                        <img src={research} alt="Software Icon" />
                      </div>

                      <div>
                        <span className="chunky-line">Research</span>
                        <br />
                        <span style={{ display: "block", marginTop: "-5px" }}>
                          Experience
                        </span>
                      </div>
                    </span>
                    <div className="text1">
                      I conducted in-depth research on the impact of physician-scientists on innovation. This involved extensive data analysis and interpretation. To manage the amount of information, I handled and organized various databases. Gained insight into machine learning and methodologies for training.
                    </div>
                  </div>

                  <div className="border-wrap card">
                    <span className="subheader1 bar">
                      <div className="my-icon">
                        <img src={document} alt="Frontend Icon" />
                      </div>

                      <div>
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                          <span className="chunky-line">Download</span>
                          <br />
                          <span style={{ display: "block", marginTop: "-5px" }}>
                            Resume
                          </span>
                        </a>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={ref3} id="projects" className="paddingtop snap-start snap-y responsiveheight">
          <div className="w-full h-full responsiveheight p-10 flex items-center justify-center">
  <div className="border-wrap2">
    <div className="flex flex-col h-full justify-center ">
      <div className="title1 w-full text-center pb-2.5" style={{ marginBottom: "15px", display: "block", marginTop: "-2.5vh" }}>
        SIDE PROJECTS
      </div>
      <div className="inset ">
        <div className="flex flex-col-2 " style={{gap:"1.75rem"}}>
          <div className="text2" style={{marginTop:"0.25rem"}}>Ongoing</div>
          <div>
            <span className="subheader">
              <div className="my-icon">
                <div className="my-icon">
                  <a href="https://github.com/selinali04/image_processor" target="_blank" rel="noopener noreferrer">
                    <img src={camera} alt="Camera Icon" />
                  </a>
                </div>
              </div>
              <div style={{marginTop:"0.15rem"}}>
                Image Processor
              </div>
            </span>
            <div className="text2">
              Currently working on a simple image processor -- in the midst of integrating the JS with Node.js and React.js.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </section>

      </main>
    </>
  );

  function useIsVisible(ref) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
      }, { threshold: 0.5 });

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isVisible;
  }
}

export default App;
