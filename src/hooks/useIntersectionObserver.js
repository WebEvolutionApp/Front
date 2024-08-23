import { useEffect, useRef } from "react";

export default function useIntersectionObserver(onIntersect, options) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(element);
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [onIntersect, options]);

  return ref;
}
