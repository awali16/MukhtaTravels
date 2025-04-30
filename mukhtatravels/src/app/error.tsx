// app/dashboard/error.tsx
'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Route error:', error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong in the dashboard route.</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
