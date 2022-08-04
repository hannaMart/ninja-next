import React from "react";
import Head from "next/head";
import styles from '../../styles/Ninja.module.css';
import Link from 'next/link';

export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return  {
        props: {ninjaProfiles: data}
    }
}

const Ninja = ({ ninjaProfiles }) => {
    return ( 
        <>
            <Head>
                <title>Ninja | Ningas</title>
                <meta name='keywords' content='ninja'/>
            </Head>
            <div>
                <h1>Ninjas here!</h1>
                {ninjaProfiles.map(profile => (
                    <Link href={'./ninja/' + profile.id} key={profile.id}>
                        <a className={styles.single}>
                            <h3>{profile.name}</h3>
                        </a>
                    </Link>
                ))} 
            </div>
        </>
     );
}
 
export default Ninja;