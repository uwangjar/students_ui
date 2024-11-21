import axios from 'axios';

export const getStudents= async ()=>{
   /* const response = axios.get('http://localhost:8080/api/student').catch(function (error){
       console.log(error);
        return error;
    });*/
    const response = axios.get('http://localhost:3001/students');
    return response;
}

export const getStudent= async (id)=>{
  /*  const response = axios.get('http://localhost:8080/api/student/'+id).catch(function (error){
        console.log(error);
        return error;
    });*/
    const response = axios.get('http://localhost:3001/students/'+id);
    return response;
}


export const editStudent= async (student)=>{
   console.log(student);
   /* const response = axios.put('http://localhost:8080/api/student',
        { 
           "id":student.id,
           "firstName": student.firstName,
           "lastName": student.lastName,
           "level": student.level,
           "gpa": student.gpa,
           "major":student.major
        }
    ).catch(function (error){
        console.log(error);
        return error;
    });*/
    const response = axios.put('http://localhost:3001/students/'+student.id,
        {
            "firstName": student.firstName,
            "lastName": student.lastName,
            "level": student.level,
            "gpa": student.gpa,
            "major":student.major

        }
    );
    return response;
}

export const deleteStudent= async (id)=>{
   /* const response = axios.delete('http://localhost:8080/api/student/'+id).catch(function (error){
        console.log(error);
        return error;
    });*/

    const response = axios.delete('http://localhost:3001/students/'+id);

    return response;
}