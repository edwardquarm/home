import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Publication = ({ heading}) => {
  return (
    <Jumbotron fluid id="publications" className="bg-transparent min-vh-100 m-0 d-flex align-items-center flex-wrap">
    <Container className="">
        <h2 className="display-4 text-light pb-5 text-center">{heading}</h2>
        <Row>

    <Col md={6}>
      <Card className="card p-2">
        <Card.Body>
        <Card.Title as="h5">Scalable Security-Constrained Unit Commitment Under Uncertainty via Cone Programming Relaxation</Card.Title>
        <Card.Title as="h6">IEEE Transactions on Power Systems ( Volume: 36, Issue: 5, Sept. 2021)</Card.Title>
        {/* <hr /> */}
        <Card.Text>This paper is concerned with the problem of Security-Constrained Unit Commitment (SCUC) which is a long-standing challenge in power system engineering faced by system operators and utility companies on a daily basis. We consider a...</Card.Text>
        <center>
          <a href="https://ieeexplore.ieee.org/document/9363584" role="button" className="btn publicationsbutton">
        <i className="fas fa-rocket" /> Read More
      </a>
      </center>
      <br/>
        </Card.Body>
      </Card>
    </Col>

    <Col md={6}>
      <Card className="card p-2">
        <Card.Body>
        <Card.Title as="h5">Penalized Parabolic Relaxation for Optimal Power Flow Problem</Card.Title>
        <Card.Title as="h6">2018 IEEE Conference on Decision and Control (CDC)</Card.Title>
        {/* <hr /> */}
        <Card.Text>This paper is concerned with optimal power flow (OPF), which is the problem of optimizing the transmission of electricity in power systems. Our main contributions are as follows: (i) we propose a novel parabolic relaxation, which transforms non-convex OPF problems...</Card.Text>
        <center>
          <a href="https://ieeexplore.ieee.org/document/8619374" role="button" className="btn publicationsbutton">
        <i className="fas fa-rocket" /> Read More
      </a>
      </center>
      <br/>
        </Card.Body>
      </Card>
    </Col>
        </Row>
        {/* </center> */}
        </Container>
    </Jumbotron>
  );
};


export default Publication;