import React, { useRef, useState, useContext, useCallback, useEffect } from 'react'
import '../styles/pages/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/components/avatar.jpg'
import Booking from '../components/Booking'
import Newsletter from '../shared/Newsletter'
import useFetch from '../hooks/useFetch'
import { urlApi } from '../utils/config'
import { AuthContext } from '../context/AuthContext'
import axios from "axios"

const TourDetail = () => {

  const { id } = useParams()
  const reviewMsgRef = useRef(' ')
  const [tourRating, setTourRating] = useState(null)
  const [data, setData] = useState(null)
  const { user } = useContext(AuthContext)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const fetchData = () => {
    setLoading(true)
    axios
      .get(`${urlApi}/tour/${id}`)
      .then(function (response) {
        setLoading(false)
        setData(response.data.data)
        console.log(response.data.data);
      })
      .catch(function (err) {
        setError(true)
        alert(err.message);
      });
  }; 
  fetchData()
  const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = data

  const { totalRating, avgRating } = calculateAvgRating(reviews)

  const options = { day: "numeric", month: "long", year: "numeric" }

  const submitHandler = async (e) => {
    e.preventDefault()

    const reviewText = reviewMsgRef.current.value

    try {
      if (!user) {
        alert('Please login to write a review')
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating
      }

      const res = await fetch(`${urlApi}/review/${id}`, {

        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      })
      const result = await res.json()
      console.log(result)
      if (!res.ok) {
        return alert(result.message)
      }
    } catch (error) {
      alert(error.message)
    }
  }

 
  return (
    <>
      <section>
        <Container>
          {
            loading && <h4 className='text-center pt-5'>Loading ......</h4>
          }
          {
            error && <h4 className='text-center pt-5'>{error}</h4>
          }
          {!loading && !error && (
            <Row>
              <Col lg='8'>
                <div className='tou-content'>
                  <img src={photo} alt='' />
                  <div className='tour-info'>
                    <h2>{title}</h2>
                    <div className='d-flex align-items-center gap-5'>
                      <span className='tour-rating d-flex align-items-center gap-1'>
                        <i className='ri-star-fill' style={{ color: 'var(--secondary-color)' }}></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          'Not rated'
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>
                      <span>
                        <i className='ri-map-pin-fill'></i>
                        {address}
                      </span>
                    </div>
                    <div className='tour-extra-details'>
                      <span>
                        <i className='ri-map-pin-2-line'></i>
                        {city}
                      </span>
                      <span>
                        <i className='ri-money-dollar-circle-line'></i>
                        ${price}/ per person
                      </span>
                      <span>
                        <i className='ri-map-pin-time-line'></i>
                        {distance}km
                      </span>
                      <span>
                        <i className='ri-group-line'></i>
                        {maxGroupSize} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>
                  <div className='tour-reviews mt-4'>
                    <h4>Reviews({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className='d-flex align-item-center gap-3 mb-4 rating-group'>
                        <span onClick={() => setTourRating(1)}>
                          1<i className='ri-star-s-fill'></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2<i className='ri-star-s-fill'></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3<i className='ri-star-s-fill'></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4<i className='ri-star-s-fill'></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5<i className='ri-star-s-fill'></i>
                        </span>
                      </div>
                      <div className='review-input'>
                        <input type='text' ref={reviewMsgRef} placeholder='share your thoughts' required />
                        <button className='btn primary-btn text-white' type='submit'>
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className='user-reviews'>
                      {reviews?.map((review, index) => (
                        <div className='review-item' key={index}>
                          <img src={avatar} alt='' />
                          <div className='w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>{review.username}</h5>
                                <p>{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                              </div>
                              <span className='d-flex align-items-center'>
                                {review.rating}
                                <i className='ri-star-s-fill'></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col lg='4'>
                <Booking tour={data} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default TourDetail
