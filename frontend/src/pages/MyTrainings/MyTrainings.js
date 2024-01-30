import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { toast } from "react-toastify";

const MyTrainings = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const username = localStorage.getItem("username");
      const result = await fetch(`/trainings/my-trainings/${username}`, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      const data = await result.json();
      setTrainings(data);
    } catch (error) {
      console.error("Error during data fetching:", error.message);
      toast.error("Error during fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const mappedTrainings = trainings.map((training, idx) => {
    return (
      <Card key={idx} training={training} createdByMe refresh={fetchData} />
    );
  });

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="container">
          <div className="training-container">{mappedTrainings}</div>
        </div>
      )}
    </>
  );
};

export default MyTrainings;
