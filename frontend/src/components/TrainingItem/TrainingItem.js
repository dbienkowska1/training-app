import "./TrainingItem.css";
import PropTypes from "prop-types";

const TrainingItem = ({ icon, iconDescription, info }) => {
  return (
    <div className="training-item">
      <img className="icon" src={icon} alt={iconDescription}></img>
      <span className="item-info">{info}</span>
    </div>
  );
};

TrainingItem.propTypes = {
  icon: PropTypes.string,
  iconDescription: PropTypes.string,
  info: PropTypes.string,
};

export default TrainingItem;
