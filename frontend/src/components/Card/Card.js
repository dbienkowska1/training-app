import Button from "../Button/Button";
import TrainingItem from "../TrainingItem/TrainingItem";
import "./Card.css";
import icons from "../../constants/icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Card = ({ training, createdByMe, refresh }) => {
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    try {
      await fetch(`/trainings/${training._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      toast.success("Training deleted successfully");
    } catch (error) {
      console.error("Error during data fetching:", error.message);
      toast.error("Error during fetching data");
    } finally {
      refresh();
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
            info={`${training.startDate} - ${training.endDate}`}
            icon={icons.calendar}
            iconDescription="Date"
          />
          <TrainingItem
            info={`Language: ${training.language}`}
            icon={setLanguageIcon(training.language)}
            iconDescription="Language"
          />
          <TrainingItem
            info={training.location}
            icon={icons.location}
            iconDescription="Location"
          />
        </div>
        <div className="training-details">
          <TrainingItem
            info={`${training.startTime} - ${training.endTime}`}
            icon={icons.clock}
            iconDescription="Hours"
          />
          <TrainingItem
            info={training.level}
            icon={icons.level}
            iconDescription="Level"
          />
          <TrainingItem
            info={`Trainer: ${training.trainer}`}
            icon={icons.person}
            iconDescription="Trainer"
          />
        </div>
        {createdByMe ? (
          <div className="buttons">
            <Button
              title="Edit"
              className="edit"
              onClick={() =>
                navigate(`/my-trainings/edit-training/${training._id}`)
              }
            />
            <Button title="Delete" className="delete" onClick={handleDelete} />
          </div>
        ) : (
          <Button
            title="Register"
            icon={icons.add}
            iconDescription="Add icon"
          />
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  training: PropTypes.object,
  createdByMe: PropTypes.bool,
  refresh: PropTypes.func,
};

export default Card;
