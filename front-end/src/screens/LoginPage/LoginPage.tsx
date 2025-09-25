import { useState } from "react";
import "./Login.styles.css";
import "7.css/dist/7.scoped.css";
import ArrowIcon from "../../components/Icons/Arrow/ArrowIcon";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const LoginPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);

  // TODO advanced authentication
  const USERNAME = process.env.REACT_APP_USERNAME;
  const PASSWORD = process.env.REACT_APP_PASSWORD;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (input.username !== USERNAME || input.password !== PASSWORD) {
      setError(true);
    }
    if (input.username === USERNAME && input.password === PASSWORD) {
      console.log("success");
      navigate("/home");
    }
  };

  const handleInput = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login__page">
      <form onSubmit={handleSubmit} className="form">
        <img src="/login-image.png" width="200" />
        <div className="inputs__container">
          <div>
            <div className="win7">
              <label htmlFor="username" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                aria-describedby="username"
                aria-invalid="false"
                onChange={handleInput}
                className="input"
              />
            </div>
            <div className="win7">
              <label htmlFor="password" />
              <input
                type="password"
                id="password"
                name="password"
                aria-describedby="user-password"
                aria-invalid="false"
                onChange={handleInput}
                className="input"
                placeholder="Password"
              />
            </div>
            {error && <ErrorMessage />}
          </div>
          <div className="arrow-icon__container">
            <button className="button">
              <ArrowIcon />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
