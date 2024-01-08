import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "admin@email.com" && password === "Admin123!") {
      window.location = "https://www.google.com/";
    }

    await login(email, password);
  };

  return (
    <Form className="login signup" onSubmit={handleSubmit}>
      <Form.Text className="logintxt">LOGIN</Form.Text>
      <Form.Group className="mb-3 email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Your Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isLoading}>
        Login
      </Button>
      {error && <div className="alert alert-danger error">{error}</div>}
      <Form.Text className="sm-text">
        I don't have an account <Link to={"/register "}>Register</Link>
      </Form.Text>
    </Form>
  );
};

export default Login;
