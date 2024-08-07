import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
// import CV from "../../assets/CV.pdf"
// import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import Me from "../../assets/images/me.png";
import Stack from "../../assets/images/stack.png";

const ProfComponent = () => {
  const onButtonClick = () => {
    const pdfUrl = "CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Elyes Kacem CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Elyes Kacem</h1>
          <h3>Computer Science Engineer</h3>

          <p>
            I'm a computer science engineer, proficient in both game and web
            development. My passion lies in creating captivating games and
            user-friendly websites, driven by innovation and a strong foundation
            in computer science.
          </p>
          <button onClick={onButtonClick}>Download CV</button>
          <Social>
            <p>Visit my</p>
            <div className="social-icons">
              <span>
                <a
                  target="_blank"
                  href="https://www.instagram.com/elyes_kacem/"
                >
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a target="_blank" href="https://github.com/ElyesKacem">
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/elyeskacem/"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://stackoverflow.com/users/15450130/elyes-kacem"
                >
                  <img src={Stack} width={18} alt="" />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Mirror>
          <Profile>
            <img src={Me} alt="profile" />
          </Profile>
        </Mirror>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Mirror = styled.div`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;

    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
