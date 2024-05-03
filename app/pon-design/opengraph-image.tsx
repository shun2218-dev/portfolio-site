import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'PON DESIGN'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(<img src="./opengraph-image.png" width="1200" height="630" alt={alt} />, { ...size })
}
