import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import galleryImages from './GaleryImages'

const MasonryImagesGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 390: 4, 768: 3, 992: 4 }}>
            <Masonry gutter='1rem'>
                {
                    galleryImages.map((item, index) => (
                        <img
                            className='masonry-img'
                            src={item}
                            key={index}
                            alt=""
                            style={{ width: '100%', display: 'block', borderRadius: '10px' }} />
                    ))
                }
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default MasonryImagesGallery
