import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import Testimonial from './Testimonial'

const Testi = () => {
  return (
    <section>
    <Container>
      <Row>
        <Col>
          <Subtitle subtitle={'Fans Love'} />
          <h2 className='testimonial-title'>What our fans say about us</h2>
        </Col>
        <Col lg='12'>
          <Testimonial />
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Testi