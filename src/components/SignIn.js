import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendSignin } from "../redux/actions";

function SignIn({ handleClose }) {
  const [formData, setFormData] = React.useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleFormDataChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendSignin({ ...formData }));
  };
  React.useEffect(() => {
    if (user?.userName) {
      navigate("/");
      handleClose();
    }
  }, [user]);
  return (
    <div className="signin-container">
      <form>
        <h1>Sign In</h1>
        <h2>User Name</h2>
        <input
          type="text"
          id="userName"
          onChange={handleFormDataChange}
        ></input>
        <h2>Password</h2>
        <input
          type="password"
          id="password"
          onChange={handleFormDataChange}
        ></input>
        <br />
        <button onClick={handleSubmit}>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
