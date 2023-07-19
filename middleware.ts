import { NextRequest, NextResponse } from 'next/server'
import { decodeBase64 } from '~/lib/buffer'

// For production use only

export const config = {
  matcher: ['/', '/pon-design/:path*'],
}

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = decodeBase64(authValue).split(':')

    if (user === process.env.NEXT_PUBLIC_USER && pwd === process.env.NEXT_PUBLIC_PASS) {
      return NextResponse.next()
    }
  }

  return NextResponse.json('Basic Auth Required', { headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' }, status: 401 })
}

// import { NextResponse, NextRequest } from 'next/server'
// import { decodeBase64 } from '~/lib/buffer'

// /**
//  * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//  */

// // For production use only
// const matcher = ['/', '/pon-design/*']
// export const config = {
//   matcher,
// }

// export function middleware(req: NextRequest) {
//   const basicAuth = req.headers.get('Authorization')

//   if (basicAuth) {
//     const authValue = basicAuth.split(' ')[1]
//     const [user, pwd] = decodeBase64(authValue).split(':')

//     if (user === process.env.NEXT_PUBLIC_USER && pwd === process.env.NEXT_PUBLIC_PASS) {
//       return NextResponse.next()
//     }
//     return NextResponse.json({ error: 'Invalid credentials' }, { headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' }, status: 401 })
//   } else {
//     return NextResponse.json({ error: 'Please enter credentials' }, { headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' }, status: 401 })
//   }
// }
