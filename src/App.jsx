import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { CountdownContext } from './context/CountdownContext.jsx'
import './App.css'

import NewYear from './assets/newyear.jpg'

function App() {
  const {event} = useContext(CountdownContext)

  let eventImage = null

  if (event) eventImage = event.image

  return (
    <>
      <div className='App' style={eventImage
        ? {backgroundImage: `url(${event.image})`}
        : {backgroundImage: `url(${NewYear})`}
      }>
        <div className="container">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App
