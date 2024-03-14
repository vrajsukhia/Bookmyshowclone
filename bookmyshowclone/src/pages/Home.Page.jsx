import React, {  useEffect, useState } from 'react';
import dlayout from '../layout/d.layout';
import Ecard from '../component/Entertainment/Ecard.component';
import Posterslider from '../component/Posterslider/posterslider.component';
import Herocarousel from '../component/HeroCarousel/Herocarousel.component';
import axios from 'axios';

const HomePage = () => {

    const [recommendedMovies, setRecommendedMovies] =useState([]);
    const [primeMovies, setPrimeMovies] =useState([]);
    const [onlineStream, setOnlineStream] =useState([]);
     useEffect(()=>{
      const requestTopRatedMovies = async () => {
          const getTopRatedMovies = await axios.get("/movie/top_rated?");
          setPrimeMovies(getTopRatedMovies.data.results);
      }
      requestTopRatedMovies()
  }, [])
  useEffect(()=>{
    const requestPopRatedMovies = async () => {
        const getPopRatedMovies = await axios.get("/movie/popular?");
        setRecommendedMovies(getPopRatedMovies.data.results);
    }
    requestPopRatedMovies()
}, [])
useEffect(()=>{
  const requestUcRatedMovies = async () => {
      const getUcRatedMovies = await axios.get("/movie/upcoming?");
      setOnlineStream(getUcRatedMovies.data.results);
  }
  requestUcRatedMovies()
}, [])    

    return (
      <>
        <Herocarousel />
  
        <div className="container mx-auto px-4 md:px-12 my-8">
          <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 my-3">
            Anime
          </h1>
          <Ecard/>
        </div>
  
        <div className="container mx-auto px-4 md:px-12 my-8">
          <Posterslider
            title="Recommended Movies"
            subtitle="List of Recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>
  
        <div className="bg-premier-800 py-12  ">
          <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3 "class="perm" >
          
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="rupay"
                className="w-full h-full"
              />
            </div>
           
            <Posterslider class="perm"
              title="Premiers "
              subtitle="Brand new release every Friday"
              posters={primeMovies}
              isDark={true}
            />
             
            </div>
            
          
            
            
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <Posterslider
              title="Online Streaming Events "
              subtitle="Online Streaming Events"
              posters={onlineStream}
              isDark={false}
            />
            </div>
         
       </div>
      </>
    );
  };
  
   
export default dlayout(HomePage);