import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Applications from './components/Applications';
import Resumes from './components/Resumes';
import Responses from './components/Responses';
import ApplicationForm from './components/ApplicationForm';
import ResumeForm from './components/ResumeForm';
import ResponseForm from './components/ResponseForm';
import NavBar from './components/NavBar'; // Import NavBar
import About from './components/About';
import EditResume from './components/EditResume';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/applications" />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/create" element={<ApplicationForm />} />
          <Route path="/applications/:id/edit" element={<ApplicationForm />} />
          <Route path="/resumes" element={<Resumes />} />
          <Route path="/resumes/create" element={<ResumeForm />} />
          <Route path="/resumes/:id/edit" element={<EditResume />} />
          <Route path="/responses/:applicationId" element={<Responses />} />
          <Route path="/responses/create" element={<ResponseForm />} />
          <Route path="/master-resume" element={<ResumeForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
