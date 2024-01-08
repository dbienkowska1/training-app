import TrainingForm from "../../components/TrainingForm/TrainingForm";
import "./CreateTraining.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateTraining = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createNewTraining = async (e, requestParams) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/trainings", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams(requestParams),
      });
      navigate("/my-trainings");
      toast.success("New training created successfully");
    } catch (error) {
      console.error(error.message);
      toast.error("Error during fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="form-container">
          <span className="form-title">Create new training</span>
          <TrainingForm
            buttonLabel="Create training"
            handleSubmitForm={createNewTraining}
          />
        </div>
      )}
    </>
  );
};

export default CreateTraining;
