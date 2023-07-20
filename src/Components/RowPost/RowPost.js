import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constant'

const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [urlId,setUrlId] =useState('')

  useEffect(()=>{ 
  
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results) 
    }).catch(err=>{
      // alert('Network error')
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: { 
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie =(id)=>{
    console.log(id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!=0){
        setUrlId(response.data.results[0])
      }else{
        console.log("array empty");
      }
      console.log(response.data);
    })                                                                                                  
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>

        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />

      )}
      </div>
  
       {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
