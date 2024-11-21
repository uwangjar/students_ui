
import {getStudents,deleteStudent} from '../api.js';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
  
  function Table(){

    const headers=[];
    headers.push("Student ID");
    headers.push("First Name");
    headers.push("Last Name");
    headers.push("Level");
    headers.push("GPA");
    headers.push("Major");
    const navigate = useNavigate();

    const [students,setStudents] = useState([]);
    const fetchData = async () => {
        const response= await getStudents();
        console.log(response);
        if(response.code!=='ERR_NETWORK'){
          setStudents(response.data);
        }
    };

    useEffect(() => {
       fetchData();
     },[]);
      
      const handleRowClick = (student)=>{
        console.log(student);
        navigate('/edit/'+student.id,{ replace: true });

      }

       
      const handleDelete = async(student) =>{
        const response = await deleteStudent(student.id);
        console.log(response);
        fetchData();
        console.log(student)
        
      }
      
      return (
        <div className="table-container" style={{height:"500px", overflow: "scroll"}}>
          <table className="table">
           <thead>
         <tr>
             {headers.map((header) => (
               <th key={header} style={{minWidth:"150px"}}>{header}</th>
             ))}
           </tr>
         </thead>
         <tbody>{students.map((student) => (
              <tr key={student.id}>
                <td >{student.id}</td>
                <td >{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.level}</td>
                <td>{student.gpa}</td>
                <td>{student.major}</td>
                <td></td>
               <td ><button onClick={() => handleRowClick(student)} className="button is-primary is-light">Edit</button></td>
               <td><button onClick ={()=>handleDelete(student)} className="button is-warning is-light" >Delete</button></td>
              </tr>
            ))}
        </tbody>
        </table>
        </div>
  
        );
  
  
  }
  
  
  export default Table;