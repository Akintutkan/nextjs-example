import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
   
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Link href="/about">
          Hakkında
        </Link>
        <Link href="/blog">
          Blog
        </Link>
        <Link href="/blog/post">
          Post
        </Link>

        <Image src="/image/ak.jpeg" width="300" height="300"/> */}
        <h3>Anasayfa</h3>
      </main>


    </>
  )
}
