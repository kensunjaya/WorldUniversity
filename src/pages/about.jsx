import { NavBar } from "../components/navbar";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {



  return (
    <div className="flex flex-col justify-center items-center h-screen font-sans">
      <NavBar />
      <div className="w-[50%]">
        <h1 className="text-4xl font-bold mb-5">About Us</h1>
        <p className="text-lg">{"WorldUniversity is more than just a platform—it's a vision to empower students with knowledge and global awareness. Our mission is to provide comprehensive and accessible information about countries worldwide, enabling students to explore and understand the diverse world we live in."}</p>
        <p className="text-lg mt-3">{"At WorldUniversity, our vision is to create a bridge between students and the vast expanse of global knowledge. We aim to foster a deeper understanding of different cultures, histories, and geographies, helping students make informed decisions about their academic and personal journeys."}</p>
        <br />
        <a className="text-lg mt-3">{"WorldUniversity is developed and maintained by"}</a>
        <a className="text-lg mt-3 ml-2 font-bold" href="https://www.linkedin.com/in/kenneth-sunjaya" target="_blank">{"Kenneth Sunjaya"}</a>
        <br />
        <div className="flex flex-row mt-5 items-center">
          <FaGithub className="text-2xl" />
          <a className="text-lg ml-2" href="https://github.com/kensunjaya" target="_blank">{"kensunjaya"}</a>
        </div>
        <div className="flex flex-row mt-2 items-center">
          <FaLinkedin className="text-2xl" />
          <a className="text-lg ml-2" href="https://www.linkedin.com/in/kenneth-sunjaya" target="_blank">{"kenneth-sunjaya"}</a>
        </div>
        <div className="flex flex-row mt-2 items-center">
          <FaInstagram className="text-2xl" />
          <a className="text-lg ml-2" href="https://www.instagram.com/kensunjaya/" target="_blank">{"kensunjaya"}</a>
        </div>
      </div>
    </div>
  );
}

export default About