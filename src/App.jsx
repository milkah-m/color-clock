//GOAL: to create a clock app that dynamically displays the current date and time with color
  //1. initiate a react porject
  //2. install npm and more specifically install date fns for date and time functionality
  //3. remove boilerplate jsx code
  //4. add a p tag that returns a place holder for the current date and time

import { useState, useEffect } from 'react'//import react

import { format } from 'date-fns' //import format to format the date
import './App.css' //import app.css for styling purposes
//how to: add the p tag that renders a placeholder for date and time
 //1. create the app function to hold the logic
 //2. get the current date using newDate()
 //3. format that date using the format function and use PP for current date and pp for current time

 //4. return the p tag using jsx and give it the value of the formatted date. do this by using curly braces
 //5. anything else i am missing?




//Create the function app() that holds the logic
function App(){

 //Date is the current state of the date, setDate is the function that changes it. Set the array of these two equal to useState that takes in the parameter of newDate()
   const [date, setDate] = useState(new Date()) 
  
//Define the use effect function. It basically updates the current date every second by employing set interval and clear interval functionalities
 useEffect(() => {
  const interval = setInterval(() => {
    setDate(new Date())
  }, 1000)

  return () => clearInterval(interval)
}, [])

//Use the format function to display the date as a human readable string. date is the current date 'state' PP is current date. pp is current time. 
  const formattedDate = format(date, "PPpp")


//Use jsx to return the formatted date within a p tag.
  return (<div>
    <p className='date'>{formattedDate}</p>
  </div>)
}

export default App;

//1. how to do the pp format thing?
//2. give p tag a class name for css editing