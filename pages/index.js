import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';

export default function Home({movies}) {
  console.log(movies)
  return (
    <>
   
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      
        <h3>Popüler Filmler</h3>
        {movies.results.map(movie =>(
          <div>
            <h3>{movie.title}</h3>
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
  const request = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=440811ce73c5e267143f1803ee10a9fa&language=en-US&page=1')
  const movies = await request.json();
  return{
    props:{
      movies
    }
  }
}