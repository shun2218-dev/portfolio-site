import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json('Basic Auth Required', { headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' }, status: 401 })
}
