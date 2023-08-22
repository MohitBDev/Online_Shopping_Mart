import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LoginRegisterMenu from "./LoginRegisterMenu";

const RoleNavbar = ({ isLoggedIn }) => {
  const logout = (e) => {
    dispatch({ type: "LogOut" });
    sessionStorage.clear();
    history.push("/"); //navigate ,/windows.href.location
  };
  const state = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(sessionStorage.getItem("role"), isLoggedIn);
  if (!isLoggedIn) {
    return <LoginRegisterMenu />;
  } else if (sessionStorage.getItem("role") === "customer") {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link text-light" to="/cart">
            View Cart{" "}
            {state.cart.length === 0 ? (
              ""
            ) : (
              <span className="badge badge-primary p-2">
                {state.cart
                  .map((x) => x.qty)
                  .reduce((a, b) => parseInt(a) + parseInt(b))}
              </span>
            )}
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link text-light" to="/cprofile">
            Profile
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link text-light" to="/myorders">
            My Orders
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link text-light" onClick={logout} to="#">
            Logout
          </Link>
        </li>
      </ul>
    );
  } else if (sessionStorage.getItem("role") === "seller") {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link  text-light" to="/sprofile">
            Profile
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link text-light" to="/add-product">
            Add Product
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link text-light" to="/myproducts">
            Products
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link text-light" onClick={logout} to="#">
            Logout
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/aprofile">
          Profile
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/sellers">
          Sellers
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/customers">
          Customers
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-light" to="/orders">
          Orders
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link text-light" onClick={logout} to="#">
          Logout
        </Link>
      </li>
    </ul>
  );
};

export default RoleNavbar;
