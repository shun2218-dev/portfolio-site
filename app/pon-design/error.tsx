'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h2 id="error-page">Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        id="error_back-to-top"
        aria-label="Back to top page from error page"
        aria-labelledby="error-page"
      >
        Try again
      </button>
    </div>
  )
}
