import Link from 'next/link';
import React from 'react';

const StudentList = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/studentList/shovan'>Shovan</Link>
                </li>
                <li>
                    <Link href='/studentList/puja'>Puja</Link>
                </li>
                <li>
                    <Link href='/studentList/banik'>Banik</Link>
                </li>
            </ul>
        </div>
    );
};

export default StudentList;