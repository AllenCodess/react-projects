import {format} from 'date-fns' //importing format from date-fns
import './App.css' // importing styling from App.css

export default function CurrentTime() { //function that displays current time/date
  return (
    <body>                      
      <p>{format ( new Date(), 'hh:mm EEEE, MMMM do Y')}</p>
      </body>
  )
}

