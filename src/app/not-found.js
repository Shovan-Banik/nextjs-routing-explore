import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h2 className="text-5xl flex justify-center items-center text-red-500">Page not found</h2>
            <h4 className="text-2xl"><Link href='/'>Go To Home</Link></h4>
        </div>
    );
};

export default NotFound;