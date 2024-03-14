import React from 'react';
import Slider from "react-slick";
import Poster from '../Posters/Poster.componenet';



const Posterslider = (props) => {
    const {posters,title,subtitle,isDark,config} =props;
    const setting= {  infinte: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]};
    return (
        <>
        <div className='flex flex-col items-start sm:ml-3 my-2'>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'tex-black' }`}>{title} </h3>
            <p className= {`text-sm font-bold ${isDark ? 'text-white' : 'tex-black' }`}>{subtitle}</p>
        </div>
        
        <Slider {...setting}>
        {
          posters.map((each, index)=>(
            <Poster {...each} isDark={isDark} key={index}/>
          ))
        }
      </Slider>
    
        </>
    )  
};
export default Posterslider;