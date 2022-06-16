import React, { lazy, Suspense } from 'react';

const LazyGalleryComponent = lazy(() => import('./GalleryComponent'));

const GalleryComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGalleryComponent {...props} />
  </Suspense>
);

export default GalleryComponent;
