import React, { useState } from "react";
import { Button, Form, Jumbotron } from "react-bootstrap";
import "./Login.scss";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="Background" />
        <Form>
          <Jumbotron>
            <h3>Welcome back! </h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                autoFocus
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="Keep me logged in" /> */}
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Keep me logged in"
              />
            </Form.Group>
            <Form.Control
              size="sm"
              plaintext
              readOnly
              defaultValue="First time? Click here"
            />
            <Button
              variant="primary"
              type="submit"
              disabled={!validateForm()}
              block
            >
              Login
            </Button>
          </Jumbotron>
        </Form>
      </form>
    </div>
  );
}

export default Login;
