const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          FASHION <span className="text-danger">STORE</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className="nav-link active mx-lg-4"
                aria-current="page"
                href="#"
              >
                Men's
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link mx-lg-3" aria-current="page" href="#">
                Women
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link mx-lg-3" href="#">
                Kids
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link mx-lg-3" href="#">
                Sport
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign In
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
