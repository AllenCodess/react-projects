import {format} from 'date-fns' //importing format from date-fns

export default function CurrentTime() { //function that styles the text content and displays current time/date
  return (
    <body style={{                      // styling of the page
      textAlign: "center",
      fontSize: 50,
      width:700,
      margin: "0 auto",
     fontFamily: "Orbitron",
     color: "red", 
      backgroundColor: "lightgray",

    }}> 
      <p>{format ( new Date(), 'hh:mm EEEE, MMMM do Y')}</p>
      </body>
  )
}

// current time in the above syntax