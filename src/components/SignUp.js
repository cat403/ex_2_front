import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkUserAvailability } from "../redux/actions";
function SignUp() {
  const dispatch = useDispatch();
  const available = useSelector((state) => state.available);
  const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func(...args);
      }, timeout);
    };
  };
  const [formData, setFormData] = React.useState({});
  const [confirmPass, setConfirmPass] = React.useState(false);

  const checkPassMatch = (event) => {
    setConfirmPass(event.target.value === formData.password);
  };
  const handleFormDataChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const handleUserNameChange = (event) => {
    handleFormDataChange(event);
    dispatch(checkUserAvailability({ userName: event.target.value }));
  };
  const isOk = (bool) => {
    if (bool) {
      return <span style={{ color: "green" }}>✓</span>;
    }
    if (!bool) {
      return <span style={{ color: "red" }}>𝘟</span>;
    }
  };
  return (
    <div>
      <form>
        <h1>Sign UP</h1>
        <input></input>
        <h2>User Name</h2>
        <input
          id="userName"
          onChange={debounce(handleUserNameChange, 250)}
        ></input>
        {formData.userName && isOk(available)}
        <h2>Email</h2>
        <input id="email" onChange={handleFormDataChange}></input>
        <h2>Password</h2>
        <input
          type="password"
          id="password"
          onChange={handleFormDataChange}
        ></input>
        <h2>Confirm Password</h2>
        <input
          type="password"
          id="confirmPass"
          onChange={checkPassMatch}
        ></input>
        {formData.password && isOk(confirmPass)}
        <br />
        <button disabled={!confirmPass}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
