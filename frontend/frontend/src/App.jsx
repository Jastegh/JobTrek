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
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Applications.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" style={{padding: '0.4rem 0', minHeight: 54}}>
        <div className="container">
          <a className="navbar-brand fw-bold text-primary fs-3" href="/" style={{letterSpacing: '1px'}}>Job Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-4">
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="/applications">Applications</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="/resumes">Resumes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/applications" />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/create" element={<ApplicationForm />} />
          <Route path="/applications/:id/edit" element={<ApplicationForm />} />
          <Route path="/resumes" element={<Resumes />} />
          <Route path="/resumes/create" element={<ResumeForm />} />
          <Route path="/edit-pdf/:id" element={<EditResume />} />
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
