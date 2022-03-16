import { Navbar, Post } from './components'

import { instagramLogo } from './assets'

export const App: React.FC = () => {
  return (
    <div className="pb-4">
      <Navbar />
      <div className="mx-auto mt-6 grid max-w-[935px] grid-cols-[600px_335px] gap-4">
        <div>
          <Post />
        </div>
        <div className="h-96 w-full bg-slate-100"></div>
      </div>
    </div>
  )
}

export default App
