import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
const index = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      Blog
    <Link href="/">
        Geri dön
    </Link>
    </div>
  )
}

export default index