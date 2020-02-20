import React, { useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  Input,
  Label,
  Container,
  Row,
  Col
} from "reactstrap";
import "../App.css";

function Signup(props) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  
let handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3005/signup", {
        method: 'POST',
        body: JSON.stringify({ user: { username: username, passwordhash: password} }),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    }).then((res) => res.json())
    .then(user => {
        props.updateToken(user.sessionToken)
        props.toggle()
    })

    // fetch("http://localhost:3005/signup", {
    //   method: "POST",
    //   headers: new Headers ({"Content-Type": "applicaton/json"}),
    //   body: JSON.stringify({
    //     user: { username: username, passwordhash: password }
    //   })
    // }).then(res => res.json()).then(user => {
    //     props.updateToken(user.sessionToken);
    //   })
    // );
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label className="d-block text-center font-weight-bold" htmlFor="username">
            <h5>Username</h5>
          </Label>
          <Input
            size="lg"
            onChange={e => {
              setUsername(e.target.value);
              console.log(username);
            }}
            name="username"
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <Label className="d-block text-center font-weight-bold" htmlFor="password">
            <h5>Password</h5>
          </Label>
          <Input
            size="lg"
            onChange={e => {
              setPassword(e.target.value);
              console.log(password);
            }}
            type="password"
            name="password"
            value={password}
          />
        </FormGroup>
        <Row className="d-block text-center">
          <Button type="submit" color="warning" size="lg">
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
}
export default Signup;
