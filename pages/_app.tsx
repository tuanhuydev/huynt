import type { AppProps } from 'next/app'
import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css'
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <title>Huy Nguyen - Software Engineer</title>
    <meta name="title" content="Huy Nguyen - Software Engineer" />
    <meta name="description" content="Hi there, I am Huy" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://huynt.dev/" />
    <meta property="og:title" content="Huy Nguyen - Software Engineer" />
    <meta property="og:description" content="Hi there, I am Huy" />
    <meta property="og:image" content="/preview.jpeg" />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.huynt.dev/" />
    <meta property="twitter:title" content="Huy Nguyen - Software Engineer" />
    <meta property="twitter:description" content="Hi there, I am Huy" />
    <meta property="twitter:image" content="/preview.jpeg" />
  </Head>
    <Component {...pageProps} />
    </>
}
export default MyApp
