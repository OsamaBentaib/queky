import React from "react";
import { SiGithub, SiGitlab, SiLinkedin, SiMedium } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";
export default function FooterContainer() {
  return (
    <footer className="pb-4 bg-primary-3 text-light" id="footer">
      <div className="container">
        <div className="row justify-content-center mb-2">
          <div className="col-auto">
            <ul className="nav">
              <li className="nav-item">
                <a href="https://gitlab.com/obenjrtaib/" className="nav-link">
                  <SiGithub />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://github.com/OsamaBentaib" className="nav-link">
                  <SiGitlab />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/in/osama-bentaib-63a091193/"
                  className="nav-link"
                >
                  <SiLinkedin />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://medium.com/@obenjrtaib" className="nav-link">
                  <SiMedium />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://beosama.com/" className="nav-link">
                  <FiGlobe />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-auto text-center">
            <div className="text-center">
              <a href="https://www.pexels.com">
                <img
                  style={{ width: 90 }}
                  src="https://images.pexels.com/lib/api/pexels-white.png"
                  alt="pexels"
                />
              </a>
            </div>
            <div className="text-center">
              <small className="text-muted">
                <a className="text-sm" href="https://www.pexels.com">
                  Photos provided by Pexels
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col col-md-auto text-center">
            <small className="text-muted">
              Project By <a href="https://beosama.com/">Osama Bentaib</a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
