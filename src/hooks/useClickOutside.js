import { useState, useEffect, useRef } from 'react';

const useClickOutside = () => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const ref = useRef(null);

  //   when user presses esc key
  const handleEscapeEvent = (event) => {
    if (event.key === 'Escape') {
      setClickedOutside(true);
    }
  };

  //   when user clicks outside of the element
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setClickedOutside(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeEvent, true);
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('keydown', handleEscapeEvent, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, clickedOutside, setClickedOutside };
};

export default useClickOutside;
