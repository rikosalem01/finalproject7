import React from 'react'
import ServicesCard from './ServicesCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/services/weather.png'
import guideImg from '../assets/images/services/guide.png'
import customizationImg from '../assets/images/services/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: "Experience the best travel services with us, rain or shine, we guarantee to provide you with the most reliable and up-to-date weather information to ensure a seamless journey around the world."
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: "Embark on the ultimate journey around the world with our best-in-class tour guides who possess extensive knowledge and expertise, ensuring you an unforgettable travel experience."
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: "Tailor your dream travel itinerary with our customization services, where we prioritize your unique preferences and interests to craft a personalized travel experience that exceeds your expectations."
    },
]

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServicesCard item={item}/>
        </Col>
      ))}  
    </>
  )
}

export default ServiceList
