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
    
    <nav id="navbar" class="navbar">
      <div class="flex items-center py-2 justify-between mx-auto width2">
        <ul>
          <li>
            <a href="#about" class="subheader">SELINA LI</a>
          </li>
        </ul>
        <ul>
          <div class="flex justify-between gap-4">
            <li>
              <a href="#skills" style={{borderBottom: isRef2Visible ? "1px solid #6588ac" : undefined}}>skills</a>
            </li>
            <li>
              <a href="#projects" style={{borderBottom: isRef3Visible ? "1px solid #6588ac" : undefined}}>projects</a>
            </li>
          </div>
        </ul>
      </div>
    </nav>


    <main class="snap-y-dir h-screen w-full">
    {/* About Section */}
    <section ref={ref1} id="about" class="paddingtop h-full snap-start">
      {/* Small devices about page */}
      <div class="w-screen grid grid-rows-2 h-full sm:hidden">
        <div class="w-full h-full">
          <img
            class="object-contain h-full w-full"
            src={portrait}
            alt="Selina Li"
          />
        </div>
        <div class="flex snap-x-dir h-full w-full overflow-hidden">
          <div class="snap-start shrink-0 w-full h-full bluebackground overflow-y-scroll">
            <div class="w-full h-full flex flex-col">
              <div class="text-display flex-1 ">
                <div className="inset">
                <h1 class="title ">SELINA LI</h1>
                <h2
                  class="header2 "
                  style={{ marginBottom: "5px" }}
                >
                  aspiring software developer
                </h2>
                <p class="text1">
                  I'm a self-proclaimed Red Bull connoisseur and an avid lover of
                  fat raccoons. I'm currently a Sophomore at MIT majoring in course
                  6-3, Computer Science and Engineering. I am most passionate about
                  exploring my interest in algorithms and data structures. When I am
                  not doing school work or miscellaneous projects, chugging a Red Bull
                  (sugar free), you can find me admiring the raccoons on my TikTok
                  FYP or contributing to my losing streak in TFT.
                </p>
                </div>

              </div>
              <div
                class="w-full flex justify-center"
                style={{ paddingTop: "5px" , opacity: 0.5}}
              >
                <div class="header2">swipe right!</div>
              </div>
            </div>
          </div>
          <div class="snap-start shrink-0 w-full h-full beigebackground overflow-y-scroll">
            <div class="w-full h-full flex flex-col">
              <div class="text-display flex-1">
                <div className="inset">
                <h1 class="title1">CONTACT ME</h1>
                <h2
                  class="header1"
                  style={{ marginBottom: "5px" }}
                >
                  get in touch
                </h2>
                <p class="text2">
                  If you want to get in touch, talk about anything, maybe raccoons,
                  or just to say hi, feel free to reach out via any of my socials!
                </p>
                <div class="w-full flex justify-center gap-2">
                    <a href="mailto:selina04@mit.edu">
                      <img class="icon" src={mail} alt="mail" />
                    </a>
                    <a href="https://github.com/selinali04">
                      <img class="icon" src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/selina-li-a2880617b">
                      <img class="icon" src={linkedin} alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/selinaisli/">
                      <img class="icon" src={instagram} alt="instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="w-full flex justify-center"
                style={{ paddingTop: "5px" , opacity: 0.5}}
              >
                <div class="header1">swipe left!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-screen grid grid-cols-2 h-full hidden sm:grid">
        <div class="flex items-center justify-center overflow-hidden">
          <img class="h-full w-full object-contain" src={portrait} alt="Selina Li" />
        </div>
        <div class="h-full snap-y-dir overflow-y-scroll">
          <div class="snap-start text-display bluebackground h-full overflow-y-auto">
            <div class="flex-1 text-display ">
              <div className="inset">
              <h1 class="title">SELINA LI</h1>
              <h2 class="header2">aspiring software developer</h2>
              <p class="text1">
                I'm a self-proclaimed Red Bull connoisseur and an avid lover of fat raccoons.
                I'm currently a Sophomore at MIT majoring in course 6-3, Computer Science and Engineering.
                I am most passionate about exploring my interest in algorithms and data structures.
                When I am not doing school work or miscellaneous projects, chugging a Red Bull (sugar free),
                you can find me admiring the raccoons on my TikTok FYP or contributing to my losing streak in TFT.
              </p>
              </div>
                </div>
                <div class="w-full flex justify-center" style={{opacity: 0.5 }}>
                  <h3 class="header2">swipe down!</h3>
                </div>
              </div>

              <div class="snap-start shrink-0 text-display beigebackground h-full overflow-y-auto">
                <div class="w-full flex justify-center">
                  <h3 class="header1" style={{opacity: 0.5 }}>swipe up!</h3>
                </div>
                <div class="flex-1 text-display">
                  <div className="inset">
                  <h1 class="title1">CONTACT ME</h1>
                  <h2 class="header1">get in touch</h2>
                  <p class="text2">
                    If you want to get in touch, talk about anything, maybe raccoons, or just to say hi, feel free to reach out via any of my socials!
                  </p>
                  </div>
                  <div class="w-full flex justify-center gap-2">
                    <a href="mailto:selina04@mit.edu">
                      <img class="icon" src={mail} alt="mail" />
                    </a>
                    <a href="https://github.com/selinali04">
                      <img class="icon" src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/selina-li-a2880617b">
                      <img class="icon" src={linkedin} alt="linkedin" />
                    </a>
                    <a href="https://www.instagram.com/selinaisli/">
                      <img class="icon" src={instagram} alt="instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section
          ref={ref2}
          id="skills"
          className="w-full h-full snap-start paddingtop"
        >
          {/* Medium and larger devices skills page*/}
          <div className="w-full h-full p-10 hidden sm:grid overflow-y-scroll">
            <div className="flex flex-col h-full w-full">
              <h1
                className="title1 w-full text-center pb-2.5"
                style={{
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                MY SKILLS
              </h1>

              <div className="grid grid-cols-2 auto-cols-fr w-full gap-5 h-full">
                <div className="border-wrap text-display">
                  <div className="inset">
                    <span className="subheader1 bar">
                      <img className ="my-icon" src={software} alt="Software Icon"/>
                      <div>
                        <span className="chunky-line">Software</span>
                        <br />
                        <h2 style={{ display: "block", marginTop: "-5px" }}>
                          Development
                        </h2>
                      </div>
                    </span>

                    <p className="text1">
                      I am proficient in Python for application development,
                      scripting, and data analysis. I also have experience in
                      JavaScript, enabling me to create responsive user
                      interfaces and interact with web APIs. Additionally, I
                      have a solid grasp of C++ for tackling
                      performance-critical applications.
                    </p>
                  </div>
                </div>

                <div className="border-wrap text-display">
                  <div className="inset">
                    <span className="subheader1 bar">
                      <img className ="my-icon"src={frontend} alt="Frontend Icon" />

                      <div>
                        <span className="chunky-line">Frontend</span>
                        <br />
                        <h2 style={{ display: "block", marginTop: "-5px" }}>
                          Development
                        </h2>
                      </div>
                    </span>
                    <p className="text1 ">
                      Interested in UI/UX, I enjoy the creative process behind
                      web development. Familiar with Node.js and React.js
                      frameworks.
                    </p>
                  </div>
                </div>

                <div className="border-wrap text-display">
                  <div className="inset">
                    <span className="subheader1 bar">
                      <img className ="my-icon" src={research} alt="Research Icon" />

                      <div>
                        <span className="chunky-line">Research</span>
                        <br />
                        <h2 style={{ display: "block", marginTop: "-5px" }}>
                          Experience
                        </h2>
                      </div>
                    </span>
                    <p className="text1">
                      I conducted in-depth research on the impact of
                      physician-scientists on innovation. This involved
                      extensive data analysis and interpretation. To manage the
                      amount of information, I handled and organized various
                      databases. Gained insight into machine learning and
                      methodologies for training.
                    </p>
                  </div>
                </div>

                <div className="border-wrap text-display">
                  <div className="inset">
                    <span className="subheader1 bar">
                      <img className ="my-icon"src={document} alt="Frontend Icon" />
                      <div>
                        <a
                          href={resume}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="chunky-line">Download</span>
                          <br />
                          <h2 style={{ display: "block", marginTop: "-5px" }}>
                            Resume
                          </h2>
                        </a>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Smaller devices skills page*/}
          <div className="w-full h-full sm:hidden p-10">
            <div className="text-display">
              <h1
                className="title1 w-full text-center pb-2.5"
                style={{
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                MY SKILLS
              </h1>

                <div className="slideshow overflow-y-scroll">
                  <div className="border-wrap card overflow-y-auto">
                    <span className="subheader1 bar">
                      <div className="my-icon">
                        <img src={software} alt="Software Icon" />
                      </div>

                      <div>
                        <span className="chunky-line">Software</span>
                        <br />
                        <h2 style={{ display: "block", marginTop: "-5px" }}>
                          Development
                        </h2>
                      </div>
                    </span>

                    <p className="text1">
                      I am proficient in Python for application development,
                      scripting, and data analysis. I also have experience in
                      JavaScript, enabling me to create responsive user
                      interfaces and interact with web APIs. Additionally, I
                      have a solid grasp of C++ for tackling
                      performance-critical applications.
                    </p>
                  </div>

                  <div className="border-wrap card overflow-y-auto">
                    <span className="subheader1 bar">
                      <div className="my-icon">
                        <img src={frontend} alt="Frontend Icon" />
                      </div>

                      <div>
                        <span className="chunky-line">Frontend</span>
                        <br />
                        <h2 style={{ display: "block", marginTop: "-5px" }}>
                          Development
                        </h2>
                      </div>
                    </span>
                    <p className="text1">
                      Interested in UI/UX, I enjoy the creative process behind
                      web development. Familiar with Node.js and React.js
                      frameworks.
                    </p>
                  </div>

                  <div className="border-wrap card overflow-y-auto">
                    <span className="subheader1 bar">
                      <div className="my-icon">
                        <img src={research} alt="Software Icon" />
                      </div>

                      <div>
                        <span className="chunky-line">Research</span>
                        <br />
                        <h2 style={{ display: "block", marginTop: "-5px" }}>
                          Experience
                        </h2>
                      </div>
                    </span>
                    <p className="text1">
                      I conducted in-depth research on the impact of
                      physician-scientists on innovation. This involved
                      extensive data analysis and interpretation. To manage the
                      amount of information, I handled and organized various
                      databases. Gained insight into machine learning and
                      methodologies for training.
                    </p>
                  </div>

                  <div className="border-wrap card overflow-y-auto">
                    <span className="subheader1 bar">
                      <div className="my-icon">
                        <img src={document} alt="Frontend Icon" />
                      </div>

                      <div>
                        <a
                          href={resume}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="chunky-line">Download</span>
                          <br />
                          <h2 style={{ display: "block", marginTop: "-5px" }}>
                            Resume
                          </h2>
                        </a>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <section
          ref={ref3}
          id="projects"
          className="w-full h-screen snap-start shrink-0 paddingtop"
        >
          <div className="text-display h-full items-center">
            <div className="border-wrap2">
              <div className="text-display h-full overflow-y-auto">
                <h1 className="title1 w-full text-center pb-2.5">
                  SIDE PROJECTS
                </h1>
                <div className="inset">
                  <div className="flex flex-col-2" style={{ gap: "1.75rem" }}>
                    <h2 className="text2" style={{ marginTop: "0.25rem" }}>
                      Ongoing
                    </h2>
                    <div>
                      <span className="subheader">
                        <a
                          href="https://github.com/selinali04/image_processor/tree/main"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img className = "my-icon" src={camera} alt="Frontend Icon" />
                        </a>                        

                        <h3 style={{ marginTop: "0.15rem" }}>
                          Image Processor
                        </h3>
                      </span>
                      <p className="text2">
                        Currently working on a simple image processor -- in the
                        midst of integrating the JS with Node.js and React.js.
                      </p>
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
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.5 }
      );

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isVisible;
  }
}

export default App;
