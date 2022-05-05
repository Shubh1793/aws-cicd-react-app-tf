import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function UserMetrics() {
  return (
    <Container fluid style={{ marginTop: "4rem" }}>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <h3 style={{ color: "#1B1B1B", fontWeight: "700" }}>User Metrics</h3>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
