import React from 'react'
import './ImageGenerator.css'
import image from '../assests/image.jpg'
const ImageGenerator = () => {

    
    return (
        <div className='ai-image-generator'>
            <div className='header'>Ai Image Generator</div>
            <div className='img-loading'>
                <div className='image'>
                    <img height={'310px'} width={'310px'} src={image} alt='' />
                </div>
            </div>
            <div className="search-box">
                <input type='text' className='search-input' placeholder='Describe What You Want to See'></input>
                <div className="generate-btn">Generate</div>
            </div>
        </div>
    )
}

export default ImageGenerator
