import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../styles/shared/common-section.css'

const CommonSection = ({ title }) => {
  return (
    <section className='common-section'>
      <Container>
        <Row>
          <Col lg='12'>
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CommonSection