import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RoleNavbar from "./RoleNavbar";

const { Fragment } = require("react");

function NavBar() {
  const state = useSelector((state) => state);
  console.log("LoggedIn ", state.loggedin);
  console.log("Cart ", state.cart);
  return (
    <Fragment>
      <div className="clearfix"></div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-dark  position-sticky"
        style={{ top: 0, zIndex: "1000" }}
      >
        {/* <Link className="navbar-brand" to="#">E-Shop</Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-light"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-light" to="/">
                HOME
              </Link>
            </li>

            {/* <li className="nav-item dropdown"> */}
            {/* <li className="nav-item ">
              <Link
                className="nav-link  text-light"
                // className="nav-link dropdown-toggle text-light"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                CLOTHING
              </Link> */}
              {/* <div
                className="dropdown-menu "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/cat/Men/Upper Wear">
                  MEN'S
                </Link>
                <Link className="dropdown-item" to="/cat/Men/Bottom Wear">
                  WOMEN'S
                </Link>
              </div> */}
            {/* </li> */}
            {/* <li className="nav-item ">
              <Link
                className="nav-link text-light"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                GROCERIES
              </Link> */}
              {/* <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/cat/Women/Upper Wear">
                  SPICES N MASALAS
                </Link>
                <Link className="dropdown-item" to="/cat/Women/Bottom Wear">
                  NUTS N SEEDS
                </Link>
                <Link className="dropdown-item" to="/cat/Women/Bottom Wear">
                  DALS N PULSES
                </Link>
              </div> */}
            {/* </li> */}

            {/* <li className="nav-item ">
              <Link
                className="nav-link  text-light"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                FOOTWEAR
              </Link> */}
              {/* <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/cat/Women/Upper Wear">
                  SNEAKERS
                </Link>
                <Link className="dropdown-item" to="/cat/Women/Bottom Wear">
                  SANDALS
                </Link>
                <Link className="dropdown-item" to="/cat/Women/Bottom Wear">
                  FLIP FLOPS
                </Link>
              </div> */}
            {/* </li> */}

            {/* <li className="nav-item  ">
              <Link
                className="nav-link text-light"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                DAIRY
              </Link> */}
              {/* <div
                className="dropdown-menu "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/cat/Kids/Upper Wear">
                  MILK
                </Link>
                <Link className="dropdown-item" to="/cat/Kids/Bottom Wear">
                  MILK SOLIDS
                </Link>
              </div> */}
            {/* </li> */}

            {/* <li className="nav-item  ">
              <Link
                className="nav-link  text-light"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                HANDICRAFTS
              </Link> */}
              {/* <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/cat/Kids/Upper Wear">
                  JEWELLERIES
                </Link>
                <Link className="dropdown-item" to="/cat/Kids/Bottom Wear">
                  PLANT DECOR
                </Link>
              </div> */}
            {/* </li> */}
          </ul>
          <RoleNavbar isLoggedIn={state.loggedin.IsLoggedIn} />
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
