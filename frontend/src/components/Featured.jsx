import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import FeaturedTourList from './FeaturedTourList'

const Featured = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <Subtitle subtitle={"Explore"} />
                    <h2 className='featured-tour-title'>Our featured tours</h2>
                </Col>
                <FeaturedTourList />
            </Row>
        </Container>
    </section>
  )
}

export default Featured