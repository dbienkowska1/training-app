import Card from "../Card/Card";
import { useState, useEffect } from "react";
import "./TrainingContainer.css";

const TrainingsContainer = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("data.json");
        const data = await result.json();
        setTrainings(data);
      } catch (error) {
        console.error("Error during data fetching:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const mappedTrainings = trainings.map((training, idx) => {
    return <Card key={idx} training={training} />;
  });

  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="training-container">{mappedTrainings}</div>
      )}
    </div>
  );
};

export default TrainingsContainer;
