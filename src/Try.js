import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { console } from "./redux/actions";
import { tryPost } from "./redux/actions";
import { sendSignup } from "./redux/actions";
import { checkUserAvailability } from "./redux/actions";
function Try() {
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
  let canYouSeeMe = useSelector((state) => state.canYouSeeMe);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
  });
  const [signupData, setSignupData] = React.useState({
    userName: "",
    email: "",
  });
  let state = useSelector((state) => state);
  window.console.log(state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(console({ ...formData }));
    dispatch(tryPost({ ...formData }));
    navigate("/");
  };
  const handleSignupChange = (event) => {
    window.console.log("doc", document.getElementById("userName").value);
    event.preventDefault();
    setSignupData({ ...signupData, [event.target.name]: event.target.value });

    debounce(
      dispatch(
        checkUserAvailability({
          userName: document.getElementById("userName").value,
        })
      ),
      1000
    );
  };
  const handleSubmitSignup = (event) => {
    event.preventDefault();
    dispatch(sendSignup(signupData));
  };
  return (
    <div>
      <h1>CAN BE SEEN : {canYouSeeMe}</h1>
      <form>
        <h2>First Name</h2>
        <input type="text" name="firstName" onChange={handleChange} />
        <h2>Last Name</h2>
        <input type="text" name="lastName" onChange={handleChange} />
        <h2>Email</h2>
        <input type="text" name="email" onChange={handleChange} />
        <h2>User Name</h2>
        <input type="text" name="user" onChange={handleChange} />
        <h2>Password</h2>
        <input type="text" name="password" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <h1>USER TEST</h1>
      <p>User Name : {state.userName}</p>
      <p>User Id: {state._id} </p>
      <p>ERROR: {state.error}</p>
      <form>
        <h2>userName</h2>
        <input
          type="text"
          name="userName"
          id="userName"
          onChange={debounce(handleSignupChange, 300)}
        />
        <p>is available: {state.available ? "True" : "False"}</p>
        <h2>Email</h2>
        <input type="email" name="email" onChange={handleSignupChange} />
        <button type="submit" onClick={handleSubmitSignup}>
          Submit Signup
        </button>
      </form>
    </div>
  );
}
export default Try;
