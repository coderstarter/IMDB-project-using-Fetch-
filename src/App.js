import React, { useState, useEffect } from 'react'
import MovieCard from './Components/MovieCard';
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzljMDk5MGUyOGIxODJjOGNlMTMxMTc3MGExOWVkYiIsInN1YiI6IjY1ZThiMjQ5YTFhOWJhMDE2MmJlNzM2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rZ8TQ71l4MVWe5wHbMxG6pCvJGeUFh8YeTko4AxIpE0';
function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => res.json())
      .then(response => {setData(response)
                        setLoading(false)                  
  })
  }, []);

  if(loading){
    return <CircularProgress />
  }
  return (
    <div className='App'>
      <h1>Popular Movies {`(${data?.total_results})`}</h1>
      <div>
        <Grid container spacing={5}>
          {data?.results?.map(movie => 
            <Grid item  key={movie.id} sm={12} lg={3} xl={4} md={6}>
              <MovieCard data={movie}/>
            </Grid>
          )}
        </Grid>

      </div>
    </div>
  )
}

export default App