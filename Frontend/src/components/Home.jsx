import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import { useState, useEffect } from "react";

import headerImg from "../assets/img/piamon.png";
import { Link } from "react-router-dom";


const Home = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "are Game Developers",
    "are 3D masters",
    "use Unity game engine",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col>
            <span className="tagline">Tales of Shadowgrad</span>
            <h1>
              {"we "}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Welcome to TSL, an independent game development studio driven by
              passion, creativity, and innovation. Our team of dedicated
              developers, artists, and storytellers work tirelessly to craft
              unique and immersive gaming experiences. We believe in pushing the
              boundaries of interactive entertainment, blending compelling
              narratives with captivating gameplay.
              <br />
              At TSL, we value community and collaboration, and we strive to
              connect with players through our shared love of games. Whether
              you’re exploring fantastical worlds, solving intricate puzzles, or
              embarking on epic adventures, our games are designed to inspire
              and entertain.
              <br />
              Join us on our journey as we continue to create games that ignite
              imagination and bring joy to gamers around the world. Thank you
              for being part of our story!
            </p>
            <Link to="downloads">
              <button>
                Download <ArrowRightCircle size={25} />
              </button>
            </Link>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="piamon" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
