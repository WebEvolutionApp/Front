import { forwardRef } from 'react';

const Video = forwardRef(function Video({ className, src }, ref) {
  return (
    <video
      ref={ref}
      className={className}
      muted
      playsInline
      preload="auto"
    >
      <source src={src} type='video/mp4' />
      Ваш браузер не поддерживает тег <code>video</code>.
    </video>
  );
})

export default Video;