import { useRef, useEffect, useState } from "react";

const ScrollRevealBlock = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={targetRef}
      className={`reveal-block ${isVisible ? "visiblee" : "hiddenn"} text-red-800`}
    >
      This block appears when you scroll to it!
    </div>
  );
};

export default ScrollRevealBlock;
