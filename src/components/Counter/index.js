import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  OnIncrease = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  OnDecrease = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div class="container">
        <h1 class="heading"> Counter </h1>
        <p class="count">{count} </p>
        <div>
          <button class="button" onClick={this.OnIncrease}>
            Increase
          </button>
          <button class="button" onClick={this.OnDecrease}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
