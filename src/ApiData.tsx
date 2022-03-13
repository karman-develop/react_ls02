import { useState, useEffect } from 'react';
import { Iimages, IApiData } from './type';

export const ApiData = ({ query }: IApiData) => {

  const [images, setImages] = useState<Iimages[]>([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`)
      .then(response => response.json())
      .then(data => {
        setImages(data.results)
      })
  }, [query]);

  return (
    <div className="container">
      {
        images.map((image, index) => (
          <div key={index} className="card">
            <img src={image.urls.regular} className="card-img" alt={image.alt_description} />
            <div className="card-content">
              <h1 className="card-title">{image.alt_description}</h1>
            </div>
          </div>
        ))
      }
    </div>
  )
}
