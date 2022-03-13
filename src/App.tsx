import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './Header';

function App() {

  interface Iimages {
    alt_description: string;
    urls: {
      regular: string;
    }
    images: string[]
  }

  const [images, setImages] = useState<Iimages[]>([]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('tech');

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setImages(data.results)
      })
  }, [query])

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setQuery(text);
    setText('');
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <form onSubmit={onSubmit}>
          <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="container">
        {
          images.map((image, index) => (
            <div key={index} className="card">
              <img src={image.urls.regular} className="card-img" alt="" />
              <div className="card-content">
                <h1 className="card-title">{image.alt_description}</h1>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
