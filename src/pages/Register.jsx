import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow";

const Register = () => {
  return (
    <>
      <Wrapper>
        <form className="form">
          <Logo />
          <h4>Register</h4>
          <FormRow
            name="name"
            type="text"
            required
            defaultValue="john"
          ></FormRow>
          <FormRow
            name="lastname"
            type="text"
            required
            defaultValue="smith"
            labelText="Last Name"
          ></FormRow>
          <FormRow
            name="email"
            type="email"
            required
            defaultValue="john@gmail.com"
            labelText="Email"
          ></FormRow>
          <FormRow
            name="password"
            type="password"
            required
            defaultValue="1234678"
            labelText="Password"
          ></FormRow>
          <FormRow
            name="location"
            type="text"
            required
            defaultValue="India"
            labelText="Location"
          ></FormRow>

          <button type="submit" className="btn btn-block">
            Submit
          </button>
          <p>
            Already a Member?
            <Link to="/login" className="member-btn">
              Login
            </Link>
          </p>
        </form>
      </Wrapper>
    </>
  );
};

export default Register;
