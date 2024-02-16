// Import necessary dependencies and images
import "./index.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated } from "react-spring";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./Image/logo.png";
import forest from "./Image/forest.png";
import range from "./Image/range.png";
import logo2 from "./Image/logo2.png";
import me from "./Image/me.png";
import mountain from "./Image/moutain.jpg";
import conste from "./Image/const.png";
import cs from "./Image/cs.png";
import LIA from "./Image/LIA.png"
import Valley from "./Image/Valley.png"
import scenary from "./Image/scenary.jpg"
import ContactForm from "./components/ContactForm";

const ProjectCard = ({
  title,
  description,
  githubLink,
  imageUrl,
  techStack,
}) => {
  return (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="  md:h-90 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] group mb-6 rounded-lg overflow-hidden h-100 w-auto  bg-gradient-to-br from-[#FAEED1] to-[#DED0B6] text-white transform transition-transform hover:scale-105"
    >
      {/* Project Image */}
      <img
        className="w-full h-40 md:h-80 object-cover transition-transform group-hover:scale-110"
        src={imageUrl}

        alt={`Project: ${title}`}
      />
      {/* Project Details */}
      <div className="p-6">
        <h2 className="text-lg text-[#4D4C7D] font-bold mb-2">{title}</h2>
        <p className="text-sm text-[#04364A] mb-4">{description}</p>
        <p className="text-xs text-gray-500 mb-2">Tech Stack: {techStack}</p>
      </div>
    </a>
  );
};

