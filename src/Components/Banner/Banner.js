import React, { useEffect, useState } from 'react'
import {imageUrl} from '../../constants/constant';
import './Banner.css';
import axios from '../../axios'

const Banner = (props) => { 
  
  const [movie, setMovie] = useState();
  // useEffect(()=>{
  //   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
  //      console.log(response.data);
  //      setMovie(response.data.results[0])
  //   })
  // },[])

  useEffect(() => {
    axios.get(props.url).then((response) => {
     
      
      // Generate a random index within the range of the array
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      
      // Access the movie at the random index
      const randomMovie = response.data.results[randomIndex];
      
      setMovie(randomMovie);
    });
  }, []);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters  
       autoplay: 1,
    },
  };
  
  return (
   
    <div  style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})` }}  className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ?  movie.title : ""}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ?movie.overview : ""}</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner
