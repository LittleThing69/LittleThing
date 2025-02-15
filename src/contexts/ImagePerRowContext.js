import { createContext, useState } from 'react';

export const ImagesPerRowContext = createContext({
  imagesPerRow: 4,
});

export const ImagesPerRowProvider = ({ children }) => {
  const [imagesPerRow, setImagesPerRow] = useState(4);

  return (
    <ImagesPerRowContext.Provider value={{ imagesPerRow, setImagesPerRow }}>
      {children}
    </ImagesPerRowContext.Provider>
  );
};