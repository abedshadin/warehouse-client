import React from 'react';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Items from '../Items/Items';
import OurMembers from '../OurMembers/OurMembers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Experience></Experience>
            <OurMembers></OurMembers>
        </div>
    );
};

export default Home;