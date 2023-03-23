import React, { useRef } from "react";
import '../styles/shared/search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'

const SearchBar = () => {

    const locationRef = useRef('')
    const dateRef = useRef(0)
    const maxGroupSizeRef = useRef(0)

    const searchHandler = () => {
        const location = locationRef.current.value
        const date = dateRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location === "" || date === "" || maxGroupSize === ""){
            return alert('All fields are required!')
        }
    }
    return (
        <Col lg='12'>
            <div className='search-bar'>
                <Form className='d-flex align-items-center gap-4'>
                    <FormGroup className='d-flex gap-3 form-group form-group-fast'>
                        <span>
                            <i className='ri-map-pin-line'></i>
                        </span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder='Where are you going?' ref={locationRef}/>
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form-group form-group-fast'>
                        <span>
                            <i className="ri-calendar-line"></i>
                        </span>
                        <div>
                            <h6>Date</h6>
                            <input className="date" type="date" ref={dateRef}/>
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form-group form-group-last'>
                        <span>
                            <i className="ri-group-line"></i>
                        </span>
                        <div>
                            <h6>Max People</h6>
                            <input type="number" placeholder='0' ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <span className='search-icon' type="submit" onClick={searchHandler}>
                        <i class="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    )
}

export default SearchBar