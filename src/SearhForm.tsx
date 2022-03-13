import { useState } from 'react';
import { IonSubmit } from './type';

export const SearchForm = ({ onSubmitParent }: IonSubmit) => {

  const [text, setText] = useState('');

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitParent(text);
    setText('');
  }

  return (
    <div className="main">
      <form onSubmit={submitForm}>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}