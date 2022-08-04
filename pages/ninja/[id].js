import React from "react";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(profile => {
        return {
            params: {id: profile.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}
// context - берется как должное из экспорта сверху, подразумевает контекст каждого пути из описанных выше
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { profile: data }
    }
}

const ProfileInfo = ({ profile }) => {
    return ( 
        <div> 
            <h2>{ profile.name }</h2>
            <p>{ profile.email }</p>
            <p>{ profile.website }</p>
            <h3>{ profile.address.city }</h3>
           
        </div>
     );
}
 
export default ProfileInfo;