import "./Home.css";
import Header from "../../components/Header/Header";
import TrainingsContainer from "../../components/TrainingContainer/TrainingsContainer";
import CreateTraining from "../CreateTraining/CreateTraining";
import MyTrainings from "../MyTrainings/MyTrainings";
import { Routes, Route } from "react-router-dom";
import EditTraining from "../EditTraining/EditTraining";

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<TrainingsContainer />} />
        <Route path="/create-training" element={<CreateTraining />} />
        <Route path="/my-trainings" element={<MyTrainings />} />
        <Route
          path="/my-trainings/edit-training/:id"
          element={<EditTraining />}
        />
      </Routes>
    </div>
  );
};

export default Home;
