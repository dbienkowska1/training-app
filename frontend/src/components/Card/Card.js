import Button from "../Button/Button";
import TrainingItem from "../TrainingItem/TrainingItem";
import "./Card.css";
import icons from "../../constants/icons";

const Card = ({ training }) => {
  const setLanguageIcon = (language) => {
    switch (language) {
      case "PL":
        return icons.plFlag;
      case "EN":
        return icons.enFlag;
      default:
        return "";
    }
  };

  return (
    <div className="card">
      <div className="title-container">
        <span className="card-title">{training.title}</span>
      </div>
      <div className="card-info">
        <div className="training-details">
          <TrainingItem
            info={training.date}
            icon={icons.calendar}
            iconDescription="Date"
          />
          <TrainingItem
            info={training.time}
            icon={icons.clock}
            iconDescription="Hours"
          />
          <TrainingItem
            info={`Language: ${training.language}`}
            icon={setLanguageIcon(training.language)}
            iconDescription="Language"
          />
        </div>
        <div className="training-details">
          <TrainingItem
            info="Remote"
            icon={icons.location}
            iconDescription="Location"
          />
          <TrainingItem
            info="Basic"
            icon={icons.level}
            iconDescription="Level"
          />
          <TrainingItem
            info={`Trainer: ${training.trainer}`}
            icon={icons.person}
            iconDescription="Trainer"
          />
        </div>
        <Button title="Register" icon={icons.add} iconDescription="Add icon" />
      </div>
    </div>
  );
};

export default Card;
