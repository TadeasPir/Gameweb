import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const ReviewForDownload = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="review" id="review">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="review-bx wow zoomIn">
                            <h2>Ratings</h2>
                            <p>Our games have amaizing ratings from multiple organizations.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme review-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>ING</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Indian.tv</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Game reviewers</h5>
                                </div>
                              
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
      )
}

export default ReviewForDownload