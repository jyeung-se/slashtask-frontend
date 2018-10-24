import React, { Component } from "react";
import Slider from "react-slick";

class ImgSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000
    };
    return (
      <Slider {...settings}>
        <img src={require("../assets/images/Green.JPG")} alt='Green' />
        <img src={require("../assets/images/Water 1.JPG")} alt='Water 1' />
        <img src={require("../assets/images/Water 2.JPG")} alt='Water 2' />
        <img src={require("../assets/images/Water 3.JPG")} alt='Water 3' />
      </Slider>
    );
  }
}

export default ImgSlider
