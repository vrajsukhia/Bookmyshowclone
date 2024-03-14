import React from 'react';
import Slider from "react-slick"


const Ecard = (props) => {
    return  (
        <>
         <div className='w-full h-30 px-2'>
            <img src={props.src} alt='entertainment' className='w-800 h-800 rounded-lg' class='Ecardimage' />

        </div>
        </>
    ) ; 
};


 const ECardSlider =() =>{
    const Eimage=[
        "https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg",
        "https://static0.colliderimages.com/wordpress/wp-content/uploads/2023/06/luffy-from-one-piece-goku-from-dragon-ball-z-and-saitama-from-one-punch-man.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/index-anime-1674137684.jpg",
        "https://www.lifewire.com/thmb/voCXEq-FQI_y66mE7fzUMKFn-Xo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/anime-pokemon-5a191e1789eacc00372449e8-512c78337fbe42b2b6cd6280bb7a23f6.jpg",
        "https://lh3.googleusercontent.com/RUg9YJuY2cPjh5znR5ZLqLJIBrm1CM2JuwCS1XP6g31ZDPa_NR--jR0JAum5qDbl2g5UKgBwM4SHSuyiWqjyd7VhBUI=s1280-w1280-h800",
        "https://lh3.googleusercontent.com/k_WB8uFUgSFQUtkCVbXu81pK8PVKJaXvRqJ39mKSlGf6mNAfmmKQ_oM4PW2_HpN7uuzICMsLXZhyb6GBrmy1RDf5_A=s1280-w1280-h800",
        "https://lh3.googleusercontent.com/H5Py55JEgPpimF_VMEV_zN84btfbA13bbd5xh7f4Z-0gyNvoEVXcrPUlIRJHARrycCscN5euCY_sENbK75nHCxvh0A=s1280-w1280-h800",
        "https://lh3.googleusercontent.com/yTa9QktA74Rt9WKndA_VqaZ9jn66CNABXC6AFlGgBb0SVh2fjGmN5Y8sdoiL5YeeA8PveG6wAnKwZOOWGHmrFoOTGA=s1280-w1280-h800",
        "https://im.rediff.com/movies/2023/aug/28anime1.jpg?",
        "https://img.asmedia.epimg.net/resizer/Hkv2yhvmT76wusgCO0nK2NkbpqQ=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/PRNSA4H2SRPLNH6GV6TVWKAT7Q.jpg",
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/strongest-anime-characters-broly-saitama-and-tetsuo.jpg",
        "https://www.hindustantimes.com/ht-img/img/2023/07/17/1600x900/anime_collage_1686917525783_1689613937349.webp",
        
        
           ];

    const setting={
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    dots: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        },
      },
       {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
       {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        },
      }
    ]
    };
    return (
        <>
        <Slider {...setting} >
         {
         Eimage.map((image,index) => (
            <Ecard src={image} key={index} />
         ))
         }
        </Slider>
        </>
    )
 }
export default ECardSlider;