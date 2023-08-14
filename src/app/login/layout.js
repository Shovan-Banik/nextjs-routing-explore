'use client'
import Link from 'next/link';
import React from 'react';
import './login.css';
import { usePathname } from 'next/navigation';

const Layout = ({children}) => {
    const pathName=usePathname();
    console.log(pathName);
    return (
        <div>
            {
                pathName !== "/login/loginTeacher" ?
                <ul className='login-nav'>
                <li><Link href='/login'>Main login page</Link></li>
                <li><Link href='/login/loginStudent'>Student login page</Link></li>
                <li><Link href='/login/loginTeacher'>Teacher login page</Link></li>
            </ul> : <li><Link href='/login'>Main Login</Link></li>
            }
            {children}
        </div>
    );
};

export default Layout;