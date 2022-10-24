import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BrandIcon } from "../assets/littlepaw_brown.svg";
import { ReactComponent as BackIcon } from "../assets/back.svg";
import { ReactComponent as CatLogo } from "../assets/welcomedog.svg";
import { useForm } from "react-hook-form";
import { Form, Button } from "semantic-ui-react";
import "./Login.css";
import { useState } from "react";

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
        <BackIcon className="backIcon" onClick={() => navigate("/")} />
        <BrandIcon className="brandLogoTwo" />
        <div className="labelHeading">Login into your account.</div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <div className="inputsRow">
              <input
                placeholder="User ID "
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
            </div>
          </Form.Field>
          <Form.Field>
            <div className="inputsRow">
              <input
                placeholder="Password "
                type="password"
                className="inputField"
                autoComplete="off"
                {...register("password", {
                  required: true,
                })}
              />
            </div>
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
