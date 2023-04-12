import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Beer-O-Clock</h1>
        </Link>
        <ul>
          <li>
            <Link to="/findbeer">Find Beer</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
