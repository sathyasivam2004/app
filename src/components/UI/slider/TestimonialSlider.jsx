import React from 'react';
import Slider from "react-slick";
import "../../../styles/testimonialSlider.css";
import avatarImg1 from "../../../assets/images/ava-1.jpg";
import avatarImg4 from "../../../assets/images/ava-4.jpg";
import avatarImg3 from "../../../assets/images/ava-3.jpg";

const TestimonialSlider = () => {
    

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slideToShow: 1,
        slidesToScroll: 1,

    };
  return <Slider {...settings} className="mt-5 entire__slider">
  
        <div className='slider__content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutr Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutr</p>
            <div className='img'><img src={avatarImg1} alt="AvatarImg" className='avatarImg'/><h6 className='avatarImg__Name'>Jhon Doe</h6></div>
        </div>
        <div className='slider__content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutr Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutr</p>
            <div className='img'><img src={avatarImg4} alt="AvatarImg" className='avatarImg'/><h6 className='avatarImg__Name'>Mitchell Marsh</h6></div>
        </div>
        <div className='slider__content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutr Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla justo a nunc euismod rutr</p>
            <div className='img'><img src={avatarImg3} alt="AvatarImg" className='avatarImg'/><h6 className='avatarImg__Name'>Steven Crock</h6></div>
        </div>
    
  </Slider>
}

export default TestimonialSlider