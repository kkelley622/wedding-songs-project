// -Add a controlled form that includes:
//    A text input
//    A button with the text of “Click Me!”
//    A paragraph that has a counter that starts at 0
// -When they input text in the text field and submit it, the text input should reset. 
// At the same time the counter should increment based on the word length
// and based on word length
// -The counter will continue to increment based on word length and will never reset back to zero. 
// So for example: if the student typed in hi and submitted 3 times,
//  the counter would be at 6.

// import React, { useState } from 'react'

// const Challenge = () => {
//     const [formInput, setFormInput] = useState("");
//     const [counter, setCounter] = useState(0)

//     const handleChange = (event) => {
//         setFormInput(event.target.value)
//         console.log(formInput)
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         setFormInput("")
//         console.log(formInput.length)
//         setCounter(counter + formInput.length)
//     }

    


//   return (
//     <form onSubmit={handleSubmit}>Challenge
//         <input
//         type="text"
//         onChange={handleChange}
//         >
//         </input>
//         <button>Click Me!</button>
//         <p>{counter}</p>
//     </form>
//   )
// }

// export default Challenge