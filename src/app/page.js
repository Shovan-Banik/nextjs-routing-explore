'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import StudentList from './studentList/page';
import Study from './study/page';

export default function Home() {
  const router=useRouter();

  const navigate=(route)=>{
    router.push(route);
  }
  return (
    <main>
     <h2>Home</h2>
     <Link href='/about'>About Page</Link>
     <br />
     <Link href='/login'>Login page</Link>
     <br />
     <button onClick={()=>navigate('/contact')}>Contact page</button>
     <br />
     <br />
     <StudentList></StudentList>
     <br />
     <br />
     <Study></Study>
    </main>
  )
}
