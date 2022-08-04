import React from 'react'
import Head from 'next/head'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home</title>
        <meta name="keywords" content="ninja"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Hi, Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className={styles.text}>Hi, Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link href="/ninja"><a className={styles.btn}>See Ninjas</a></Link>
      </div>
    </>
  );
}
