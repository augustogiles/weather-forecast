import { useState, useCallback } from 'react';

export const useSelectedCountry = ( { name, woeid } ) => {
  const [selectedCountry, setSelectedCountry] = useState({ name, woeid });

  const updateSelected = useCallback((country) => {
    setSelectedCountry(country);
  }, [])

  return [selectedCountry, updateSelected];
};

export default useSelectedCountry;