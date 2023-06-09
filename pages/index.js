import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import Popular from '../components/popular';

export default function Home({movies}) {
  console.log(movies)
  return (
    <>
   
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      
        
        {movies.results.map(movie =>(
          <div>
            <h3>{movie.title}</h3>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h300_face${movie.poster_path}`} alt=""/>
            {/* <Popular></Popular> */}
          </div>
        ))}
      </main>


    </>
  )
}
export async function getStaticProps(){
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer 440811ce73c5e267143f1803ee10a9fa'
  //   }
  // };
  const request = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=abb1f3572b9f8612afdec26728e39edc&language=en-US&page=1')
  const movies = await request.json();
  return{
    props:{
      movies
    }
  }
}