import { useState, useCallback } from 'react';

export const useSelectedCountry = ({ name, woeid }) => {
  const [selectedCountry, setSelectedCountry] = useState({ name, woeid });

  const setSelected = useCallback(country => {
    setSelectedCountry(country);
  }, []);

  return [selectedCountry, setSelected];
};

export default useSelectedCountry;
