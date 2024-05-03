import { ImageResponse } from 'next/og'
import NextImage from 'next/image'

// Image metadata
export const alt = 'PON DESIGN'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(<NextImage src="./opengraph-image.png" width="1200" height="630" alt={alt} />, { ...size })
}
