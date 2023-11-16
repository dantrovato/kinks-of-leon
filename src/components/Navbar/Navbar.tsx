import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
      <div className="container-fluid m-3">
        <span className="navbar-brand text-white pr-5">Kinks of Leon</span>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                The tour
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <span className="navbar-text ms-auto text-white">
            Maybe we stick the logo here
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
