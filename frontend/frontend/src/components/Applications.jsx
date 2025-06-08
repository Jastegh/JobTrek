import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Applications.css';

const STATUS_ORDER = ['APPLIED', 'INTERVIEW', 'OFFER', 'ACCEPTED', 'REJECTED'];
const STATUS_BADGE = {
  APPLIED: 'warning',
  INTERVIEW: 'primary',
  OFFER: 'success',
  ACCEPTED: 'info',
  REJECTED: 'danger',
};
const STATUS_LABEL = {
  APPLIED: 'Applied',
  INTERVIEW: 'Interview',
  OFFER: 'Offer',
  ACCEPTED: 'Accepted',
  REJECTED: 'Rejected',
};

function getLogoUrl(company) {
  // Fallback to a default logo if Clearbit fails
  const domain = company.toLowerCase().replace(/\s/g, '') + '.com';
  return `https://logo.clearbit.com/${domain}`;
}

function getProgress(status) {
  const idx = STATUS_ORDER.indexOf(status);
  return ((idx + 1) / STATUS_ORDER.length) * 100;
}

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    fetch('http://localhost:8000/api/applications/')
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, []);

  const filteredApps = filter === 'ALL'
    ? applications
    : applications.filter(app => app.status === filter);

  // Summary counts
  const summary = {
    total: applications.length,
    APPLIED: applications.filter(a => a.status === 'APPLIED').length,
    INTERVIEW: applications.filter(a => a.status === 'INTERVIEW').length,
    OFFER: applications.filter(a => a.status === 'OFFER').length,
    ACCEPTED: applications.filter(a => a.status === 'ACCEPTED').length,
    REJECTED: applications.filter(a => a.status === 'REJECTED').length,
  };

  return (
    <div className="app-bg-gradient min-vh-100 py-5">
      <div className="container-lg">

        {/* Summary Dashboard */}
        <div className="row mb-2 g-3">
          <div className="col-6 col-md-2">
            <div className="summary-card shadow-sm rounded text-center py-3 bg-white">
              <div className="fw-bold fs-5">{summary.total}</div>
              <div className="text-muted small">Total</div>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className="summary-card shadow-sm rounded text-center py-3 bg-white">
              <div className="fw-bold text-warning fs-5">{summary.APPLIED}</div>
              <div className="text-muted small">Applied</div>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className="summary-card shadow-sm rounded text-center py-3 bg-white">
              <div className="fw-bold text-primary fs-5">{summary.INTERVIEW}</div>
              <div className="text-muted small">Interview</div>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className="summary-card shadow-sm rounded text-center py-3 bg-white">
              <div className="fw-bold text-success fs-5">{summary.OFFER}</div>
              <div className="text-muted small">Offer</div>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className="summary-card shadow-sm rounded text-center py-3 bg-white">
              <div className="fw-bold text-info fs-5">{summary.ACCEPTED}</div>
              <div className="text-muted small">Accepted</div>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className="summary-card shadow-sm rounded text-center py-3 bg-white">
              <div className="fw-bold text-danger fs-5">{summary.REJECTED}</div>
              <div className="text-muted small">Rejected</div>
            </div>
          </div>
        </div>
        <div className="main-app-container shadow-lg rounded-4 p-4 bg-white">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
            <h1 className="section-title fw-bold mb-0" style={{letterSpacing: '1px'}}>Job Applications</h1>
            <Link to="/applications/create" className="btn btn-success shadow">
              Add New Application
            </Link>
          </div>
          {/* Sticky Filter Tabs */}
          <div className="filter-bar sticky-top bg-white py-2 mb-4" style={{zIndex: 10, top: 70}}>
            <ul className="nav nav-pills justify-content-center gap-2">
              <li className="nav-item">
                <button className={`nav-link${filter === 'ALL' ? ' active' : ''}`} onClick={() => setFilter('ALL')}>All</button>
              </li>
              {STATUS_ORDER.map(status => (
                <li className="nav-item" key={status}>
                  <button className={`nav-link${filter === status ? ' active' : ''}`} onClick={() => setFilter(status)}>
                    {STATUS_LABEL[status]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Cards Grid */}
          <div className="row g-4 animate-apps">
            {filteredApps.map((app) => {
              const isRejected = app.status === 'REJECTED';
              return (
                <div className="col-md-6 col-lg-4" key={app.id}>
                  <div className={`card h-100 border-0 app-card ${isRejected ? 'rejected-card' : ''}`}>

                    <div className="card-body d-flex flex-column p-4">
                      <div className="d-flex align-items-center mb-3">
                        <img src={getLogoUrl(app.company_name)} alt={app.company_name} className="me-3" style={{width: 40, height: 40, objectFit: 'contain', background: '#f8f9fa', borderRadius: '8px'}} onError={e => e.target.style.display='none'} />
                        <div>
                          <h5 className={`card-title mb-0 fw-semibold ${isRejected ? 'text-white' : ''}`}>{app.position}</h5>
                          <small className={`text-muted ${isRejected ? 'text-white-50' : ''}`}>{app.company_name}</small>
                        </div>
                      </div>
                      <div className="mb-2">
                        <span className={`badge bg-${STATUS_BADGE[app.status]} ${isRejected ? 'bg-light text-danger' : ''}`}>{STATUS_LABEL[app.status]}</span>
                      </div>
                      <div className="mb-2">
                        <div className="progress" style={{height: '6px', background: isRejected ? '#fff3' : ''}}>
                          <div className={`progress-bar bg-${STATUS_BADGE[app.status]}`} style={{width: `${getProgress(app.status)}%`}}></div>
                        </div>
                        <small className={`text-muted ${isRejected ? 'text-white-50' : ''}`}>
  {getStatusStep(app.status)} ({STATUS_ORDER.indexOf(app.status)+1}/{STATUS_ORDER.length})
</small>

                      </div>
                      <div className="mb-2">
                        <span className="fw-bold">Link: </span>
                        {app.link ? (
                          <a href={app.link} target="_blank" rel="noopener noreferrer" className={isRejected ? 'text-white text-decoration-underline' : ''}>View</a>
                        ) : 'N/A'}
                      </div>
                      <div className="mt-auto d-flex justify-content-between">
                        <Link to={`/applications/${app.id}/edit`} className={`btn btn-outline-primary btn-sm ${isRejected ? 'border-white text-white' : ''}`}>Edit</Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {filteredApps.length === 0 && (
              <div className="col-12 text-center text-muted">No applications found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;

function getStatusStep(status) {
  const steps = {
    APPLIED: 'Application Sent',
    INTERVIEW: 'Interview Stage',
    OFFER: 'Received Offer',
    ACCEPTED: 'Accepted',
    REJECTED: 'Rejected'
  };
  return steps[status] || '';
}
