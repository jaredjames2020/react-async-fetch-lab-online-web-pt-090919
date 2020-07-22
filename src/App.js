// create your App component here
<<<<<<< HEAD
import React, { Component } from 'react'

=======
>>>>>>> 7d72053ec808e734c7db988f030875646fd32492
class App extends React.Component {
 
  constructor() {
    super()
<<<<<<< HEAD
    this.state = {
=======
    this.state ={
>>>>>>> 7d72053ec808e734c7db988f030875646fd32492
      peopleInSpace: []
    }
  }
  
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }
  
<<<<<<< HEAD
render() {
    return (
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
      </div>
    )
=======
  render(){
    return({
      <div>{this.state.peopleInSpace}</div>
    })
>>>>>>> 7d72053ec808e734c7db988f030875646fd32492
  }
 
}

export default App