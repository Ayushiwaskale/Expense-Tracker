import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/RegisterPage.css";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Form submission handler
  const submitHandler = async (values) => {
    try {
      setLoading(true);

      const response = await axios.post(`http://localhost:3001/api/v1/users/register`, {
        email: values.email,
        password: values.password,
        name: values.name,
      });
      message.success("Registration Successful");
      setLoading(false);
      navigate("/login");  // Redirect to login after successful registration
      console.log("posted");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        message.error(error.response.data.message || "Something went wrong, please try again later.");
      } else {
        message.error("Network error or server unreachable.");
      }
      console.error("Error:", error.response ? error.response.data : error);
    }
  };

  // Redirect if user is already logged in
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");  // Redirect to home if the user is already logged in
    }
  }, [navigate]);

  return (
    <div
      className="register-page"
      style={{
        background: "linear-gradient(45deg, #D6E6F2, #C8ABE6, #FFFFFF)", // Linear gradient
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading && <Spinner />}
      <div className="register-box">
        <Form className="register-form" layout="vertical" onFinish={submitHandler}>
          <h2>Register Form</h2>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login">Already Registered? Login here!</Link>
            <button className="btn" type="submit">
              Register
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
