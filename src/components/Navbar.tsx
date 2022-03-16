import { instagramLogo } from '../assets'
import {
  AiFillHome,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineSearch,
  AiFillCloseCircle,
} from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { GoDiffAdded } from 'react-icons/go'

export const Navbar: React.FC = () => {
  return (
    <nav className="h-[60px] outline outline-1 outline-gray-300">
      <div className="m-auto flex h-full max-w-[975px] items-center justify-between px-5">
        <div className="flex h-9 flex-1 items-end">
          <img className="cursor-pointer" src={instagramLogo} alt="Logo" />
        </div>
        <label className="flex-2 relative block h-9 overflow-hidden text-gray-400 focus-within:text-gray-600">
          <input
            type="text"
            name="Pesquisa"
            id="email"
            placeholder="Pesquisar"
            className="peer w-64 rounded-lg bg-gray-100 py-2 pl-10 text-sm text-gray-500 placeholder-gray-400 outline-none transition-all focus:pl-6 "
          />
          <AiOutlineSearch className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform transition-all peer-focus:-translate-x-8" />
          <AiFillCloseCircle className="absolute top-1/2 right-0 h-4 w-4 translate-x-4 -translate-y-1/2 transform cursor-pointer transition-all peer-focus:-translate-x-3" />
        </label>
        <div className="flex flex-1 items-center justify-end space-x-6">
          <AiFillHome className="block h-6 w-6 cursor-pointer" />
          <RiMessengerLine className="block h-6 w-6 cursor-pointer" />
          <GoDiffAdded className="block h-6 w-6 cursor-pointer" />
          <AiOutlineCompass className="block h-6 w-6 cursor-pointer" />
          <AiOutlineHeart className="block h-6 w-6 cursor-pointer" />
          <div className="h-6 w-6 animate-pulse cursor-pointer rounded-full bg-gray-100"></div>
        </div>
      </div>
    </nav>
  )
}
