import { useState, useEffect, FC } from "react";

interface ILazyImage {
    src: string
    alt: string
    placeholder: string

}

// Optionally, add a loading spinner or animation
const LazyImage: FC<ILazyImage> = ({ src, alt, placeholder }) => {
    const [isInView, setIsInView] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const handleImageLoad = () => {
      setIsLoaded(true);
    };
  
    useEffect(() => {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              intersectionObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const imgElement = document.getElementById(`lazy-image-${src}`);
      if (imgElement)
        intersectionObserver.observe(imgElement);
  
      return () => {
        intersectionObserver.disconnect();
      };
    }, [src]);
  
    return (
      <div className={`lazy-image-container`}>
        <img
          id={`lazy-image-${src}`}
          src={isInView ? src : placeholder}
          alt={alt}
          onLoad={handleImageLoad}
          className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
        />
        {!isLoaded && <div className="loading-spinner">Loading...</div>}
      </div>
    );
  };
  