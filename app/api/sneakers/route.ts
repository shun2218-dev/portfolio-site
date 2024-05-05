import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    PICKUP_SLIDES: [
      { id: 1, path: '/images/sneakers/pickup1.jpg', alt: 'pick up 1', width: 630, height: 420 },
      { id: 2, path: '/images/sneakers/pickup2.jpg', alt: 'pick up 2', width: 630, height: 420 },
      { id: 3, path: '/images/sneakers/pickup3.jpg', alt: 'pick up 3', width: 630, height: 420 },
      { id: 4, path: '/images/sneakers/pickup4.jpg', alt: 'pick up 4', width: 630, height: 420 },
      { id: 5, path: '/images/sneakers/pickup5.jpg', alt: 'pick up 5', width: 630, height: 420 },
      { id: 6, path: '/images/sneakers/pickup6.jpg', alt: 'pick up 6', width: 630, height: 420 },
      { id: 7, path: '/images/sneakers/pickup7.jpg', alt: 'pick up 7', width: 630, height: 420 },
      { id: 8, path: '/images/sneakers/pickup8.jpg', alt: 'pick up 8', width: 630, height: 420 },
      { id: 9, path: '/images/sneakers/pickup9.jpg', alt: 'pick up 9', width: 630, height: 420 },
    ],
    FEATURE_ITEMS: [
      { id: 1, path: '/images/sneakers/feature1.jpg', alt: 'feature 1', width: 630, height: 420 },
      { id: 2, path: '/images/sneakers/feature2.jpg', alt: 'feature 2', width: 630, height: 420 },
      { id: 3, path: '/images/sneakers/feature3.jpg', alt: 'feature 3', width: 630, height: 420 },
      { id: 4, path: '/images/sneakers/feature4.jpg', alt: 'feature 4', width: 630, height: 420 },
      { id: 5, path: '/images/sneakers/feature5.jpg', alt: 'feature 5', width: 630, height: 420 },
      { id: 6, path: '/images/sneakers/feature6.jpg', alt: 'feature 6', width: 630, height: 420 },
      { id: 7, path: '/images/sneakers/feature7.jpg', alt: 'feature 7', width: 630, height: 420 },
      { id: 8, path: '/images/sneakers/feature8.jpg', alt: 'feature 8', width: 630, height: 420 },
      { id: 9, path: '/images/sneakers/feature9.jpg', alt: 'feature 9', width: 630, height: 420 },
    ],
  })
}
