import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Applications.css';

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/applications/')
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, []);

  return (
    <div className="applications-container">
      <div className="applications-header">
        <h1>Job Applications</h1>
        <Link to="/applications/create" className="add-button">
          Add New Application
        </Link>
      </div>
      <div className="applications-list">
        <div className="applications-headings">
          <span>Position</span>
          <span>Company</span>
          <span>Status</span>
          <span>Link</span>
          <span>Actions</span>
        </div>
        {applications.map((app) => (
          <div key={app.id} className="application-item">
            <span>{app.position}</span>
            <span>{app.company_name}</span>
            <span>{app.status}</span>

            <span>
              {app.link ? (
                <a
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-field"
                >
                  View
                </a>
              ) : (
                'N/A'
              )}
            </span>
            
            <Link to={`/applications/${app.id}/edit`} className="edit-link">
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
