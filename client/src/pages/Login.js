import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/Loginpage.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:3001/api/v1/users/login", {
        email: values.email,
        password: values.password,
      });
      setLoading(false);
      message.success("Login successful");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Invalid credentials, please try again.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div
      className="login-page"
      style={{
        background: "linear-gradient(45deg, #D6E6F2, #C8ABE6, #FFFFFF)", // Linear gradient
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading && <Spinner />}
      <h1 className="header-title">Expense Tracker</h1>
      <div className="login-box">
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Login Form</h1>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/register">Not a user? Click here!</Link>
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
