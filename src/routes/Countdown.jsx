import { useContext } from 'react'
import Counter from '../components/Counter.jsx'
import Title from '../components/Title.jsx'
import useCountdown from '../hooks/UseCountdown.jsx'
import { CountdownContext } from '../context/CountdownContext.jsx'
import { Navigate } from 'react-router-dom'

const Countdown = () => {
    const {event} = useContext(CountdownContext)

    if(!event) return <Navigate to={'/'}/>

    const eventTitle = event.title

    const eventColor = event.color
    
    const [day, hour, minute, second] = useCountdown(event.date)

    return (
    <>
        <Title title={event.title} eventColor={eventColor}/>
            <div className="countdown-container">
                <Counter title='dias' number={day} eventColor={eventColor}/>
                <Counter title='horas' number={hour} eventColor={eventColor}/>
                <Counter title='minutos' number={minute} eventColor={eventColor}/>
                <Counter title='segundos' number={second} eventColor={eventColor}/>
          </div>
    </>
  )
}

export default Countdown
