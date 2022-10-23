import { useState } from "react";
import { ReactComponent as BrandIcon } from "../assets/littlepaw_brown.svg";
import { ReactComponent as BackIcon } from "../assets/back.svg";
import { ReactComponent as DogCat } from "../assets/dog_cat.svg";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
  };

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


const createAccount = (e) => {

  e.preventDefault();
  console.log('formValues', formValues);
}
  
  return (
    <div className="createCredentials">
      <BackIcon className="backIcon" onClick={() => navigate("/")}/>
      <BrandIcon className="brandLogoTwo" />
      <div className="labelHeading">Create new account.</div>
      <p >Already Have an account.<text onClick={() => navigate("/userlogin")}>LOGIN</text></p>
      <form onSubmit={createAccount}>
        <input
          placeholder="First Name"
          type="text"
          name="firstname"
          className="inputField"
          value={formValues.firstname}
          onChange={handleChange}
        />

        <input
          className="inputField"
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formValues.lastname}
          onChange={handleChange}
        />

        <input
          placeholder="Email "
          type="email"
          name="email"
          className="inputField"
          value={formValues.email}
          onChange={handleChange}
        />

        <input
          placeholder="Password "
          type="password"
          name="password"
          className="inputField"
          value={formValues.password}
          onChange={handleChange}
        />

        <input
          placeholder="Mobile Number "
          type="phone"
          name="mobile"
          className="inputField"
          value={formValues.mobile}
          onChange={handleChange}
        />

        <button type="submit" className="submitButton">
          SUBMIT
        </button>
      </form>
      <DogCat className="dogcatLogo" />
    </div>
  );
}

export default Login;
