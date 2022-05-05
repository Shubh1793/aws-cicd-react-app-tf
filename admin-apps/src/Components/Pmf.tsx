import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { GoPrimitiveDot } from "react-icons/go";

export default function Pmf() {
  return (
    <Container fluid>
      <Row style={{ marginTop: "2rem" }}>
        <Col xs={2}></Col>
        <Col xl={5} xs={8} style={{ marginBottom: "2rem" }}>
          <Card bsPrefix="border">
            <Card.Body>
              <span style={{ color: "#161616", fontWeight: "700" }}>PMF</span>
              <Row>
                <Col md={4}>
                  <img alt="PieChart" className="div" />
                </Col>
                <Col md={8}>
                  <div className="div">
                    How would you feel if Naya stopped developing this platform?
                  </div>
                  <div className="div">
                    <GoPrimitiveDot
                      style={{ color: "#4F00C1", margin: "0.5rem" }}
                    />
                    Very disappointed 72% (23)
                  </div>
                  <div className="div">
                    <GoPrimitiveDot
                      style={{
                        color: "rgb(79, 0, 193, 0.75)",
                        margin: "0.5rem",
                      }}
                    />
                    Mildly disappointed 19% (6)
                  </div>
                  <div className="div">
                    <GoPrimitiveDot
                      style={{
                        color: "rgb(79, 0, 193, 0.5)",
                        margin: "0.5rem",
                      }}
                    />
                    Not disappointed 9% (3)
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} xs={8}>
          <Row>
            <Col xs={3} xl={0}></Col>
            <Col xs={9} xl={12}>
              <Card style={{ marginBottom: "0.35rem" }} bsPrefix="border">
                <Card.Body>
                  <span style={{ color: "#161616", fontWeight: "700" }}>
                    Monthly Active Users
                  </span>
                  <Row>
                    <Col md={8} style={{ marginTop: "1.5rem" }}>
                      +100% vs last month
                    </Col>
                    <Col md={4}>
                      <h1 style={{ color: "#4F00C1" }}>150</h1>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Card bsPrefix="default">
                <Card.Body></Card.Body>
              </Card>

              <Card bsPrefix="border">
                <Card.Body>
                  <span style={{ color: "#161616", fontWeight: "700" }}>
                    Total Users
                  </span>

                  <Row>
                    <Col
                      md={8}
                      style={{
                        marginTop: "1.5rem",
                      }}
                    >
                      <span>+10% users</span>
                    </Col>
                    <Col md={4}>
                      <h1 style={{ color: "#4F00C1" }}>800</h1>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
}
