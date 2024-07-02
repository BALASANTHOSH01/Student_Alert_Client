import React from "react";

interface ProfileFieldProps {
  label: string;
  data: string | number;
  isEditStudent: boolean;
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) =>void;
}

const ProfileField: React.FC<ProfileFieldProps> = ({
  label,
  data,
  isEditStudent,
  handleChange,
}) => {
  return (
    <div className={`flex flex-row items-center gap-5`}>
      <label className="w-[140px]" htmlFor={label}>
        {label}
      </label>
      :
      {isEditStudent ? (
        <input
          type="text"
          value={data}
          placeholder={`Enter ${label}`}
          name={label.toLowerCase()}
          id={label}
          onChange={handleChange}
          className=" border outline-none px-[5px] py-[3px]"
        />
      ) : (
        <p className="">{data}</p>
      )}
    </div>
  );
};

export default ProfileField;
