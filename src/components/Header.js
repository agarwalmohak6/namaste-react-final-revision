import { NavLink } from "react-router-dom";
import Title from "./Title";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul className="nav-link-ul">
          <li>
            <NavLink to="/" className={"nav-link"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={"nav-link"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={"nav-link"}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={"nav-link"}>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/grocery" className={"nav-link"}>
              Grocery
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={"nav-link"}>
              Online Status:{onlineStatus ? "🟢" : "🔴"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
