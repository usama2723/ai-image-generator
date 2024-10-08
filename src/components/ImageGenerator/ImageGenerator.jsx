import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import image from '../assests/image.jpg'
const ImageGenerator = () => {

    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null)

    const [loading, setLoading] = useState(false);

    const imageGenerator = async () => {
        if (inputRef.current.value === '') {
            return 0;
        }
        setLoading(true);
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Authorization:
                        "Bearer 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",
                    "User-agent": "Chrome",
                },
                body: JSON.stringify({
                    prompt: `${inputRef.current.value}`,
                    n: 1,
                    size: "512x512",
                }),
            }
        );
        let data = await response.json();
        console.log(data);
        let data_array = data.data;
        setImage_url(data_array[0].url)
        setLoading(false);
        
    }
    return (
        <div className='ai-image-generator'>
            <div className='header'>Ai Image Generator</div>
            <div className='img-loading'>
                <div className='image'>
                    <img height={'310px'} width={'310px'} src={image_url === '/' ? image : image_url} alt='' />
                </div>
                <div className="loading">
                    <div className={loading ? "loading-bar-full" : "loading-bar"}>
                    </div>
                    <div className={loading ? "loading-text" : "display-none"}>Loading....</div>
                </div>
            </div>
            <div className="search-box">
                <input type='text' ref={inputRef} className='search-input' placeholder='Describe What You Want to See'></input>
                <div className="generate-btn" onClick={() => { imageGenerator() }}>Generate</div>
            </div>
        </div>
    )
}

export default ImageGenerator
