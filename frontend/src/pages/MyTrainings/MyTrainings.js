import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { toast } from "react-toastify";
import SelectBox from "../../components/SelectBox/SelectBox";
import "./MyTrainings.css";

const selectedTrainingsLabel = {
  createdByMe: "Trainings created by me",
  registeredForTrainings: "Trainings I registered for",
};

const trainingsURL = {
  [selectedTrainingsLabel.createdByMe]: "created-by-me",
  [selectedTrainingsLabel.registeredForTrainings]: "registered-for",
};

const MyTrainings = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trainingsType, setTrainingsType] = useState(
    selectedTrainingsLabel.createdByMe
  );

  const handleSelectTrainingsType = (e) => {
    setTrainingsType(e.target.value);
  };

  const fetchData = async () => {
    try {
      const username = localStorage.getItem("username");
      const result = await fetch(
        `/trainings/${trainingsURL[trainingsType]}/${username}`,
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      );
      const data = await result.json();
      setTrainings(data);

      if (result.status === 500) {
        toast.error("Error during fetching trainings");
      }
    } catch (error) {
      console.error("Error during data fetching:", error.message);
      toast.error("Error during fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [trainingsType]);

  const mappedTrainings = trainings.map((training, idx) => {
    return <Card key={idx} training={training} refresh={fetchData} />;
  });

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="container">
          <div className="select-box-container">
            <SelectBox
              options={Object.values(selectedTrainingsLabel)}
              label="Select trainings"
              onChange={(e) => handleSelectTrainingsType(e)}
              value={trainingsType}
            />
          </div>
          <div className="training-container">{mappedTrainings}</div>
        </div>
      )}
    </>
  );
};

export default MyTrainings;
