import "./Home.css";
import Header from "../../components/Header/Header";
import TrainingsContainer from "../../components/TrainingContainer/TrainingsContainer";
import CreateTraining from "../CreateTraining/CreateTraining";
import MyTrainings from "../MyTrainings/MyTrainings";
import { Routes, Route } from "react-router-dom";
import EditTraining from "../EditTraining/EditTraining";
import Login from "../Login/Login";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const verifyToken = async () => {
      try {
        const result = await fetch("/auth", {
          headers: { Authorization: token },
        });
        const data = await result.json();
        if (data.username) {
          localStorage.setItem("username", data.username);
          navigate("/");
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    if (token === "undefined") {
      navigate("/login");
    } else {
      verifyToken();
    }
  }, []);

  const isLoginRoute = location.pathname === "/login";

  return (
    <div>
      {!isLoginRoute && <Header />}
      <Routes>
        <Route path="/" element={<TrainingsContainer />} />
        <Route path="/create-training" element={<CreateTraining />} />
        <Route path="/my-trainings" element={<MyTrainings />} />
        <Route
          path="/my-trainings/edit-training/:id"
          element={<EditTraining />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Home;
