import "./Header.css";
import icons from "../../constants/icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <img src={icons.logo} alt="Training app logo"></img>
          <span className="title">Trainings</span>
        </div>
        <div className="navigation">
          <NavLink end to="/" className="nav-item">
            All trainings
          </NavLink>
          <NavLink to="my-trainings" className="nav-item">
            My trainings
          </NavLink>
          <NavLink to="create-training" className="nav-item">
            Create training
          </NavLink>
          <NavLink to="log-out" className="nav-item">
            Log out
          </NavLink>
          <div className="split"></div>
          <span className="nav-item">Dominika Bieńkowska</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
