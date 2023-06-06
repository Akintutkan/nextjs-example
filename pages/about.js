import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

const about = () => {
  return (<>
      <Head>
        <title>Hakkında</title>
      </Head>
      
      <h3>about</h3>
      <Link href="/">
        Geri dön
      </Link>
<style jsx>
  {`
  h3{
    font-size:20px;
    font-weight:600;
    color: aqua;
    background-color:black;
    text-align:center;
  }
  `}
</style>
      </>
  )
}

export default about