import "./TrainingItem.css";

const TrainingItem = ({ icon, iconDescription, info }) => {
  return (
    <div className="training-item">
      <img className="icon" src={icon} alt={iconDescription}></img>
      <span className="item-info">{info}</span>
    </div>
  );
};

export default TrainingItem;
