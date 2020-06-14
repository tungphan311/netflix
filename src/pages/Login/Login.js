import React, { useState } from "react";
import { Button, Form, Jumbotron } from "react-bootstrap";
import "./Login.scss";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <div className="form__overlay" />
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <div className="Background" />
          <Form>
            <Jumbotron>
              <h1>Welcome back! </h1>
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
              <Button type="submit" block>
                Login
              </Button>
              <Form.Group controlId="formBasicCheckbox" bsPrefix="helper">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Remember me"
                />

                <a className="forgotLink" href="/forgot-password">
                  Need help?
                </a>
              </Form.Group>

              <div className="register">
                First time?{" "}
                <span className="registerLink">
                  <a href="/register">Sign up now</a>
                </span>
              </div>
            </Jumbotron>
          </Form>
        </form>
      </div>
    </div>
  );
}

export default Login;
