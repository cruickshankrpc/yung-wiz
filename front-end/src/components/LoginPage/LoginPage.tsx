import { useState } from 'react'
import "./Login.styles.css"
import "7.css/dist/7.css";
import ArrowIcon from '../Icons/Arrow/ArrowIcon';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    username: "",
    password: ""
  })

  // TODO make arrow icon a button


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(input.username)
    console.log(input.password)
    if (input.username !== "jack" && input.password !== "bluelotus") {
      // dispatch action from hooks
      alert("Please provide valid username and password")     
    }
    console.log("success")
    navigate("/home")

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
          name="username"
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
        <button>
      <ArrowIcon />
      </button>
      </div>
      </div>


    </form>
    </div>
  )
}

export default LoginPage;