import React from 'react'
import MasonryImagesGallery from './MasonryImagesGallery'
import { Container, Row, Col } from 'reactstrap'
import Subtitle from '../shared/Subtitle'

const Gallery = () => {
  return (
    <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Galery"} />
            <h2 className='galery-title'>
              Visit our costumer tour gallery
            </h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
  )
}

export default Gallery