import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import WelcomePage from './pages/Welcome.jsx'
import ChallengesPage from './pages/Challenges.jsx'
import Playground from './pages/Playround/Playround.jsx'

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/challenges', element: <ChallengesPage /> },
  { path: '/playround', element: <Playground /> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
