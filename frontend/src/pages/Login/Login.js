import icons from "../../constants/icons";
import Button from "../../components/Button/Button";
import "./Login.css";
import { useState } from "react";
import { toast } from "react-toastify";
// import { createContext } from "react";
import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleSwitchForm = (isUserRegistered) => {
    setFormErrors({});
    setIsRegistered(isUserRegistered);
  };

  const validateForm = () => {
    let errorMsg = {};

    if (!username && !isRegistered) {
      errorMsg.username = "User name required";
    }

    if (!email) {
      errorMsg.email = "Email required";
    } else {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(email)) {
        errorMsg.email = "Invalid email";
      }
    }

    if (!password) {
      errorMsg.password = "Password required";
    }

    setFormErrors(errorMsg);
    const isValid = !Object.keys(errorMsg).length > 0;
    return isValid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const requestParams = {
        username,
        email,
        password,
      };

      try {
        const result = await fetch("/auth/register", {
          method: "POST",
          body: new URLSearchParams(requestParams),
        });
        const { token, username } = await result.json();
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        navigate("/");
        toast.success("New account created successfully");
      } catch (error) {
        console.error(error.message);
        toast.error("Error during fetching data");
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const requestParams = {
        email,
        password,
      };

      try {
        const result = await fetch("/auth/login", {
          method: "POST",
          body: new URLSearchParams(requestParams),
        });
        const { token, username } = await result.json();
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        navigate("/");
      } catch (error) {
        console.error(error.message);
        toast.error("Error during login");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <span className="login-title">Welcome</span>
        <img src={icons.logo} alt="Icon"></img>
        <form className="login-form">
          {!isRegistered && (
            <div className="input-msg">
              <div className="inputbox">
                <input
                  type="text"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>User name</label>
              </div>
              {formErrors.username && <span>{formErrors.username}</span>}
            </div>
          )}

          <div className="input-msg">
            <div className="inputbox">
              <input
                type="text"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            {formErrors.email && <span>{formErrors.email}</span>}
          </div>
          <div className="input-msg">
            <div className="inputbox">
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            {formErrors.password && <span>{formErrors.password}</span>}
          </div>
        </form>
        {!isRegistered ? (
          <>
            <Button
              title="Register"
              className="login-button"
              onClick={handleRegister}
            />
            <span className="sign-up-content">
              Already have an account?&nbsp;
              <span className="sign-up" onClick={() => handleSwitchForm(true)}>
                Log in
              </span>
            </span>
          </>
        ) : (
          <>
            <Button
              title="Login"
              className="login-button"
              onClick={handleLogin}
            />
            <span className="sign-up-content">
              Don't have an account?&nbsp;
              <span className="sign-up" onClick={() => handleSwitchForm(false)}>
                Sign up
              </span>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
