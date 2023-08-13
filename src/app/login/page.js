'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const LogInPage = () => {
    const router=useRouter();

    const navigate=(page)=>{
        router.push('/login/'+ page);
    }
    return (
        <div>
            <h2>Login Page</h2>
            <br />
            <Link href='login/loginStudent'>student login</Link>
            <br />
            <button onClick={()=>navigate('loginTeacher')}>teacher login</button>

            {/* <button onClick={()=>router.push('login/loginTeacher')}>teacher login</button> */}
        </div>
    );
};

export default LogInPage;