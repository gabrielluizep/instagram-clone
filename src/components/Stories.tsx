import { useState, useEffect, useRef } from 'react'

export const Stories = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    setScrollPosition(scrollRef.current?.scrollLeft || 0)
  }, [scrollRef])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition
    }
  }, [scrollPosition])

  return (
    <div className="relative mb-6 flex h-[119px] w-full flex-nowrap items-center py-2 outline outline-1 outline-gray-300">
      <div
        className={`absolute left-1 z-10 mt-2 h-6 w-6 rounded-full bg-white drop-shadow-2xl 
      ${scrollPosition === 0 && 'hidden'}`}
        onClick={() =>
          setScrollPosition(
            (scrollRef.current?.scrollLeft || 0) >= 600 ? (scrollRef.current?.scrollLeft || 0) - 600 : 0,
          )
        }
      />
      <div
        className={`absolute right-1 z-10 mt-2 h-6 w-6 rounded-full bg-white shadow-2xl ${
          scrollPosition === (scrollRef.current?.scrollWidth || 0) - (scrollRef.current?.clientWidth || 0) &&
          'hidden'
        }`}
        onClick={() =>
          setScrollPosition(
            (scrollRef.current?.scrollLeft || 0) <=
              (scrollRef.current?.scrollWidth || 0) - (scrollRef.current?.clientWidth || 0)
              ? (scrollRef.current?.scrollLeft || 0) + 600
              : (scrollRef.current?.scrollWidth || 0) - (scrollRef.current?.clientWidth || 0),
          )
        }
      />

      <div ref={scrollRef} className="flex overflow-x-hidden scroll-smooth p-2">
        {Array.from(Array(100).keys()).map((item, index) => (
          <div
            key={item}
            className={`mx-2 aspect-square min-w-[3.5rem] animate-pulse rounded-full bg-gray-300 ${
              index % 9 === 0 && 'bg-green-300'
            } ${index % 9 === 8 && 'bg-red-300'}`}
          ></div>
        ))}
      </div>
    </div>
  )
}
