'use client'
const Lecture = ({params}) => {
    console.log(params);
    return (
        <div>
            <h2 className="text-5xl text-center">Lecture Details</h2>
            <h1 className="mt-12 text-center font-bold">Day: {params.lecture[0]}</h1>
            <h1 className="mt-12 text-center font-bold">Module: {params.lecture[1]}</h1>
        </div>
    );
};

export default Lecture;