function App() {
  return (
    <div className="gap-0 App m-0 pb-0 overflow-hidden">
      {/* Add overflow-hidden to hide any potential overflow issues */}

      <Parallax className="gap-0 p-0 m-0 bg-[#F8FAE5] scroller" pages={4}>
        {/* Parallax Layer 1 */}
        <ParallaxLayer
          className="bg-[#F5EEE6] -z-5 text-3xl flex justify-start items-start w-screen "
          factor={1}
          style={{
            backgroundImage: `url()`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginTop: "",
            opacity: "0.8",
          }}
          speed={0.2}
        >
          <div
            className="h-max flex justify-start items-start w-screen"
            style={{
              marginTop: "-12vh",
              opacity: "10",
            }}
          >
            <img className="relative h-100 w-max pb-20" src={logo} alt="Logo" />
          </div>
        </ParallaxLayer>

        {/* Parallax Layer 2 */}
        <ParallaxLayer
          className="flex justify-center items-end "
          factor={1}
          speed={0.2}
          offset={0}
        >
          <div
            className="h-screen w-screen"
            style={{
              backgroundImage: `url(${forest})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer
          className=" -z-10 flex justify-center items-end "
          factor={1}
          speed={0.3}
          offset={0}
        >
          <div
            className="h-screen w-screen"
            style={{
              backgroundImage: `url(${range})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          factor={0.2}
          className="mb-10 -z-10 flex justify-center items-center text-6xl"
        >
          <img
            className="relative z-1 h-40 w-50 -mt-40 -mb-20 border-spacing-7 transition-transform transform hover:scale-110"
            src={logo2}
            alt="Logo"
          />
        </ParallaxLayer>

        {/* Parallax Layer 3 */}
        <ParallaxLayer
          className=" -z-5  flex justify-center items-end "
          factor={1}
          speed={0.5}
          offset={1}
          style={{ pointerEvents: "none" }}
        >
          <div
            className="h-screen w-screen"
            style={{
              backgroundImage: `url(${conste})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: "0.2",
              pointerEvents: "none",
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer
          className="bg-[#93B1A6] -z-10 flex flex-col sm:flex-row justify-between items-center mt-35 p-8"
          offset={1}
          speed={0.3}
        >
          <div className="sm:w-1/2 ml-0 sm:ml-8 mb-8 -mt-3 sm:mb-0">
            <h1 className="text-2xl mb-4 font-bold text-[#393646] hover:text-[#F0F0F0] transform hover:scale-105 transition-transform font-sans">
              Sahil Karn
            </h1>
            <p className=" bg-[#394867] text-lg md:p-4 p-2 rounded-md font-semibold leading-relaxed break-words text-[#FFFBF5] bg-[rgba(200, 200, 200, 0.2)] shadow-md transform hover:scale-105 transition-transform hover:bg-[#4F4557]">
              Welcome to my portfolio! I'm a Computer Science student at Eastern
              Michigan University with a strong GPA of 3.97. I specialize in
              full-stack development, showcasing proficiency in TypeScript,
              Spring Boot, Node.js, and React. I am eager to bring my skills to
              an organization that values innovation and growth. Dive into my
              portfolio to explore my hands-on experience, collaborative spirit,
              and passion for continuous learning in the field of software
              engineering.
            </p>

            {/* Social Media Links */}
            <div
              className="mt-4 flex space-x-4 -z-5"
              style={{ zIndex: 2, pointerEvents: "auto" }}
            >
              <a
                href="https://github.com/skarn03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/sahil-karn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/sahilkarn_17/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://discord.com/yourdiscord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
            </div>
          </div>
          {/* Make the image clickable */}
          <a
            href="your-portfolio-url"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:w-1/2"
          ></a>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          className="md:ml-80 flex p-0 md:justify-center md:mt-20 justify-center items-center  mt-40  md:items-start w-1/2 "
          style={{ pointerEvents: "none" }}
        >
          <img
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:w-80 md:h-80 sm:h-20 w-60 h-60 md:mr-20 relative sm:ml-100 -mr-0 sm:-mr-80 h-100 sm:w-1/2 rounded-lg overflow-hidden transition-transform transform hover:scale-110"
            src={mountain}
            alt="Logo"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.6}
          className="ml-50 flex justify-end items-center w-1/2"
          style={{ pointerEvents: "none" }}
        >
          <img
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  md:w-80 md:h-80 sm:h-20 w-60 h-60 md:mr-20 relative sm:ml-100 -mr-0 sm:-mr-80 h-100 sm:w-1/2 rounded-lg overflow-hidden transition-transform transform hover:scale-110"
            src={me}
            alt="Logo"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.4}
          className="md:ml-80 md:-mt-20 flex p-0 md:justify-center  justify-start items-end w-1/2 "
          style={{ pointerEvents: "none" }}
        >
          <img
            className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:w-80 md:h-80 sm:h-20 w-60 h-60 md:mr-20 relative sm:ml-100 -mr-0 sm:-mr-80 h-100 sm:w-1/2 rounded-lg overflow-hidden transition-transform transform hover:scale-110"
            src={forest}
            alt="Logo"
          />
        </ParallaxLayer>
        {/* Parallax Layer 4 - Projects Section */}
        {/* Parallax Layer 4 - Projects Section */}

        <ParallaxLayer
          className=" -z-10 bg-[#638889] flex flex-col sm:flex-row justify-between items-center mt-35 p-8 sm:w-full md:w-4/5 lg:w-3/4 xl:w-2/3"
          offset={2}
          speed={0.4}
          factor={1.3}
          style={{
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1671156854811-92d6bff8209b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: "1",
            pointerEvents: "none",
          }}
        >
          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <ProjectCard
              title="CS2Gether"
              description="Full stack Web Application using Agile methodology which allows users to collaborate and Create Likeminded Web Projects."
              githubLink="https://cstogether.netlify.app"
              imageUrl={
                cs
              }
              techStack="Next.js, Tailwind CSS , Spring Boot , SQL "
            />
            <ProjectCard
              title="Valley"
              description="Full Stack user centric social networking site that facilitates diverse interaction and engagement"
              githubLink="https://vall3y.netlify.app"
              imageUrl={
                Valley
              }
              techStack="React.js , Bootsrap, MongoDB , Express.js , Node.js"
            />
            <ProjectCard
              title="Learn It All"
              description="Full Stack Chatroom Web Application for instant topic discussion and assistance"
              githubLink="https://learnitall.netlify.app"
              imageUrl={
                LIA
              }
              techStack="React.js , Node.js, MongoDB"
            />

            {/* Repeat similar structure for other project cards */}
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className=" bg-slate-200"
         offset={3}
         speed={0.4}
         factor={1.3}
        >
            <ContactForm/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
