import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { console } from "./redux/actions";
import { tryPost } from "./redux/actions";
import { sendSignup } from "./redux/actions";
import { checkUserAvailability } from "./redux/actions";
import { clearErrorMessage } from "./redux/actions";
function Try() {
  //DEBOUNCE DECLARE
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
  //TRY FORM SAVE
  let canYouSeeMe = useSelector((state) => state.canYouSeeMe);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
  });
  //SIGNUP FORM SAVE
  const [signupData, setSignupData] = React.useState({
    userName: "",
    email: "",
  });
  //NUTRITION FORM SAVE
  const [nutritionData, setNutritionData] = React.useState({});
  //GETTING THE STATE
  let state = useSelector((state) => state);
  window.console.log(state);
  //DISPATCH & NAVIGATE
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //TRY INPUT FUNCTIONS
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(console({ ...formData }));
    dispatch(tryPost({ ...formData }));
    navigate("/");
  };
  //SIGNUP INPUT FUNCTIONS
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
  //NUTRITION INPUT FUNCTIONS
  const handleNutritionChange = (event) => {
    setNutritionData({
      ...nutritionData,
      [event.target.name]: event.target.value,
    });
    window.console.log(nutritionData);
  };
  //CREATE A FUNCTION FOR DISPATCH TO CLEAR WARNING IN USEEFFECT
  const initClear = React.useCallback(() => {
    dispatch(clearErrorMessage());
  }, [dispatch]);
  //USEEFFECT TO CLEAR ERROR
  React.useEffect(() => {
    const timer = setTimeout(() => {
      initClear();
    }, 2000);
    return () => clearTimeout(timer);
  }, [state.error, initClear]);
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
        <br />
        <button type="submit" onClick={handleSubmitSignup}>
          Submit Signup
        </button>
      </form>
      <h1>Sending Nutrition data</h1>
      <div className="flex-row">
        <form>
          <p>I ate</p>
          <input
            type="text"
            name="food-name"
            id="food-name"
            onChange={handleNutritionChange}
          ></input>
          <p>which was</p>
          <input
            type="text"
            name="calories"
            id="calories"
            onChange={handleNutritionChange}
          ></input>
          <p>calories</p>
          <input
            type="checkbox"
            id="save"
            name="save"
            onChange={handleNutritionChange}
          ></input>
          <p>save</p>
          <button type="submit">Submit Nutrition</button>
        </form>
      </div>
    </div>
  );
}
export default Try;
