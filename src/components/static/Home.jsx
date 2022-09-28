import React from 'react'
import Challenge from '../Challenge';

const Home = () => {
  return (
    <div>
      <h1 align="center" style={{color: "rgb(20, 90, 50)"}}>Welcome to Kevin and Sandra's Wedding Songs App!</h1>
      <h2 align="center"><img src="https://media2.giphy.com/media/jU9m03NG7bw88rwzok/giphy.gif"/></h2>
      <p align="center" style={{color: "rgb(20, 90, 50)"}}>
        Take a look at what songs other guests have already added by clicking the <strong>Songs We've Already Got</strong> tab
      </p>
      <br/>
      <p align="center" style={{color: "rgb(20, 90, 50)"}}>
        Add your own song to the list by clicking the <strong>Add Your Jam</strong> tab
      </p>
      
    </div>
    )
}

export default Home;