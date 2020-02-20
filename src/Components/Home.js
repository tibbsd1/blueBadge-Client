import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const Home = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3005/login", {
        method: 'POST',
        body: JSON.stringify({ user: { username: username, passwordhash: password} }),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    }).then((res) => res.json())
    .then(user => {
        props.updateToken(user.sessionToken)
    
    })
  };
  return (
    <div className="home">
      <div className="homeLoginArea">
        <h1 className="login-title">Login</h1>
        <Form onSubmit={handleSubmit}>
          {/* Email field */}
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={e => {
                setUsername(e.target.value);
                console.log(username);
              }}
              value={username}
              type="email"
              name="email"
              id="email_field"
              placeholder="email"
              size="lg"
            />
          </FormGroup>
          {/* Password field */}
          <FormGroup>
            <Label for="existing_password">Password</Label>
            <Input
              onChange={e => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              minLength="5"
              name="password"
              id="password_field"
              placeholder="password"
              size="lg"
            ></Input>
          </FormGroup>

          <Button
            id="signin_btn"
            color="warning"
            type="submit"
            // onClick={handleSubmit}
            size="lg"
          >
            <h4>Sign In</h4>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Home;
