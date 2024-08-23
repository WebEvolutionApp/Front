import { useState, useEffect } from "react";

export default function useAnimationStages(stages, delay) {
  const [animationStages, setAnimationStages] = useState([]);

  useEffect(() => {
    stages.forEach((stage, index) => {
      setTimeout(() => {
        setAnimationStages((prev) => [...prev, stage.id]);
      }, index * delay);
    });
  }, [stages, delay]);

  return animationStages;
}
