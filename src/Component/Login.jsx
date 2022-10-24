import { useState } from "react";
import { ReactComponent as BrandIcon } from "../assets/littlepaw_brown.svg";
import { ReactComponent as BackIcon } from "../assets/back.svg";
import { ReactComponent as DogCat } from "../assets/dog_cat.svg";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Form, Button } from "semantic-ui-react";
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

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="createCredentials">
      <BackIcon className="backIcon" onClick={() => navigate("/")} />
      <BrandIcon className="brandLogoTwo" />
      <div className="labelHeading">Create new account.</div>
      <p>
        Already Have an account.
        <text onClick={() => navigate("/userlogin")}>LOGIN</text>
      </p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <input
            placeholder="First Name"
            type="text"
            name="firstname"
            className="inputField"
            {...register("name", {
              required: true,
            })}
          />
        </Form.Field>
        <Form.Field>
          <input
            className="inputField"
            type="text"
            name="lastname"
            placeholder="Last Name"
            {...register("lastname", {
              required: true,
            })}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="Email Address"
            type="email"
            className="inputField"
            {...register("email", {
              required: true,
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            })}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="Password "
            type="password"
            name="password"
            className="inputField"
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder="Mobile Number "
            type="phone"
            name="mobile"
            className="inputField"
          />
        </Form.Field>

        <button type="submit" className="submitButton">
          SUBMIT
        </button>
      </Form>
      <DogCat className="dogcatLogo" />
    </div>
  );
}

export default Login;
