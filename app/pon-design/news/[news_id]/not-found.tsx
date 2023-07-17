'use client'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    setTimeout(() => redirect('/pon-design/news'), 5000)
  }, [])
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        Back to <Link href="/pon-design">top</Link>
      </p>
      <p>Automaticaly Redirect 5 seconds later</p>
    </div>
  )
}
