import useLocalStorageState from "use-local-storage-state";
import { INITIAL_LOGIN_STATUS } from "../constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useLocalStorageState("loginStatus", {
    defaultValue: INITIAL_LOGIN_STATUS,
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {loginStatus && loginStatus.status === "success" && (
          <>
            <Link className="navbar-brand" to="/home">
              FASHION <span className="text-warning">STORE</span>
            </Link>
          </>
        )}

        {!loginStatus && (
          <>
            <Link className="navbar-brand" to="/signin">
              FASHION <span className="text-warning">STORE</span>
            </Link>
          </>
        )}

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
          <ul className="navbar-nav mx-auto justify-content-center">
            <li className="nav-item">
              <Link
                className="nav-link mx-lg-3"
                aria-current="page"
                to="/category/men"
              >
                Men
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link mx-lg-3"
                aria-current="page"
                to="/category/women"
              >
                Women
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link mx-lg-3"
                aria-current="page"
                to="/category/kids"
              >
                Kids
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link mx-lg-3"
                aria-current="page"
                to="/category/sports"
              >
                Sports
              </Link>
            </li>
            {loginStatus && loginStatus.status === "success" && (
              <li className="nav-item">
                <Link
                  className="nav-link mx-lg-3"
                  aria-current="page"
                  to="/Home"
                >
                  All
                </Link>
              </li>
            )}
          </ul>

          <ul className="navbar-nav ms-auto">
            {loginStatus !== null && loginStatus.status === "success" ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    Cart
                  </Link>
                </li>

                <li className="nav-item">
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      setLoginStatus(null);
                      navigate("/signin", { replace: true });
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link mx-lg-3"
                    aria-current="page"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link mx-lg-3"
                    aria-current="page"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
