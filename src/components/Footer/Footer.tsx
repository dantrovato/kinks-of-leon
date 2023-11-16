const Footer = () => {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32"></svg>
          </a>
          <p className="text-body-secondary">© 2023</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5>Best of London</h5>
          <p>blah blah</p>
        </div>
        <div className="col mb-3">
          <h5>Section</h5>
          <p>favacce</p>
        </div>
        <div className="col mb-3">
          <h5>Section</h5>
          <p>favacce</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;