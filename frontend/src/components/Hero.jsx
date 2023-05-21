import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import world from '../assets/images/pages/world.png'
import heroVideo from '../assets/images/pages/hero-video.mp4'
import SearchBar from '../shared/SearchBar'
import Subtitle from '../shared/Subtitle'

const Hero = () => {
  return (
    <section>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='hero-content'>
                    <div className='hero-subtitle d-flex align-items-center'>
                        <Subtitle subtitle={'Know Before You Go'} />
                        <img src={world} alt="" />
                    </div>
                    <h1>Traveling opens the door to creating{' '}
                        <span className='highlight'>memories</span>
                    </h1>
                    Staying in comfortable accommodation is one of the best ways to enjoy a trip, whether it's for a vacation or a business trip. At TravelWorld, you can easily find the right accommodation plus according to your budget.
                </div>
            </Col>
            <Col lg='2'>
                <div className='hero-img-box mt-4'>
                    <video src={heroVideo} controls loop autoPlay muted></video>
                </div>
            </Col>
            <SearchBar />
        </Row>
    </Container>
</section>
  )
}

export default Hero