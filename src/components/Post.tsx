import { BsThreeDots, BsBookmark } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineShareAlt, AiOutlineComment } from 'react-icons/ai'

export const Post: React.FC = () => {
  return (
    <div className="w-[600px] rounded-sm outline outline-1 outline-gray-300">
      <div className="flex h-[60px] items-center justify-between px-4">
        <div className="flex items-center text-sm font-medium">
          <div className="h-6 w-6 animate-pulse rounded-full bg-gray-100"></div>
          <div className="ml-4 h-2"></div>
          {/* <p className="ml-4">username</p> */}
        </div>
        <BsThreeDots />
      </div>
      <div className="h[600px] h-96 animate-pulse bg-gray-100"></div>
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between">
          <div className="my-2 flex h-9 items-center space-x-4">
            <AiOutlineHeart className="h-6 w-6" />
            <AiOutlineComment className="h-6 w-6" />
            <AiOutlineShareAlt className="h-6 w-6" />
          </div>
          <BsBookmark className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-1/2 animate-pulse rounded-full bg-gray-100"></div>
          <div className="h-4 w-1/4 animate-pulse rounded-full bg-gray-100"></div>
          <div className="h-4 w-2/3 animate-pulse rounded-full bg-gray-100"></div>
        </div>
      </div>
    </div>
  )
}
