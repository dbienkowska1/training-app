import Button from "../Button/Button";
import "./Header.css";
import icons from "../../constants/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <img src={icons.logo} alt="Training app logo"></img>
          <span className="title">Trainings</span>
        </div>
        <div className="nav">
          <Button title="My trainings" />
        </div>
      </div>
    </div>
  );
};

export default Header;
