import React, { lazy, Suspense } from 'react';

const LazyPaginationComponent = lazy(() => import('./PaginationComponent'));

const PaginationComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPaginationComponent {...props} />
  </Suspense>
);

export default PaginationComponent;
