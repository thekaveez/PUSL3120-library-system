import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Signup = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [uniID, setuniID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(firstName, lastName, email, uniID, password);
  };

  return (
    <Form className="signup" onSubmit={handleSubmit}>
      <Form.Text className="register">REGISTER</Form.Text>
      <Form.Group className="mb-3 firstname" controlId="formBasicFirstName">
        <Form.Label>Fist Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your First Name"
          onChange={(e) => setfirstName(e.target.value)}
          value={firstName}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Your Last Name"
          onChange={(e) => setlastName(e.target.value)}
          value={lastName}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Your Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUniversityID">
        <Form.Label>University ID</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Your University ID Number"
          onChange={(e) => setuniID(e.target.value)}
          value={uniID}
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
      <Button variant="primary" type="submit">
        Register
      </Button>
      <Form.Text className="sm-text">
        I already have an account <Link to={"/login "}>Login</Link>
      </Form.Text>
    </Form>
  );
};

export default Signup;
