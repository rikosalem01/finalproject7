import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import world from '../assets/images/pages/world.png'
import heroVideo from '../assets/images/pages/hero-video.mp4'
import experienceImg from '../assets/images/pages/experience.png'
import '../styles/pages/home.css'
import SearchBar from '../shared/SearchBar'
import FeaturedTourList from '../components/FeaturedTourList'
import MasonryImagesGallery from '../components/MasonryImagesGallery'
import ServiceList from '../services/ServiceList'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
  <>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='hero__content'>
                        <div className='hero__subtitle d-flex align-items-center'>
                            <Subtitle subtitle={'Know Before You Go'} />
                            <img src={world} alt="" />
                        </div>
                        <h1>Traveling opens the door to creating{' '}
                            <span className='highlight'>memories</span>
                        </h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum quos accusamus minus voluptatum reiciendis totam veritatis in! Et voluptates veritatis hic suscipit, facilis aspernatur aliquam cumque fugiat iure neque.
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box mt-4'>
                        <video src={heroVideo} controls loop></video>
                    </div>
                </Col>
                <SearchBar />
            </Row>
        </Container>
    </section>

    {/* heri swction start */}

    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className='services__subtitle'>What we serve</h5>
                    <h2 className='services__title'>we offer our best services</h2>
                </Col>
                <ServiceList />
            </Row>
        </Container>
    </section>
    
    {/* featured tour section start */}

    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <Subtitle subtitle={"Explore"} />
                    <h2 className='featured__tour-title'>Our featured tours</h2>
                </Col>
                <FeaturedTourList />
            </Row>
        </Container>
    </section>

    {/* featured tour section end */}

    {/* experience section start */}

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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut odit dignissimos illo quae tempore optio quaerat, enim aliquam magni sapiente vero cumque laudantium odio cum corporis possimus sunt perferendis.
                        </p>
                    </div>
                    <div className='counter__wrapper d-flex align-items-center gap-5'>
                        <div className='counter__box'>
                            <span>12k+</span>
                            <h6>Successful Trip</h6>
                        </div>
                        <div className='counter__box'>
                            <span>2k+</span>
                            <h6>Regular client</h6>
                        </div>
                        <div className='counter__box'>
                            <span>15</span>
                            <h6>Years experience</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='experience__img'>
                        <img src={experienceImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    
    {/* experience section end */}

    {/* gallery section start */}

    <Container>
        <Row>
            <Col lg="12">
                <Subtitle subtitle={"Galery"}/>
                <h2 className='galery__title'>
                    Visit our costumer tour gallery
                </h2>
            </Col>
            <Col lg='12'>
                <MasonryImagesGallery/>
            </Col>
        </Row>
    </Container>

    {/* gallery section end */}

    {/* testimonial section start */}

    <section>
        <Container>
            <Row>
                <Col>
                    <Subtitle subtitle={'Fans Love'}/>
                    <h2 className='testimonial__title'>What our fans say about us</h2>
                </Col>
                <Col lg='12'>
                    <Testimonial/>
                </Col>
            </Row>
        </Container>
    </section>

  </>
  )
}

export default Home
