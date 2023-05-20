import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import experienceImg from '../assets/images/pages/experience.png'

const Experience = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='experience-content'>
                        <Subtitle subtitle={'Experience'} />
                        <h2>
                            With our all experience <br />we will serve you
                        </h2>
                        <p>
                        Indulge in an immersive travel experience with us, where we curate every detail to offer you a seamless and unforgettable journey around the world, allowing you to explore and discover new cultures, cuisines, and landscapes like never before.
                        </p>
                    </div>
                    <div className='counter-wrapper d-flex align-items-center gap-5'>
                        <div className='counter-box'>
                            <span>12k+</span>
                            <h6>Successful Trip</h6>
                        </div>
                        <div className='counter-box'>
                            <span>2k+</span>
                            <h6>Regular client</h6>
                        </div>
                        <div className='counter-box'>
                            <span>15</span>
                            <h6>Years experience</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='experience-img'>
                        <img src={experienceImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    
  )
}

export default Experience