import React from 'react'

interface ProfileFieldProps {
    label:string,
    data:string | number
}

const ProfileField:React.FC<ProfileFieldProps> = ({label,data}) => {
    return (
        <div className=' flex flex-row items-center gap-5'>
            <p className='w-[140px]'>{label}</p>
            :
            <p className=''>{data}</p>
        </div>
    )
}

export default ProfileField;