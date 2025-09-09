import { useState } from 'react'
import "./Login.styles.css"
import "7.css/dist/7.css";
import ArrowIcon from '../Icons/Arrow/ArrowIcon';

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: ""
  })

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (input.username !== process.env.USERNAME && input.password !== process.env.PASSWORD) {
      // dispatch action from hooks
    }
    alert("Please provide valid username and password")
  }

  const handleInput = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev, 
      [name]: value,
    }))
  }

  return (
    <div className="login__page">
    <form onSubmit={handleSubmit} className="form">
      <img src="/login-image.png" width="200"/>
      <div className="inputs__container">
        <div>
      <div>
        <label htmlFor="username"/>
        <input
          type="text"
          id="username"
          placeholder="Username"
          aria-describedby="username"
          aria-invalid="false"
          onChange={handleInput}
          className="input"
           />
      </div>
        <div>
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
      </div>
      <div className="arrow-icon__container">
      <ArrowIcon />
      </div>
      </div>


    </form>
    </div>
  )
}

export default Login;