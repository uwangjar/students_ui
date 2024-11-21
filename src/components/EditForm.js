import {useState, useEffect} from 'react';
import {getStudent,editStudent} from '../api.js';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function EditForm(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [level, setLevel] = useState('');
  const [gpa, setGpa] = useState('');
  const [major, setMajor] = useState('');
  const [message, setMessage]= useState('');
  const [isError,setIsError]= useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchData = async (id) => {
   const response= await getStudent(id);
     if(response.code!=='ERR_NETWORK'){
       const student=response.data;
       setFirstName(student.firstName);
       setLastName(student.lastName);
       setLevel(student.level);
       setGpa(student.gpa);
       setMajor(student.major);
     }
 };

 useEffect(() => {
    fetchData(id);
 },[]);

 

   const handleFirstName= (event)=>{
      setFirstName(event.target.value);
   }
 
   const handleLastName= (event)=>{
     setLastName(event.target.value);
   }
 
   const handleLevel= (event)=>{
     setLevel(event.target.value);
   }
   const handleGPA= (event)=>{
     setGpa(event.target.value);
   }
   const handleMajor= (event)=>{
     setMajor(event.target.value);
   }

   const handleBackHome =()=>{
    navigate('/table',{ replace: true });
   }

   const handleFormSubmit=  async (event)=>{
      
       event.preventDefault();
       const student ={};
       student.id=id;
       student.firstName=firstName;
       student.lastName=lastName;
       student.level=level;
       student.gpa=gpa;
       student.major=major;
       const response = await editStudent(student);
       console.log(response);
       if(response.status===200){
        setIsError(false);
        setMessage(response.data.statusMsg);
       }else if(response.status >=400){
        setIsError(true);
        setMessage(response.response.data.errorMessage);
       }
       
   }

   return (
    <div style={{width:"600px", marginLeft:"20px", marginTop:"20px"}}>
    <h1 className="title" >Edit Form</h1>
    <form  onSubmit={handleFormSubmit}>
    <div className="field">
    <label className="label">First Name</label>
     <input value ={firstName} onChange={handleFirstName} className="input" type="text" placeholder="e.g Jordan"/>
   </div>
   <div className="field">
     <label className="label">Last Name</label>
     <input value ={lastName} onChange={handleLastName} className="input" type="text" placeholder="e.g. Poole"/>
   </div>
   <div className="field">
     <label className="label">Level</label>
     <input value={level} onChange={handleLevel} className="input" type="text" placeholder="e.g. Junior"/>
   </div>
   <div className="field">
     <label className="label">GPA</label>
     <input value={gpa} onChange={handleGPA} className="input" type="text" placeholder="e.g. 3.95"/>
   </div>
   <div className="field">
     <label className="label">Major</label>
     <input value={major} onChange={handleMajor} className="input" type="text" placeholder="e.g. Math"/>
   </div>
   <button onClick={handleFormSubmit} className="button is-primary">
    Submit
  </button>
  <button onClick={handleBackHome} style={{marginLeft:"20px"}} className="button is-link is-light">Back to home</button>
  <p style={{color: isError ? 'red':'green'}}>{message}</p>
 </form>
 </div>

   );
}


export default EditForm;