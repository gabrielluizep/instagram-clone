import { Navbar, Post, Stories, Suggestions } from './components'

import { AiFillLeftCircle } from 'react-icons/ai'

export const App: React.FC = () => {
  return (
    <div className="pb-4">
      <Navbar />
      <div className="mx-auto mt-6 grid max-w-[935px] grid-cols-[600px_335px] gap-4">
        <div>
          <Stories />
          <Post />
        </div>
        <div>
          <Suggestions />
        </div>
      </div>
    </div>
  )
}

export default App
