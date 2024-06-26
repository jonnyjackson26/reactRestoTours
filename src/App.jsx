import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const call = () => {
    window.location.href = 'tel:4407961642';
  };
  const learnMore = () => {
    window.location.href = '/another-page';
  };

  return (
    <>
      <Button text="Call" onClick={call} />
      <Button text="Learn More About Tours" onClick={learnMore} />
    </>
  );
}

export default App;
