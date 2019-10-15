import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushis: [],
      index: 0,
      budget: 100,
      plates: []
    }
  }

  componentDidMount = () => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      this.setState({ sushis: data })
    })
  }

  displayedSushis = () => {
    let { sushis, index } = this.state
    return sushis.slice(index, index + 4)
  }

  moreSushi = () => {
    let newIndex = (this.state.index === 96 ? 0 : this.state.index + 4)
    this.setState({ index: newIndex })
  }

  eatSushi = (id, price, eaten) => {
    let { sushis, budget, plates } = this.state
    if (eaten || price > budget) { return }

    let newSushi = sushis.map(sushi => {
      if (sushi.id === id) { sushi.eaten = true }
      return sushi
    })

    this.setState({
      sushis: newSushi,
      budget: budget - price,
      plates: [...plates, "Carlos sucks"] })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.displayedSushis()}
          moreSushi={this.moreSushi}
          eatSushi={this.eatSushi}
        />
        <Table budget={this.state.budget} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;