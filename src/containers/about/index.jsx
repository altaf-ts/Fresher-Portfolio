import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaJava, FaReact, FaDatabase, FaCode } from "react-icons/fa";


const personalDetails = [
  {
    label: "Name",
    value: "Altaf Shaikh",
  },
  {
    label: "Age",
    value: "23",
  },
  {
    label: "Address",
    value: "Pune, Maharashtra, India",
  },
  {
    label: "Email",
    value: "ashaikh20754@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 7385274784",
  },
];

const jobSummary = 
  "I am a Java Developer passionate about creative problem-solving and delivering quality solutions. With hands-on experience in Java, SQL, and C++, I have a solid foundation in object-oriented programming. I graduated from MMIT Pune in 2024 and am eager to explore software and full-stack development.In addition to backend skills, I gained experience in web development through an internship, focusing on HTML, CSS, and JavaScript. I'm committed to continuous learning and excited about future opportunities. Technologies: C/C++, Java, SQL, MySQL, HTML, CSS, JavaScript."




  const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
  <div>
    <FaJava size={60} color="var(--yellow-theme-main-color)" />
    
  </div>
  <div>
    <FaReact size={60} color="var(--yellow-theme-main-color)" />
    
  </div>
  <div>
    <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
    
  </div>
  <div>
    <FaCode size={60} color="var(--yellow-theme-main-color)" />
    
  </div>
</div>

          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
