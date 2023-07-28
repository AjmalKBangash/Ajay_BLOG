import { Outlet } from "react-router-dom";
import "./NavBar.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { ImSearch } from "react-icons/im";

function NavBar() {
  return (
    <>
      <nav className="navBar">
        <ul>
          <li>Ajay_BLOG</li>
          <li>Services</li>
          <li>Topics</li>
          <li>Latest</li>
          <li>LogIn</li>
          <li>SignUp</li>
        </ul>
      </nav>
      <div>
        <form className="formInNavBar">
          <label htmlFor="searchInput">Search_Blogs:&nbsp;&nbsp;</label>
          <input id="searchInput" type="text" />
          &nbsp;
          <ImSearch className="ImSearchForm" />
        </form>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
