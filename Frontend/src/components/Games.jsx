import React from 'react'
import GameImg1 from "../assets/img/GameImg3.png";
import GameImg2 from "../assets/img/GameImg3.png";
import GameImg3 from "../assets/img/GameImg3.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import CardWithGame from './CardWithGame';
import backGroundImg from "../assets/img/banner-bg.jpg"
import { Link } from 'react-router-dom';

const Games = () => {
    const projects = [
      
        {
          title: "Tales of ShadowGrad",
          description: "Immersive fantasy rpg made by Tadeas Pirich",
          imgUrl: GameImg3,
          linkUrl:  "https://github.com/TadeasPir/TalesOfShadowGrad" ,
        },
        {
          title: "Inner Demons",
          description: "Suspenseful 2D adveture made by Josef Vetrovsky",
          imgUrl: GameImg2,
          linkUrl:  "https://github.com/kakalasek/InnerDemonsGame" ,
        },
        {
          title: "Marie's Game",
          description: "game made by Marie Kapucianova",
          imgUrl: GameImg1,
          linkUrl:  "https://github.com/" ,
        },
      ];
    
      return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
               
                 
                    <h2>Our games</h2>
                    <p>Our games are crafted with an immense amount of passion, reflecting the dedication and love we pour into every aspect of development. From the initial concept sketches to the final lines of code, our team is driven by a deep-seated enthusiasm for creating immersive and unforgettable gaming experiences.
                    <br/>
                    This passion fuels our creativity, pushing us to explore new ideas, experiment with innovative mechanics, and fine-tune every detail to ensure our games resonate with players. It's not just about making games; it's about sharing our dreams, stories, and artistic vision with the world.
                    <br/>
                    Every character we design, every world we build, and every challenge we create is a testament to our commitment to excellence. We believe that when games are made with true passion, it translates into an experience that players can feel, enjoy, and remember.
                    <br/>
                    Thank you for joining us on this journey. Your support and feedback inspire us to keep pushing the boundaries and creating games that are not just played, but cherished.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      
                      <Tab.Content id="slideInUp" >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                    
                                  <CardWithGame
                                    key={index}
                                    {...project}
                                    />
                                    
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                       
                      </Tab.Content>
                    </Tab.Container>
                 
                
              </Col>
            </Row>
          </Container>
          
        </section>
      )
}

export default Games