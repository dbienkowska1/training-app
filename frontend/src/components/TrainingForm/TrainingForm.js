import { useState } from "react";
import RadioInput from "../RadioInput/RadioInput";
import SelectBox from "../SelectBox/SelectBox";
import SingleInput from "../SingleInput/SingleInput";
import Button from "../Button/Button";
import "./TrainingForm.css";
import PropTypes from "prop-types";

const TrainingForm = ({ training, buttonLabel, handleSubmitForm }) => {
  const [title, setTitle] = useState(training?.title || "");
  const [startDate, setStartDate] = useState(training?.startDate || "");
  const [endDate, setEndDate] = useState(training?.endDate || "");
  const [startTime, setStartTime] = useState(training?.startTime || "");
  const [endTime, setEndTime] = useState(training?.endTime || "");
  const [language, setLanguage] = useState(training?.language || "");
  const [location, setLocation] = useState(training?.location || "");
  const [level, setLevel] = useState(training?.level || "Basic");
  const [trainer, setTrainer] = useState(training?.trainer || "");

  const handleSubmit = (e) => {
    const requestParams = {
      title,
      startDate,
      endDate,
      startTime,
      endTime,
      location,
      trainer,
      language,
      level,
    };

    handleSubmitForm(e, requestParams);
  };

  return (
    <>
      <form>
        <div className="input-container">
          <SingleInput
            label="Name"
            value={title}
            placeholder="Type name"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <SingleInput
            label="Start date"
            value={startDate}
            type="date"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
          <SingleInput
            label="End date"
            value={endDate}
            type="date"
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <SingleInput
            label="Start time"
            value={startTime}
            type="time"
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
          />
          <SingleInput
            label="End time"
            value={endTime}
            type="time"
            onChange={(e) => {
              setEndTime(e.target.value);
            }}
          />
        </div>
        <div className="input-div radio">
          <label>Language</label>
          <div className="radio-input">
            <RadioInput
              value="PL"
              checked={language === "PL"}
              onChange={(e) => setLanguage(e.target.value)}
            />
            <RadioInput
              value="EN"
              checked={language === "EN"}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
        </div>
        <div className="input-container">
          <SingleInput
            label="Location"
            value={location}
            placeholder="Type location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <SelectBox
            options={["Basic", "Medium", "Advanced"]}
            label="Level"
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <SingleInput
            label="Trainer"
            value={trainer}
            placeholder="Type trainer name"
            type="text"
            onChange={(e) => {
              setTrainer(e.target.value);
            }}
          />
        </div>
      </form>
      <Button
        title={buttonLabel}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      />
    </>
  );
};

TrainingForm.propTypes = {
  training: PropTypes.object,
  buttonLabel: PropTypes.string,
  handleSubmitForm: PropTypes.func,
};

export default TrainingForm;
