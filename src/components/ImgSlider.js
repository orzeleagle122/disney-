import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const ImgSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        sliceToShow: 1,
        sliceToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src={`/images/slider-badging.jpg`} alt={`slider-1`}/>
            </Wrap>
            <Wrap>
                <img src={`/images/slider-badag.jpg`} alt={`slider-1`}/>
            </Wrap>
            <Wrap>
                <img src={`/images/slider-scales.jpg`} alt={`slider-1`}/>
            </Wrap> <Wrap>
            <img src={`/images/slider-scale.jpg`} alt={`slider-1`}/>
        </Wrap>
        </Carousel>
    );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {

    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  img {
    border: 4px solid transparent;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    width: 100%;
    height: 100%;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgb(249, 249, 249, 0.8);
    }
  }
`;