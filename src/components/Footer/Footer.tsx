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
          <h5>Why a tour?</h5>
          <p>
            You can find plenty of things to do by yourself in London but the
            London kinky scene can be cliquey. If you want to be part of a
            group, we are at the epicenter of the scene and will be able to
            introduce you the inner crowd, as well as giving you introductions
            to the best after parties{" "}
          </p>
        </div>
        <div className="col mb-3">
          <h5>Contact</h5>
          <p>Leon is a silly willy</p>
        </div>
        <div className="col mb-3">
          <h5>Bespoke tours</h5>
          <p>
            Tell us about your kinks and we will design the perfect tour for you
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
