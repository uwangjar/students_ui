import 'bulma/css/bulma.css';
import {editStudent, getStudents,deleteStudent} from './api.js';
import Table from './components/Table';
import { useState, useEffect } from 'react';
import EditForm from './components/EditForm.js';
import { BrowserRouter, Routes, Route,Navigate, useLocation} from 'react-router-dom';

function App(){


    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/table" />}/>
        <Route path="/table" element={<Table />} />
        <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>     
    );
}

export default App;