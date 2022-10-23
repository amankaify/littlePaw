import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BrandIcon } from "../assets/littlepaw_brown.svg";
import { ReactComponent as BackIcon } from "../assets/back.svg";
import { ReactComponent as CatLogo } from "../assets/welcomedog.svg";
import { useForm } from "react-hook-form";
import { Form, Button } from "semantic-ui-react";

import "./Login.css";

const UserLogin = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="createCredentials">
      <BackIcon className="backIcon" onClick={() => navigate("/")}/>
      <BrandIcon className="brandLogoTwo" />
        <div className="labelHeading">Login into your account.</div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <input
              placeholder="User ID "
              type="email"
              className="inputField"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </Form.Field>
          <Form.Field>
            <input
              placeholder="Password "
              type="password"
              className="inputField"
              {...register("password", {
                required: true,
                maxLength: 15
              })}
            />
          </Form.Field>
          <Button type="submit" className="submitButton">
            LOGIN
          </Button>
        </Form>
        <CatLogo className="dogcatLogo" />
      </div>
    </>
  );
};

export default UserLogin;
