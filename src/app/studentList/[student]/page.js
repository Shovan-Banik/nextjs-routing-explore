'use client'
const Student = ({params}) => {
    console.log(params);
    return (
        <div>
            <h2>student details</h2>
            <h2>Student name: {params.student}</h2>
        </div>
    );
};

export default Student;