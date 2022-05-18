import React, { useEffect, useState } from 'react';
import Members from '../Members/Members';

const OurMembers = () => {
    const [members,setMembers] = useState([]);
    useEffect(()=>{
        fetch('https://rocky-plateau-64241.herokuapp.com/members')
        .then(res=>res.json())
        .then(data=>setMembers(data));
    },[])
    return (
        <div>
            <div className='text-center mt-4 container '>
                <h2 className='mb-4'>Our Team Members</h2>
                <div className='row'>
{
    members.map(member=><Members key={member._id} member={member}></Members>)
}
</div>
            </div>
        </div>
    );
};

export default OurMembers;