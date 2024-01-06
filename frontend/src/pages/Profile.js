import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
  const [user, setUser] = useState(null);

  const { member } = useAuthContext();
  const { _id } = useParams();

  const token = member ? member.token : null;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!token) {
          throw Error("Token not available");
        }

        const tokenData = JSON.parse(atob(token.split(".")[1]));

        if (!tokenData || !tokenData._id) {
          throw Error("User data not available in the token");
        }

        const response = await fetch(`/api/members/${tokenData._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw Error("Failed to fetch user data");
        }

        const json = await response.json();
        setUser(json);
      } catch (error) {
        console.error("Error fetching user data", error.message);
      }
    };

    if (member) {
      fetchUsers();
    }
  }, [member, _id, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the user data
  };

  return (
    <Card className="profile">
      <Card.Body>
        <h1 className="mb-4">User Profile</h1>
        <Form onSubmit={handleSubmit} className="profileForm">
          {user ? (
            <>
              <Form.Group controlId="firstName" className="input">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  disabled
                />
              </Form.Group>

              <Form.Group controlId="lastName" className="input">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  disabled
                />
              </Form.Group>

              <Form.Group controlId="email" className="input">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  disabled
                />
              </Form.Group>

              <Form.Group controlId="universityId" className="input">
                <Form.Label>University ID</Form.Label>
                <Form.Control
                  type="text"
                  name="universityId"
                  value={user.universityID}
                  onChange={handleChange}
                  disabled
                />
              </Form.Group>
            </>
          ) : (
            <p>Loading...</p>
          )}
          {/* <Button variant="primary" type="submit" className="input">
            Update Profile
          </Button> */}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Profile;
