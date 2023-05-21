import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import ServiceList from '../services/ServiceList'

const Services = () => {
  return (
    <section>
    <Container>
        <Row>
            <Col lg='3'>
                <h5 className='services-subtitle'>What we serve</h5>
                <h2 className='services-title'>we offer our best services</h2>
            </Col>
            <ServiceList />
        </Row>
    </Container>
</section>
  )
}

export default Services