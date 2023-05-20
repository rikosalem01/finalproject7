import React from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import loginImg from "../assets/images/pages/login.png";
import userIcon from "../assets/images/pages/user.png";


const Login = () => {
    const handleChange = (e) => {};

    const handleClick = (e) => {
      e.preventDefault();
    };
  
    return (
      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto">
              <div className="login-container d-flex justify-content-between">
                <div className="login-img">
                  <img src={loginImg} alt="" />
                </div>
  
                <div className="login-form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>Login</h2>
  
                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input type="Email" placeholder="Email" required id="email" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type="Password" placeholder="Password" required id="password" onChange={handleChange} />
                    </FormGroup>
                    <Button className="btn secondary-btn auth-btn" type="Submit">
                      Login
                    </Button>
                  </Form>
                  <p>
                    Don't have an account? <Link to="/register">Create</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };

export default Login