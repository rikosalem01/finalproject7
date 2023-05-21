import React from 'react'
import TourCard from '../shared/TourCard'
import { Col } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { urlApi} from '../utils/config'

const FeaturedTourList = () => {

  const { data: featuredTour, loading, error } = useFetch(`${urlApi}/tour/search/getFeaturedTours`)

  return (
    <>
    {loading && <h4>Loading ...</h4>}
    {error && <h4>{error}</h4>}
        {!loading && !error && featuredTour?.map(tour => (
            <Col lg="3" md="6" sm="6" className='mb-4' key={tour._id}>
                <TourCard tour={tour}/>
            </Col>
        ))}
    </>
  )
}

export default FeaturedTourList
