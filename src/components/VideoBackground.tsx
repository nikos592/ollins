'use client';
import dynamic from 'next/dynamic';

const VideoBackground = dynamic(() => import('./VideoBackgroundInner'), {
  ssr: false,
});

export default VideoBackground;
