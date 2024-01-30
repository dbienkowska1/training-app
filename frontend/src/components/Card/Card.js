import Button from "../Button/Button";
import TrainingItem from "../TrainingItem/TrainingItem";
import "./Card.css";
import icons from "../../constants/icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Card = ({ training, refresh }) => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [isRegisteredForTraining, setIsRegisteredForTraining] = useState(false);
  const [isUserTrainer, setIsUserTrainer] = useState(false);

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

  useEffect(() => {
    setUserName(localStorage.getItem("username"));
    setIsRegisteredForTraining(training.users.includes(username));
    setIsUserTrainer(training.trainer === username);
  }, [username, training.users]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/trainings/${training._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });

      if (response.status === 500) {
        toast.error("Error during deleting training");
      } else {
        toast.success("Training deleted successfully");
      }
    } catch (error) {
      console.error("Error during data fetching:", error.message);
      toast.error("Error during fetching data");
    } finally {
      refresh();
    }
  };

  const handleRegisterForTraining = async () => {
    try {
      const response = await fetch(
        `/trainings/register-for-training/${training._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: new URLSearchParams({ username }),
        }
      );

      if (response.status === 500) {
        toast.error("Error during registering user for training");
      } else {
        toast.success("User registered for training");
      }
    } catch (error) {
      console.error("Error during registration for training:", error.message);
      toast.error("Error during registration for training");
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
        {isUserTrainer ? (
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
            title={isRegisteredForTraining ? "Registered" : "Register"}
            icon={isRegisteredForTraining ? icons.check : icons.add}
            iconDescription={
              isRegisteredForTraining ? "Check icon" : "Add icon"
            }
            disabled={isRegisteredForTraining}
            onClick={handleRegisterForTraining}
            className={isRegisteredForTraining ? "green" : ""}
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
