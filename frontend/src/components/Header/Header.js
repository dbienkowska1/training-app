import "./Header.css";
import icons from "../../constants/icons";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("username"));
  }, [setName]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

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
          <Button title="Log out" className="nav-item" onClick={handleLogOut} />
          <div className="split"></div>
          <span className="nav-item">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
