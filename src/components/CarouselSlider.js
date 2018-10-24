import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class CarouselSlider extends Component {
    render() {
        return (
            <Carousel
              autoPlay
              interval={3000}
              transitionTime={1500}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              swipeable
              useKeyboardArrows
            >
                {/* <div>
                  <img src={require("../assets/images/Scenery.JPG")} />
                </div> */}
                <div>
                  <img src={require("../assets/images/Green.JPG")} alt='Green' />
                </div>
                <div>
                  <img src={require("../assets/images/Water 1.JPG")} alt='Water 1' />
                </div>
                <div>
                  <img src={require("../assets/images/Water 2.JPG")} alt='Water 2' />
                </div>
                <div>
                  <img src={require("../assets/images/Water 3.JPG")} alt='Water 3' />
                </div>
            </Carousel>
        );
    }
}

export default CarouselSlider
