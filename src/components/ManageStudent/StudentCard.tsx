import React from 'react'
import StudentDetails from './StudentDetails';
import { Link } from 'react-router-dom';

const StudentCard = () => {
    return (
        <div>
            <div className=' grid grid-cols-3 gap-4'>
                {
                    StudentDetails.map((student) => (
                        <Link to={`/dashboard/student/${student.rollno}`} key={student.id} className='group bg-white cursor-pointer hover:bg-gray-100 flex flex-row relative'>

                            <div className=' px-[10px] py-[5px]'>
                                <div className=' flex flex-row items-center gap-2'>
                                    <p>Name :</p>
                                    <p>{student.name}</p>
                                </div>

                                <div className=' flex flex-row items-center gap-2' >
                                    <p>Rollno :</p>
                                    <p>{student.rollno}</p>
                                </div>

                                <div className=' flex flex-row items-center gap-2' >
                                    <p>Email :</p>
                                    <p>{student.email}</p>
                                </div>

                                <div className=' flex flex-row items-center gap-2' >
                                    <p>Department :</p>
                                    <p>{student.department}</p>
                                </div>
                            </div>

                            <div className=' bg-white w-[60px] h-full group-hover:bg-[--primary-purpel] absolute right-0 duration-300'>

                            </div>
                        </Link>

                    ))
                }
            </div>
        </div>
    )
}

export default StudentCard;