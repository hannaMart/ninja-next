import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";


const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
           router.push('/') // Read more about useRouter methods (e.g. router.go(+1)...or (-1) allows to walk back and forth the page history)
        }, 3000);

    }, []);

    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the 
                <Link href='/'><a> Homepage</a></Link>
            </p>
        </div>
     );
}
 
export default NotFound;