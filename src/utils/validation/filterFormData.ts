const filterFormData = (data: any, userType: string) => {
    const filteredData: any = {};
    if (userType === 'student') {
        const { name, email, password, phoneNumber, institute, rollno, department, year } = data;
        filteredData.name = name;
        filteredData.email = email;
        filteredData.password = password;
        filteredData.phoneNumber = phoneNumber;
        filteredData.institute = institute;
        filteredData.rollno = rollno;
        filteredData.department = department;
        filteredData.year = year;
    } else if (userType === 'staff') {
        const { name, email, password, phoneNumber, institute } = data;
        filteredData.name = name;
        filteredData.email = email;
        filteredData.password = password;
        filteredData.phoneNumber = phoneNumber;
        filteredData.institute = institute;
    } else if (userType === 'institute') {
        const { name, email, password, college_code,pincode } = data;
        filteredData.name = name;
        filteredData.email = email;
        filteredData.password = password;
        filteredData.pincode = pincode;
        filteredData.college_code = college_code;
    }
    return filteredData;
};

export default filterFormData;