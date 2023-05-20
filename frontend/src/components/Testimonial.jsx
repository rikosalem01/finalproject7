import React from 'react'
import Slider from 'react-slick'
import ava01 from '../assets/images/components/ava-1.jpg'
import ava02 from '../assets/images/components/ava-2.jpg'
import ava03 from '../assets/images/components/ava-3.jpg'
import '../styles/components/testimonial.css'

const Testimonial = () => {

    const setting = {
        dots:true,
        infinite: true,
        autoplay: true,
        speed:1000,
        swipeToSlide: true,
        autoplaySpeed:2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                setting: {
                    slideToShow:2,
                    slideToScroll:1,
                    infinite:true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                setting: {
                    slideToShow:1,
                    slideToScroll:1,
                },
            },
        ]
    }
    return (
        <Slider {...setting}>
            <div className='testimonial py-4 px-3'>
                <p>Travelling with Travel World was a phenomenal experience! Their exceptional services and attention to detail made our journey around the world seamless and hassle-free. The tour guides were knowledgeable and personable, adding an extra layer of enjoyment to our trip. We highly recommend Travel World to anyone looking for a truly unforgettable travel experience.</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className='testimonial py-4 px-3'>
                <p>I had the pleasure of travelling with Travel World, and I must say, they exceeded my expectations! Their customisation services allowed me to tailor my trip to my liking, and their tour guides were knowledgeable and passionate about the places we visited. I highly recommend Travel World to anyone looking for a one-of-a-kind travel experience!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className='testimonial py-4 px-3'>
                <p>My experience with Travel World was simply amazing! Their attention to detail and exceptional customer service made our trip around the world smooth and hassle-free. I was impressed by their expertise in providing up-to-date weather information and making necessary adjustments to ensure our itinerary was not affected.</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className='testimonial py-4 px-3'>
                <p>I cannot say enough good things about Travel World! From start to finish, they provided exceptional services, from customising our itinerary to fit our preferences to providing the best tour guides in every location we visited. The accommodations were top-notch, and the experiences were truly unforgettable. Travel World truly went above and beyond to make our travel dreams a reality!</p>
                <div className='d-flex align-items-center gap-4 mt-3 border-2'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonial