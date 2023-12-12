import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow";

const Login = () => {
  return (
    <>
      <Wrapper>
        <form className="form">
          <Logo></Logo>
          <h4>Login</h4>
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
          <button type="submit" className="btn btn-block">
            Submit
          </button>

          <button type="button" className="btn btn-block">
            Explore the Page
          </button>
          <p>
            Not a Member yet?
            <Link to="/register" className="member-btn"></Link>
          </p>
        </form>
      </Wrapper>
    </>
  );
};

export default Login;
