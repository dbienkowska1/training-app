import { useState, useEffect } from "react";
import TrainingForm from "../../components/TrainingForm/TrainingForm";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditTraining = () => {
  const { id } = useParams();
  const [training, setTraining] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const editTraining = async (e, requestParams) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/trainings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams(requestParams),
      });

      if (response.status === 500) {
        toast.error("Error during updating training");
      } else {
        toast.success("Training updated successfully");
      }
    } catch (error) {
      console.error("Error during data fetching:", error.message);
      toast.error("Error during fetching data");
    } finally {
      setLoading(false);
      navigate("/my-trainings");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/trainings/${id}`, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        });
        const data = await response.json();
        setTraining(data);

        if (response.status === 500) {
          toast.error("Error during fetching trainings");
        }
      } catch (error) {
        console.error("Error during data fetching:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="form-container">
          <TrainingForm
            training={training}
            buttonLabel="Edit training"
            handleSubmitForm={editTraining}
          />
        </div>
      )}
    </>
  );
};

export default EditTraining;
