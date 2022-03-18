import { useCallback, useEffect, useRef } from 'react'
import { AiFillLeftCircle } from 'react-icons/ai'

export const Stories = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = useCallback(
    (mode) => {
      switch (mode) {
        case 'increase':
          scrollRef.current.scrollLeft >= 100
            ? (scrollRef.current.scrollLeft += 100)
            : (scrollRef.current.scrollLeft = 0)
        case 'decrease':
          scrollRef.current.scrollLeft >= 100
            ? (scrollRef.current.scrollLeft -= 100)
            : (scrollRef.current.scrollLeft = 99999)
      }
    },
    [scrollRef],
  )

  return (
    <div className="relative mb-6 flex h-[119px] w-full flex-nowrap items-center  py-2 outline outline-1 outline-gray-300">
      <AiFillLeftCircle
        className="absolute left-1 z-10 h-6 w-6 rounded-full text-white shadow-2xl"
        onClick={() => scroll('decrease')}
      />
      <AiFillLeftCircle
        className="absolute right-1  z-10 h-6 w-6 rotate-180 rounded-full text-white shadow-2xl"
        onClick={() => scroll('increase')}
      />
      <div ref={scrollRef} className="flex overflow-x-hidden">
        {Array.from(Array(13).keys()).map((item) => (
          <div
            key={item}
            className="ml-3 aspect-square min-w-[3.5rem] animate-pulse rounded-full bg-gray-300"
          ></div>
        ))}
      </div>
    </div>
  )
}
