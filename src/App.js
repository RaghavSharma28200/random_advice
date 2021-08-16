import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  state = {
    advice :''
  }
  componentDidMount(){
    this.fetchAdvice();
  }
  fetchAdvice = ()=>{
   axios.get('https://api.adviceslip.com/advice').then((res)=>{
 const {advice} = res.data.slip;
this.setState({advice:advice})
   }).catch((error)=>{
     alert('Check Your Internet Connection or Try again')
   })
  }

  
  

  render() {

    return (
      <div className = "container" >
      <div className = "box">
      <h1 className = "text">{this.state.advice}</h1>
      <button onClick ={this.fetchAdvice} className = "btn">Give Advice</button>
      </div>
      </div>
    )
  }
}
