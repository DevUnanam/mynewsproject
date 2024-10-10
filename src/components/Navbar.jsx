import React from 'react';

const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Team-A <span className="badge text-bg-danger fs-6">NEWS</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link" onClick={() => setCategory("technology")}>Technology</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => setCategory("business")}>Business</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => setCategory("health")}>Health</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => setCategory("science")}>Science</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => setCategory("sports")}>Sports</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
