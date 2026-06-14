// src/LazyImage.jsx
import React from 'react';
import { useLazyImage } from './useLazyImage';
import "./styles.css"

export const LazyImage = ({ src, alt, placeholder, className, ...props }) => {
  const [ref, isIntersecting] = useLazyImage();

  return (
    <div ref={ref} className={`lazy-wrapper ${className || ''}`}>
      {isIntersecting ? (
        <img src={src} alt={alt} {...props} />
      ) : (
        <img src={placeholder} alt="Loading..." className="placeholder" />
      )}
    </div>
  );
};