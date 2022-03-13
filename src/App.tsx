import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './SiteHeader';
import { SearchForm } from './SearhForm';
import { ApiData } from './ApiData';

function App() {

  const [query, setQuery] = useState('tech');

  const onSubmit = (text: string) => {
    setQuery(text);
  }

  return (
    <div className="App">
      <Header />
      <SearchForm onSubmitParent={onSubmit} />
      <ApiData query={query} />
    </div>
  );
}

export default App;
