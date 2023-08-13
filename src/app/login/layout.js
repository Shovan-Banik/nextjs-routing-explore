import Link from 'next/link';
import React from 'react';
import './login.css'

const Layout = ({children}) => {
    return (
        <div>
            <ul className='login-nav'>
                <li><Link href='/login'>Main login page</Link></li>
                <li><Link href='/login/loginStudent'>Student login page</Link></li>
                <li><Link href='/login/loginTeacher'>Teacher login page</Link></li>
            </ul>
            {children}
        </div>
    );
};

export default Layout;