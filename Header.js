import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
const Title = () => (
    <a href="/">
      <img
        className="w-28 flex-wrap mx-12"
        alt="Boltavenue"
        src={ Logo }
      />
    </a>
  );
const Header = () => {
    return (
      <>
        <div className="flex shadow justify-between px-10 mx-10">
          <Title />
          <div className="flex-wrap wrap">
            <ul className="flex justify-end mr-2">
              <li className="m-4 py-8"><Link to="/">Home</Link></li>
              <li className="m-4 py-8"><Link to="/about">About us</Link></li>
              <li className="m-4 py-8"><Link to="/contact">Contact</Link></li>
              <li className="m-4 py-8"><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
        </div>
      </>
    );
  };
export default Header;
