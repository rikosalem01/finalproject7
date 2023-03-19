import React from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/pages/login.css";

import registerImg from "../assets/images/pages/register.png";
import userIcon from "../assets/images/pages/user.png";

const Register = (e) => {
  
  const handleChange = () => {};

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder="Email" required id="email" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="Password" placeholder="Password" required id="password" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="Password" placeholder="Password Confirmation" required id="password" onChange={handleChange} />
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="Submit">
                    Register
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
