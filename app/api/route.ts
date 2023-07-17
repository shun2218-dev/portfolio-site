import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json([
    { pc: 'top-works_smoothiesta_pc.png', sp: 'top-works_smoothiesta.png' },
    { pc: 'top-works_web-conference_pc.png', sp: 'top-works_web-conference.png' },
    { pc: 'top-works_lamina_pc.png', sp: 'top-works_lamina.png' },
  ])
}
