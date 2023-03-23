import React from 'react'
import '../styles/shared/news-letter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/shared/male-tourist.png'

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='newsletter-content'>
                            <h2>Subscribe now to get useful traveling information</h2>
                            <div className='newsletter-input'>
                                <input type='email' placeholder='Enter your email' />
                                <button className='btn newsletter-btn'>Subscribe</button>
                            </div>
                            <p>By subscribing to Travel World, you can enjoy benefits in the form of special offers, discounts, access to exclusive travel packages, and the best priority services. Apart from that, you will also get access to the latest information about popular tourist destinations and unforgettable travel experiences.
                            </p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='newsletter-img'>
                            <img src={maleTourist} alt=''/>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Newsletter