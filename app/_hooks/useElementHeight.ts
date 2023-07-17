import { RefObject, useLayoutEffect, useRef, useState } from 'react'

type Result = {
  el: RefObject<HTMLDivElement>
  DOMRect: DOMRect | null
}

const useElementHeight = (isExist = true): Result => {
  const el = useRef<HTMLDivElement>(null)
  const [DOMRect, setDOMRect] = useState<DOMRect | null>(null)
  useLayoutEffect(() => {
    const updateSize = (): void => {
      if (!el.current || !isExist) return
      const elHeight = el.current.getBoundingClientRect()
      setDOMRect(elHeight)
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, [el, isExist])
  return { el, DOMRect }
}

export { useElementHeight }
