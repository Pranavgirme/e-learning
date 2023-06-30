import React from 'react';
import Learn1 from '../images/Learn1.png';
import '../styles/style.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container my-5">
      <div className="row pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-4 col-md-12 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Your course to success</h1>
          <p className="lead">Build skills with courses, certifictes and degree online from top universities and companies.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <Link className="nav-link" to="/courses">
              <button type="button" className="btn custom-button btn-lg px-4 me-md-2 fw-bold">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 npmoffset-lg-1 d-flex justify-content-end">
          <img className="image-right" src={Learn1} alt="Logo" width={700} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
